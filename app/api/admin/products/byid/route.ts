import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";
import Product from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  await connectDB();

  const product = await Product.findById(id);

  return NextResponse.json({ success: true, data: product }, { status: 200 });
}

export async function PATCH(request: NextRequest) {
  const isAdmin = await verifyAdmin(request);

  if (!isAdmin) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const { title, subTitle, sector, specifications, subSections, bestPractices, finishes, images, bannerImage } =
    await request.json();

  await connectDB();

  const product = await Product.findByIdAndUpdate(id, {
    title,
    subTitle,
    sector,
    specifications,
    subSections,
    bestPractices,
    finishes,
    images,
    bannerImage,
  });

  return NextResponse.json({ success: true, data: product }, { status: 200 });
}

export async function DELETE(request: NextRequest) {
  const isAdmin = await verifyAdmin(request);

  if (!isAdmin) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  await connectDB();

  const product = await Product.findByIdAndDelete(id);

  return NextResponse.json({ success: true, data: product }, { status: 200 });
}
