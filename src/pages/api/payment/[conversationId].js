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
      if (err || result.status !== "success") {
        return res.redirect(302, `/reservation-failed?reason=payment-failed`);
      }

      // Statüyü güncelle
      const updated = await Reservation.findOneAndUpdate(
        { conversationId: conversationId },
        { status: "Completed" },
        { new: true }
      );

      if (!updated) {
        return res.redirect(302, `/reservation`);
      }

      // Başarılı yönlendirme → frontend sayfası
      return res.redirect(302, `/reservation-success/${conversationId}`);
    }
  );
}
