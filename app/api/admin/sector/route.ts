import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";
import { Sector } from "@/models/Sector";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const isAdmin = await verifyAdmin(request);

  if (!isAdmin) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }
  const { title, description, image, applications, icon, bannerImage, shortDescription,gallery } = await request.json();

  await connectDB();

  console.log("gallery",applications)

  const existingSector = await Sector.findOne({ title });

  if (existingSector) {
    return NextResponse.json({ success: false, message: "Sector already exists" }, { status: 400 });
  }

  const sector = await Sector.create({ title, description, image, applications, icon, bannerImage, shortDescription,gallery });

  return NextResponse.json({ success: true, data: sector }, { status: 201 });
}

export async function GET(req:NextRequest) {
  await connectDB();

  const {searchParams} = new URL(req.url)
  const title = searchParams.get("title")
  const product = searchParams.get("product")

console.log("product",product)
  if(title){
    const sector = await Sector.findOne({title})
    if(sector){
      return NextResponse.json({ success: true, data: sector }, { status: 200 });
    }
  }

  else if(product){
    const sectors = await Sector.find()
    if(sectors){
      const applications = sectors.flatMap((item)=>(
        item.applications.filter((item:{product:string})=>(
          item.product == product
        ))
      ))

      if(applications){
        return NextResponse.json({success:true,data:applications})
      }
    }

  
  }else{
    const sectors = await Sector.find();

    return NextResponse.json({ success: true, data: sectors }, { status: 200 });
  }


  
}

export async function PATCH(request: NextRequest) {
  const isAdmin = await verifyAdmin(request);

  if (!isAdmin) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const { title, description, image, applications, icon, bannerImage, shortDescription,gallery } = await request.json();

  console.log("gallery",applications)

  await connectDB();

  const sector = await Sector.findByIdAndUpdate(id, {
    title,
    description,
    image,
    applications,
    icon,
    gallery,
    bannerImage,
    shortDescription,
  });

  return NextResponse.json({ success: true, data: sector }, { status: 200 });
}

export async function DELETE(request: NextRequest) {
  const isAdmin = await verifyAdmin(request);

  if (!isAdmin) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  await connectDB();

  const sector = await Sector.findByIdAndDelete(id);

  return NextResponse.json({ success: true, data: sector }, { status: 200 });
}
