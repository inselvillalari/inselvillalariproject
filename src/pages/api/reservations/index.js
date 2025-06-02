import { dbConnect } from "../../../utils/dbConnect";
import Reservation from "../../../models/Reservation";

export default async function handler(req, res) {
  await dbConnect();

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
