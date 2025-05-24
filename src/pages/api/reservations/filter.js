import { dbConnect } from "../../../utils/dbConnect";
import Reservation from "../../../models/Reservation";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method !== "POST") return res.status(405).end(); // Yalnızca POST izinli

  try {
    const filters = req.body || {};

    const allowedFields = [
      "villa",
      "gsmNumber",
      "email",
      "hirerName",
      "reservationNumber",
      "status",
    ];

    const queryObj = Object.keys(filters)
      .filter((key) => allowedFields.includes(key))
      .reduce((acc, key) => {
        acc[key] = filters[key];
        return acc;
      }, {});

    const results = await Reservation.find(queryObj).sort({ createdAt: -1 });

    return res.status(200).json({ status: "ok", data: results });
  } catch (error) {
    return res.status(400).json({ status: "error", error: error.message });
  }
}
