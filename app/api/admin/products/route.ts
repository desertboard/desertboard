import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";
import { NextResponse, NextRequest } from "next/server";
import Product from "@/models/Product";

export async function POST(request: NextRequest) {
  const isAdmin = await verifyAdmin(request);

  if (!isAdmin) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  const {
    title,
    subTitle,
    sector,
    specifications,
    subSections,
    bestPractices,
    finishes,
    images,
    bannerImage,
    featuredImage,
  } = await request.json();

  await connectDB();

  const product = await Product.create({
    title,
    subTitle,
    sector,
    specifications,
    subSections,
    bestPractices,
    finishes,
    images,
    bannerImage,
    featuredImage,
  });

  return NextResponse.json({ success: true, data: product }, { status: 201 });
}

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url)
    let productName = searchParams.get("productName")?.replace(/-+/g, " ")
    console.log("productNAme fist", productName)
    if (productName?.includes("PSB")) {
      console.log("includes")
      productName = productName.replace("PSB", "PSB®")
    }


    if (productName) {
      console.log("PRODUCT", productName)
      const product = await Product.findOne({ title: productName })
      console.log("foundProduct", product)
      if (product) {
        return NextResponse.json({ success: true, data: product }, { status: 200 });
      } else {
        return NextResponse.json({ message: "No product found", success: false }, { status: 400 });
      }
    } else {
      const products = await Product.find();

      return NextResponse.json({ success: true, data: products }, { status: 200 });
    }
  } catch (error) {
    console.log("Error fetching products", error)
    return NextResponse.json({ success: false}, { status: 500 });
  }
}
