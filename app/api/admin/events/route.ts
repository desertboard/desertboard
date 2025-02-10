import { NextRequest, NextResponse } from "next/server";
import Event from "@/models/Events";
import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";

export async function GET() {
  await connectDB();
  const events = await Event.find();
  return NextResponse.json(events);
}

export async function POST(request: NextRequest) {
  const isAdmin = await verifyAdmin(request);
  if (!isAdmin) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }
  try {
    await connectDB();
    const { title, date, time, location, description, image } = await request.json();
    const event = await Event.create({ title, date, time, location, description, image });
    return NextResponse.json(event);
  } catch (error) {
    console.error("Error creating event:", error);
    return NextResponse.json({ error: "Failed to create event" }, { status: 500 });
  }
}
