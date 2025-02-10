import { NextRequest, NextResponse } from "next/server";
import News from "@/models/News";
import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";

export async function GET() {
  await connectDB();
  const news = await News.find();
  return NextResponse.json(news);
}

export async function POST(request: NextRequest) {
  const isAdmin = await verifyAdmin(request);

  if (!isAdmin) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }
  try {
    await connectDB();
    const { title, description, images, tags, date } = await request.json();
    const news = await News.create({ title, description, images, tags, date });
    return NextResponse.json(news);
  } catch (error) {
    console.error("Error creating news:", error);
    return NextResponse.json({ error: "Failed to create news" }, { status: 500 });
  }
}
