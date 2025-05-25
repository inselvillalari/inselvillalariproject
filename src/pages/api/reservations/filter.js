import { dbConnect } from "../../../utils/dbConnect";
import Reservation from "../../../models/Reservation";
import { verifyAdminToken } from "../../../utils/verifyToken";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method !== "POST") return res.status(405).end(); // Sadece POST desteklenir

  const decoded = verifyAdminToken(req, res);
  if (!decoded) return; // Geçersiz token varsa sonlandır

  try {
    const filters = req.body || {};

    const allowedFields = [
      "villa",
      "name",
      "surname",
      "identityNumber",
      "email",
      "gsmNumber",
      "reservationNumber",
      "status",
      "reservationBy",
    ];

    const queryObj = Object.keys(filters)
      .filter((key) => allowedFields.includes(key))
      .reduce((acc, key) => {
        const value = filters[key];
        if (["name", "surname", "reservationNumber"].includes(key)) {
          // İçeren (contains) ve büyük/küçük harfe duyarsız
          acc[key] = { $regex: value, $options: "i" };
        } else {
          acc[key] = value;
        }
        return acc;
      }, {});

    const results = await Reservation.find(queryObj).sort({ createdAt: -1 });

    return res.status(200).json({ status: "ok", data: results });
  } catch (error) {
    return res.status(400).json({ status: "error", error: error.message });
  }
}
