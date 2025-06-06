import { dbConnect } from "../../../utils/dbConnect";
import Reservation from "../../../models/Reservation";

export default async function handler(req, res) {
  const isVercelCron = req.headers["x-vercel-cron"] === "1";
  const authHeader = req.headers.authorization;
  const cronSecret = process.env.CRON_SECRET;

  // Güvenlik kontrolü
  if (!isVercelCron && authHeader !== `Bearer ${cronSecret}`) {
    return res.status(401).send("Unauthorized");
  }

  try {
    await dbConnect();

    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
    const result = await Reservation.updateMany(
      { status: "Pending", createdAt: { $lt: fiveMinutesAgo } },
      { $set: { status: "Failed" } }
    );

    return res.status(200).json({
      ok: true,
      updatedCount: result.modifiedCount,
    });
  } catch (error) {
    return res.status(500).json({ ok: false, error: error.message });
  }
}