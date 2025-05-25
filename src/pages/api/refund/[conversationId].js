import Reservation from "../../../models/Reservation";
import { dbConnect } from "../../../utils/dbConnect";
import iyzipay from "../../../utils/iyzipay";
import { verifyAdminToken } from "../../../utils/verifyToken";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const {
    query: { conversationId },
    body: { refundAmount },
  } = req;

  const decoded = verifyAdminToken(req, res);
  if (!decoded) return;

  await dbConnect();

  const reservation = await Reservation.findOne({ conversationId });

  if (!reservation || !reservation.paymentTransactionId) {
    return res
      .status(404)
      .json({ error: "Rezervasyon veya işlem ID bulunamadı" });
  }

  const price = refundAmount || reservation.price;

  const refundRequest = {
    locale: "tr",
    conversationId: conversationId,
    paymentTransactionId: reservation.paymentTransactionId,
    price: Number(price).toFixed(2),
    currency: "TRY",
    ip:
      req.headers["x-forwarded-for"] || req.socket.remoteAddress || "127.0.0.1",
  };

  console.log("refundRequest", refundRequest);

  iyzipay.refund.create(refundRequest, (err, result) => {
    if (err || result.status !== "success") {
      console.error("❌ İade Başarısız:", err || result);
      return res
        .status(500)
        .json({ error: "İade işlemi başarısız", detail: err || result });
    }

    (async () => {
      await Reservation.findOneAndUpdate(
        { conversationId },
        {
          refundPrice: Number(price),
          status: "Canceled",
        },
        { new: true }
      );

      console.log("✅ İade Başarılı:", result);
      return res
        .status(200)
        .json({
          status: "ok",
          refundedAmount: Number(price),
          message: `İade başarılı! İade edilen tutar ${price}`,
        });
    })();
  });
}
