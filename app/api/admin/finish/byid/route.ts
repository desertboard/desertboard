import { NextRequest, NextResponse } from "next/server";
import Finish from "@/models/Finish";
import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  await connectDB();
  const finish = await Finish.findById(id);
  return NextResponse.json(finish);
}

export async function PATCH(req: NextRequest) {
  const isAdmin = verifyAdmin(req);
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const { ...finishData } = await req.json();
  await connectDB();
  const finish = await Finish.findByIdAndUpdate(id, finishData, { new: true });
  return NextResponse.json({ success: true, data: finish }, { status: 200 });
}

export async function DELETE(req: NextRequest) {
  const isAdmin = verifyAdmin(req);
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  await connectDB();
  await Finish.findByIdAndDelete(id);
  return NextResponse.json({ success: true, message: "Finish deleted successfully" }, { status: 200 });
}
