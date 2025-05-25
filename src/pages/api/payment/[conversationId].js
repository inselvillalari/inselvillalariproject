import iyzipay from "../../../utils/iyzipay";
import { dbConnect } from "../../../utils/dbConnect";
import Reservation from "../../../models/Reservation";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const {
    query: { conversationId },
    body: { token },
  } = req;

  if (!token || !conversationId) {
    return res.status(400).send("Token veya conversationId eksik");
  }

  await dbConnect();

  iyzipay.checkoutForm.retrieve(
    { locale: "tr", token },
    async (err, result) => {
      if (err) {
        return res.redirect(302, `/reservation-failed?reason=payment-error`);
      }

      if (result.status !== "success") {
        return res.redirect(302, `/reservation-failed?reason=payment-failed`);
      }

      const paymentTransactionId = result.itemTransactions?.[0]?.paymentTransactionId;

      const updated = await Reservation.findOneAndUpdate(
        { conversationId },
        {
          status: "Completed",
          paymentTransactionId: paymentTransactionId,
        },
        { new: true }
      );

      if (!updated) {
        return res.redirect(302, `/reservation`);
      }
      return res.redirect(302, `/reservation-success/${conversationId}`);
    }
  );
}
