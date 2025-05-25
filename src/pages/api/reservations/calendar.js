import { dbConnect } from "../../../utils/dbConnect";
import Reservation from "../../../models/Reservation";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    const { villa } = req.body;

    if (!villa) {
      return res
        .status(400)
        .json({ status: "error", message: "Villa adı eksik" });
    }

    try {
      const reservations = await Reservation.find({
        villa,
        status: { $in: ["Completed"] },
      });

      const dateRanges = reservations.map((res) => {
        const status = Array.isArray(res.status) ? res.status[0] : res.status;

        return {
          start: res.entryDate?.toISOString().split("T")[0],
          end: res.exitDate?.toISOString().split("T")[0],
          color:
            res?.reservationBy[0] === "Customer" ||
            res?.reservationBy[0] === "Outsource"
              ? "#ff851b"
              : "gray",
        };
      });

      return res.status(200).json({ status: "ok", data: dateRanges });
    } catch (err) {
      return res.status(500).json({ status: "error", error: err.message });
    }
  }

  return res.status(405).end();
}
