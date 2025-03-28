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
    metaTitle,
    metaDescription,
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
    metaTitle,
    metaDescription,
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
      try {
        const products = await Product.find();
        if(products && products.length !== 0){
          return NextResponse.json({ success: true, data: products }, { status: 200 });
        }else{
          return NextResponse.json({ message:"No products found",success: false, data: [] }, { status: 404 });
        }
      } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: error }, { status: 404 });
      }
    }
  } catch (error) {
    console.log("Error fetching products", error)
    return NextResponse.json({ success: false}, { status: 500 });
  }
}
