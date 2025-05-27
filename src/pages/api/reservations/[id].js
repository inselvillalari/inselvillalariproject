import { dbConnect } from "../../../utils/dbConnect";
import Reservation from "../../../models/Reservation";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method !== "POST") return res.status(405).end();
  const { id } = req.query;

  if (req.method === "POST") {
    try {
      const { from } = req.body;

      const reservation = await Reservation.findOne({ reservationNumber: id });
      if (!reservation)
        return res.status(404).json({
          status: "not found",
          message: "Rezervasyon bulunamadı!",
        });
      return res.status(200).json({
        status: "ok",
        data:
          from == "successPage"
            ? {
                reservationNumber: reservation?.reservationNumber,
                villa: reservation?.villa,
                entryDate: reservation?.entryDate,
                exitDate: reservation?.exitDate,
                totalNights: reservation?.totalNights,
                heatedPool: reservation?.heatedPool,
                wantsCrib: reservation?.wantsCrib,
                name: reservation?.name,
                surname: reservation?.surname,
                identityNumber: reservation?.identityNumber,
                email: reservation?.email,
                gsmNumber: reservation?.gsmNumber,
                createdAt: reservation?.createdAt,
                extraServices: reservation?.extraServices,
                adults: reservation?.adults,
                children: reservation?.children,
                totalVillaPrice: reservation?.totalVillaPrice,
                totalHeatedPoolPrice: reservation?.totalHeatedPoolPrice,
                grandTotal: reservation?.grandTotal,
                children: reservation?.children,
                price: reservation?.price,
              }
            : {
                reservationNumber: reservation?.reservationNumber,
                villa: reservation?.villa,
                entryDate: reservation?.entryDate,
                exitDate: reservation?.exitDate,
                totalNights: reservation?.totalNights,
                totalHeatedPoolPrice: reservation?.totalHeatedPoolPrice,
                wantsCrib: reservation?.wantsCrib,
                createdAt: reservation?.createdAt,
                extraServices: reservation?.extraServices,
                adults: reservation?.adults,
                children: reservation?.children,
                price: reservation?.price,
              },
      });
    } catch (err) {
      return res.status(400).json({ status: "error", error: err.message });
    }
  }

  return res.status(405).end(); // method not allowed
}
