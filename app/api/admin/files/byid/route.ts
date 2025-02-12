import { NextRequest, NextResponse } from "next/server";
import Topic from "@/models/Topic";
import connectDB from "@/lib/mongodb";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  await connectDB();
  const topic = await Topic.findById(id);
  return NextResponse.json({ data: topic, success: true }, { status: 200 });
}
