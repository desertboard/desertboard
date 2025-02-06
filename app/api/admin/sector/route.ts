import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";
import { Sector } from "@/models/Sector";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const isAdmin = await verifyAdmin(request);

  if (!isAdmin) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }
  const { title, description, image_url, applications } = await request.json();

  await connectDB();

  const sector = await Sector.create({ title, description, image_url, applications });

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
  const { id, title, description, image_url, applications } = await request.json();

  await connectDB();

  const sector = await Sector.findByIdAndUpdate(id, { title, description, image_url, applications });

  return NextResponse.json({ success: true, data: sector }, { status: 200 });
}

export async function DELETE(request: NextRequest) {
  const isAdmin = await verifyAdmin(request);

  if (!isAdmin) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }
  const { id } = await request.json();

  await connectDB();

  const sector = await Sector.findByIdAndDelete(id);

  return NextResponse.json({ success: true, data: sector }, { status: 200 });
}
