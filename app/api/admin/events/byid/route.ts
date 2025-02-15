import { NextRequest, NextResponse } from "next/server";
import Event from "@/models/Events";
import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  await connectDB();
  const event = await Event.findById(id);
  return NextResponse.json({ data: event, success: true }, { status: 200 });
}

export async function PATCH(request: NextRequest) {
  const isAdmin = await verifyAdmin(request);
  if (!isAdmin) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }
  try {
    await connectDB();
    const { id, ...eventData } = await request.json();
    const updatedEvent = await Event.findByIdAndUpdate(id, eventData, { new: true });
    return NextResponse.json({ data: updatedEvent, success: true }, { status: 200 });
  } catch (error) {
    console.error("Error updating event:", error);
    return NextResponse.json({ error: "Failed to update event" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const isAdmin = await verifyAdmin(request);
  if (!isAdmin) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
    await Event.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: "Event deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting event:", error);
  }
}
