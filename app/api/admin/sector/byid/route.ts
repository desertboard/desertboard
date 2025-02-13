import connectDB from "@/lib/mongodb";
import { Sector } from "@/models/Sector";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const sector = searchParams.get("sector") ? decodeURIComponent(searchParams.get("sector")!) : "";;

  console.log("sectorNAme",sector)

  await connectDB();

  if(id){
    const sector = await Sector.findById(id);
    return NextResponse.json({ success: true, data: sector }, { status: 200 });

  }else if(sector){
    const sectorData = await Sector.findOne({title:sector});
    return NextResponse.json({ success: true, data: sectorData }, { status: 200 });
  }

}
