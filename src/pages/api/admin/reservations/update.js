import Reservation from "../../../../models/Reservation";
import { dbConnect } from "../../../../utils/dbConnect";
import { verifyAdminToken } from "../../../../utils/verifyToken";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method !== "PUT") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const decoded = verifyAdminToken(req, res);
  if (!decoded) return;

  const {
    reservationNumber,
    name,
    villa,
    status,
    entryDate,
    exitDate,
    grandTotal,
  } = req.body;

  if (!reservationNumber) {
    return res.status(400).json({ message: "reservationNumber zorunludur." });
  }

  try {
    const reservation = await Reservation.findOne({ reservationNumber });

    if (!reservation) {
      return res.status(404).json({ message: "Rezervasyon bulunamadı." });
    }

    // Alanları güncelle
    reservation.name = name ?? reservation.name;
    reservation.villa = villa ?? reservation.villa;
    reservation.status = status ?? reservation.status;
    reservation.grandTotal = grandTotal ?? reservation.grandTotal;
    reservation.entryDate = entryDate ?? reservation.entryDate;
    reservation.exitDate = exitDate ?? reservation.exitDate;

    await reservation.save();

    return res.status(200).json({
      status: "ok",
      data: reservation,
      message: "Başarıyla güncellendi!",
    });
  } catch (err) {
    return res.status(500).json({ status: "error", message: err.message });
  }
}
