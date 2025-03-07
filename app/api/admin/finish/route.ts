import { NextRequest, NextResponse } from "next/server";
import Finish from "@/models/Finish";
import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";

export async function POST(req: NextRequest) {
  const isAdmin = verifyAdmin(req);
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { name, image, description } = await req.json();

  await connectDB();

  const finish = await Finish.create({ name, image, description });

  return NextResponse.json({ data: finish, success: true }, { status: 200 });
}

export async function GET(req:NextRequest) {

  const {searchParams} = new URL(req.url)
  const finishes = searchParams.get("finishes")?.split(",")

  if(finishes){
    const filteredFinishes = await Finish.find({name:{$in:finishes}});

    console.log("filteredFinishes",filteredFinishes)
    return NextResponse.json({ data: filteredFinishes, success: true }, { status: 200 });
  }else{
    const finishes = await Finish.find();
    return NextResponse.json({ data: finishes, success: true }, { status: 200 });
  }
  
}
