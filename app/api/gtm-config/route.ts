import connectDB from "@/lib/mongodb";
import GTMConfig from "@/models/GTMConfig";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();

  try {
    // Get the first GTM config or create a default one if none exists
    const gtmConfig = await GTMConfig.findOne();

    if (!gtmConfig) {
      return NextResponse.json({ gtmConfig: null }, { status: 404 });
    }

    return NextResponse.json({ gtmConfig });
  } catch (error) {
    console.log("Error getting GTM config:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
