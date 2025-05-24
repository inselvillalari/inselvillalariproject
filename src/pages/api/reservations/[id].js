import { dbConnect } from "../../../utils/dbConnect";
import Reservation from "../../../models/Reservation";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const reservation = await Reservation.findOne({ reservationNumber: id });
      if (!reservation) return res.status(404).json({ status: "not found" });
      return res.status(200).json({ status: "ok", data: reservation });
    } catch (err) {
      return res.status(400).json({ status: "error", error: err.message });
    }
  }

  if (req.method === "DELETE") {
    try {
      await Reservation.findOneAndDelete({ reservationNumber: id });
      return res.status(204).end(); // no content
    } catch (err) {
      return res.status(400).json({ status: "error", error: err.message });
    }
  }

  return res.status(405).end(); // method not allowed
}
