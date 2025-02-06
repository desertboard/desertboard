import connectDB from "@/lib/mongodb";
import { Sector } from "@/models/Sector";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
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

export async function PATCH(request: Request) {
  const { id, title, description, image_url, applications } = await request.json();

  await connectDB();

  const sector = await Sector.findByIdAndUpdate(id, { title, description, image_url, applications });

  return NextResponse.json({ success: true, data: sector }, { status: 200 });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();

  await connectDB();

  const sector = await Sector.findByIdAndDelete(id);

  return NextResponse.json({ success: true, data: sector }, { status: 200 });
}
