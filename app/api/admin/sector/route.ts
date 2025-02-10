import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";
import { Sector } from "@/models/Sector";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const isAdmin = await verifyAdmin(request);

  if (!isAdmin) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }
  const { title, description, image, applications } = await request.json();

  await connectDB();

  const existingSector = await Sector.findOne({ title });

  if (existingSector) {
    return NextResponse.json({ success: false, message: "Sector already exists" }, { status: 400 });
  }

  const sector = await Sector.create({ title, description, image, applications });

  return NextResponse.json({ success: true, data: sector }, { status: 201 });
}

export async function GET() {
  await connectDB();

  const sectors = await Sector.find();

  return NextResponse.json({ success: true, data: sectors }, { status: 200 });
}

export async function PATCH(request: NextRequest) {
  const isAdmin = await verifyAdmin(request);

  if (!isAdmin) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const { title, description, image, applications } = await request.json();

  await connectDB();

  const sector = await Sector.findByIdAndUpdate(id, { title, description, image, applications });

  return NextResponse.json({ success: true, data: sector }, { status: 200 });
}

export async function DELETE(request: NextRequest) {
  const isAdmin = await verifyAdmin(request);

  if (!isAdmin) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  await connectDB();

  const sector = await Sector.findByIdAndDelete(id);

  return NextResponse.json({ success: true, data: sector }, { status: 200 });
}
