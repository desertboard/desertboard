import connectDB from "@/lib/mongodb";
import { Sector } from "@/models/Sector";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  await connectDB();

  const sector = await Sector.findById(id);

  return NextResponse.json({ success: true, data: sector }, { status: 200 });
}
