import { dbConnect } from "../../../utils/dbConnect";
import Reservation from "../../../models/Reservation";

export default async function handler(req, res) {
  const authHeader = req.headers.authorization;
  const cronSecret = process.env.CRON_SECRET;

  if (authHeader !== `Bearer ${cronSecret}`) {
    console.warn("Unauthorized cron request received.");
    return res.status(401).send("Unauthorized");
  }

  try {
    await dbConnect();
    const thresholdDate = new Date(Date.now() - 5 * 60 * 1000);
    const result = await Reservation.updateMany(
      { status: "Pending", createdAt: { $lt: thresholdDate } },
      { $set: { status: "Failed" } }
    );

    return res.status(200).json({
      ok: true,
      updatedCount: result.modifiedCount,
    });
  } catch (error) {
    console.error("CRON error:", error);
    return res.status(500).json({ ok: false, error: error.message });
  }
}
