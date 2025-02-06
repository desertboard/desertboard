import connectDB from "@/lib/mongodb";
import { Sector } from "@/models/Sector";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  await connectDB();

  const sector = await Sector.findById(id);

  return NextResponse.json({ success: true, data: sector }, { status: 200 });
}
