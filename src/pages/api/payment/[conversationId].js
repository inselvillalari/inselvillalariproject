import iyzipay from "../../../utils/iyzipay";
import { dbConnect } from "../../../utils/dbConnect";
import Reservation from "../../../models/Reservation";
import errorHandler from "../../../helpers/api/errorHandler";
import { toast } from "react-toastify";
import { sendReservationMail } from "../../../utils/sendMail";
import { generateReservationMail } from "../../../utils/generateReservationMail";

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
        await Reservation.findOneAndUpdate(
          { conversationId },
          {
            status: "Failed",
          },
          { new: true }
        );
        return res.redirect(
          302,
          `/reservation-failed?reason=${encodeURIComponent(
            result?.errorMessage || "Ödeme başarısız"
          )}`
        );
      }

      if (result.status !== "success") {
        await Reservation.findOneAndUpdate(
          { conversationId },
          {
            status: "Failed",
          },
          { new: true }
        );
        return res.redirect(
          302,
          `/reservation-failed?reason=${encodeURIComponent(
            result?.errorMessage || "Ödeme başarısız"
          )}`
        );
      }

      const paymentTransactionId =
        result.itemTransactions?.[0]?.paymentTransactionId;

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

      try {
        await sendReservationMail({
          to: updated.email,
          subject: "İnsel Villaları Rezervasyon Onayı",
          html: generateReservationMail(updated),
        });
      } catch (mailError) {
        console.error("📨 Mail gönderilemedi:", mailError);
      }
      return res.redirect(302, `/reservation-success/${conversationId}`);
    }
  );
}
