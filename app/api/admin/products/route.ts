import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";
import { NextResponse, NextRequest } from "next/server";
import Product from "@/models/Product";

export async function POST(request: NextRequest) {
  const isAdmin = await verifyAdmin(request);

  if (!isAdmin) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  const { title, subTitle, sector, specifications, subSections, bestPractices, finishes } = await request.json();

  await connectDB();

  const product = await Product.create({
    title,
    subTitle,
    sector,
    specifications,
    subSections,
    bestPractices,
    finishes,
  });

  return NextResponse.json({ success: true, data: product }, { status: 201 });
}

export async function GET(req:NextRequest) {
  await connectDB();
  const {searchParams} = new URL(req.url)
  const productName = searchParams.get("productName")

  if(productName){
    const product = await Product.findOne({title:productName})
    if(product){
      return NextResponse.json({ success: true, data: product }, { status: 200 }); 
    }else{
      return NextResponse.json({message:"No product found", success: false }, { status: 400 });
    }
  }else{
    const products = await Product.find();

    return NextResponse.json({ success: true, data: products }, { status: 200 });
  }

}
