import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";
import { NextResponse, NextRequest } from "next/server";
import Product from "@/models/Product";

export async function POST(request: NextRequest) {
  const isAdmin = await verifyAdmin(request);

  if (!isAdmin) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  const { title, description, image_url, specifications } = await request.json();

  await connectDB();

  const product = await Product.create({ title, description, image_url, specifications });

  return NextResponse.json({ success: true, data: product }, { status: 201 });
}

export async function GET() {
  await connectDB();

  const products = await Product.find();

  return NextResponse.json({ success: true, data: products }, { status: 200 });
}
