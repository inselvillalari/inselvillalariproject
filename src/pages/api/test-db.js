import { dbConnect } from "../../utils/dbConnect";
import Reservation from "../../models/Reservation";

export default async function handler(req, res) {
  await dbConnect();

  const test = await Reservation.find().limit(1);
  res.status(200).json({ status: "ok", result: test });
}