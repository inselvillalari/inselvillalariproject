import Reservation from "../../../../models/Reservation";
import { dbConnect } from "../../../../utils/dbConnect";
import { verifyAdminToken } from "../../../../utils/verifyToken";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method !== "POST") return res.status(405).end();

  const decoded = verifyAdminToken(req, res);
  if (!decoded) return;

  try {
    const {
      name,
      surname,
      villa,
      entryDate,
      exitDate,
      gsmNumber,
      email,
      identityNumber,
      price,
      grandTotal,
      reservationBy,
    } = req.body;

    if (
      !name ||
      !surname ||
      !villa ||
      !entryDate ||
      !exitDate ||
      !reservationBy
    ) {
      return res.status(400).json({ error: "Eksik zorunlu alanlar" });
    }

    const entry = new Date(entryDate);
    const exit = new Date(exitDate);
    const totalNights = Math.ceil(
      (exit.getTime() - entry.getTime()) / (1000 * 60 * 60 * 24)
    );

    const generateShortCode = () => {
      const now = Date?.now()?.toString(36);
      const rand = Math?.random()?.toString(36).substr(2, 5);
      return `RSV-${now}-${rand}`.toUpperCase(); // Örn: RSV-LQDC6D-HU7P9
    };

    const reservationNumber = generateShortCode();

    const newRes = await Reservation.create({
      name,
      surname,
      villa,
      email: email || "",
      gsmNumber: gsmNumber || "",
      identityNumber: identityNumber || "",
      entryDate: entry,
      exitDate: exit,
      price: price || 0,
      grandTotal: grandTotal || 0,
      status: "Completed",
      reservationBy: reservationBy,
      reservationNumber: reservationNumber,
      conversationId: reservationNumber,
      zipCode: "00000",
      address: "",
      city: "",
      country: "",
      locale: "tr",
      totalNights,
      fromIyzico: false,
    });

    return res.status(201).json({
      status: "created",
      data: newRes,
      message: "Rezervasyon başarıyla oluşturuldu.",
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
