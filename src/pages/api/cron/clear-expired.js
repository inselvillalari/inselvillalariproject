import { NextResponse } from "next/server";
import { dbConnect } from "../../../utils/dbConnect";
import Reservation from "../../../models/Reservation";

export async function GET(req) {
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    await dbConnect();

    const result = await Reservation.updateMany(
      {
        status: "Pending",
        createdAt: { $lt: new Date(Date.now() - 5 * 60 * 1000) },
      },
      { $set: { status: "Failed" } }
    );

    return NextResponse.json({
      ok: true,
      updatedCount: result.modifiedCount,
    });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 500 }
    );
  }
}
