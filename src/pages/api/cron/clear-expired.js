import { NextResponse } from "next/server";
import { dbConnect } from "../../../utils/dbConnect";
import Reservation from "../../../models/Reservation";

export async function GET(req) {
  const authHeader = req.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (authHeader !== `Bearer ${cronSecret}`) {
    console.warn("Unauthorized cron request received.");
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    console.log("⏳ Connecting to DB...");
    await dbConnect();
    console.log("✅ MongoDB connected.");

    const thresholdDate = new Date(Date.now() - 5 * 60 * 1000);
    console.log("📅 Threshold date:", thresholdDate);

    const result = await Reservation.updateMany(
      {
        status: "Pending",
        createdAt: { $lt: thresholdDate },
      },
      { $set: { status: "Failed" } }
    );

    console.log(`🔁 Updated ${result.modifiedCount} reservations.`);

    return NextResponse.json({
      ok: true,
      updatedCount: result.modifiedCount,
    });
  } catch (error) {
    console.error("❌ CRON job error:", {
      message: error.message,
      stack: error.stack,
    });

    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 500 }
    );
  }
}
