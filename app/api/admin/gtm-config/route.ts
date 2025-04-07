import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";
import GTMConfig from "@/models/GTMConfig";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  await connectDB();

  try {
    // Get the first GTM config or create a default one if none exists
    const gtmConfig = await GTMConfig.findOne();

    if (!gtmConfig) {
      // Create a default configuration if none exists
      return NextResponse.json({ gtmConfig: null }, { status: 404 });
    }

    return NextResponse.json({ gtmConfig });
  } catch (error) {
    console.log("Error getting GTM config:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const isAdmin = await verifyAdmin(req);

  if (!isAdmin) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  await connectDB();

  try {
    const body = await req.json();
    const { gtmId, googleAnalyticsId } = body;
    const gtmConfig = await GTMConfig.create({
      gtmId,
      googleAnalyticsId,
    });

    return NextResponse.json({ gtmConfig });
  } catch (error) {
    console.log("Error creating GTM config:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
