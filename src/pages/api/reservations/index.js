import { dbConnect } from "../../../utils/dbConnect";
import Reservation from "../../../models/Reservation";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const reservations = await Reservation.find().sort({ createdAt: -1 });
    return res.status(200).json({ status: "ok", data: reservations });
  }

  if (req.method === "POST") {
    try {
      const newRes = await Reservation.create(req.body);
      return res.status(201).json({ status: "created", data: newRes });
    } catch (error) {
      return res.status(400).json({ status: "error", error: error.message });
    }
  }

  return res.status(405).end(); // Method Not Allowed
}
