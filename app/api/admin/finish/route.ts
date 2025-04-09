import { NextRequest, NextResponse } from "next/server";
import Finish from "@/models/Finish";
import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";

export async function POST(req: NextRequest) {
  const isAdmin = verifyAdmin(req);
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { name, image, description,imageAlt } = await req.json();

  await connectDB();

  const finish = await Finish.create({ name, image, description,imageAlt });

  return NextResponse.json({ data: finish, success: true }, { status: 200 });
}

export async function GET(req:NextRequest) {

  try {
  await connectDB();
  const {searchParams} = new URL(req.url)
  const finishes = searchParams.get("finishes")?.split(",")

  if(finishes){
    const filteredFinishes = await Finish.find({name:{$in:finishes}});

    console.log("filteredFinishes",filteredFinishes)
    return NextResponse.json({ data: filteredFinishes, success: true }, { status: 200 });
  }else{
    const finishes = await Finish.find();
    if(finishes && finishes.length !== 0 ){
      return NextResponse.json({ data: finishes, success: true }, { status: 200 });
    }else{
      return NextResponse.json({ data: [], success: false,message:"No finish found" }, { status: 404 });
    }
  }
  } catch (error) {
    return NextResponse.json({ message: error, success: false }, { status: 500 });
  }
  
}
