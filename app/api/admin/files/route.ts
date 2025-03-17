import { NextRequest, NextResponse } from "next/server";
import Topic from "@/models/Topic";
import { verifyAdmin } from "@/lib/verifyAdmin";
import connectDB from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  const isAdmin = verifyAdmin(request);
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { title, types } = await request.json();
  await connectDB();
  const topic = await Topic.create({ title, types });
  return NextResponse.json({ data: topic, success: true }, { status: 200 });
}

export async function GET() {
  try {
    await connectDB();
    const topics = await Topic.find();
    if(topics && topics.length !== 0){
      return NextResponse.json({ data: topics, success: true }, { status: 200 });
    }else{
      return NextResponse.json({ data: [], success: false , message:"Files not found"}, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ data: [], success: false , error}, { status: 400 });
  }
}

export async function PATCH(request: NextRequest) {
  const isAdmin = verifyAdmin(request);
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const { title, types } = await request.json();
  await connectDB();
  const topic = await Topic.findByIdAndUpdate(id, { title, types }, { new: true });
  return NextResponse.json({ data: topic, success: true }, { status: 200 });
}

export async function DELETE(request: NextRequest) {
  const isAdmin = verifyAdmin(request);
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  await connectDB();
  const topic = await Topic.findByIdAndDelete(id);
  return NextResponse.json({ data: topic, success: true }, { status: 200 });
}
