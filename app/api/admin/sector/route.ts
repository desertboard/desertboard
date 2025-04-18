import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";
import { Sector } from "@/models/Sector";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const isAdmin = await verifyAdmin(request);

  if (!isAdmin) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }
  const { title, description, image, applications, icon, bannerImage, shortDescription, gallery, metaTitle, metaDescription,imageAlt,iconAlt,bannerImageAlt,slug } = await request.json();

  await connectDB();

  console.log("gallery", applications)

  const existingSector = await Sector.findOne({ title });

  if (existingSector) {
    return NextResponse.json({ success: false, message: "Sector already exists" }, { status: 400 });
  }

  const sector = await Sector.create({ title, description, image, applications, icon, bannerImage, shortDescription, gallery, metaTitle, metaDescription,imageAlt,iconAlt,bannerImageAlt,slug });

  return NextResponse.json({ success: true, data: sector }, { status: 201 });
}

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url)
    const title = searchParams.get("title")
    const slug = searchParams.get("slug")
    const product = searchParams.get("product")
    const sectorTitle = title?.replace(/\s+/g, "-").replace(/-+/g, " ").replace(/\band\b/g, "&").replace(/\b\w/g, (char) => char.toUpperCase())

    if(slug){
      const sector = await Sector.findOne({ slug })
      if (sector) {
        return NextResponse.json({ success: true, data: sector }, { status: 200 });
      }
    }
    if (title) {
      const sector = await Sector.findOne({ title:sectorTitle })
      if (sector) {
        return NextResponse.json({ success: true, data: sector }, { status: 200 });
      }
    }

    else if (product) {
      const sectors = await Sector.find()
      if (sectors) {
        const applications = sectors.flatMap((item) => (
          item.applications.filter((item: { product: string }) => (
            item.product == product
          ))
        ))

        if (applications) {
          return NextResponse.json({ success: true, data: applications })
        }
      }


    } else {
      try {
        const sectors = await Sector.find();
        if(sectors && sectors.length !== 0){
          // console.log(sectors)
          return NextResponse.json({ success: true, data: sectors }, { status: 200 });
        }else{
          // console.error("sectors",sectors)
          return NextResponse.json({ success: false, data: [],message:"No sector found" }, { status: 204 });
        }
      } catch (error) {
        console.error(error)
        return NextResponse.json({ success: false, message: error }, { status: 404 });
      }
    }
  } catch (error) {
    console.log("Error fetching sectors", error)
    return NextResponse.json({ success: false }, { status: 500 });
  }

}

export async function PATCH(request: NextRequest) {
  const isAdmin = await verifyAdmin(request);

  if (!isAdmin) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const { title, description, image, applications, icon, bannerImage, shortDescription, gallery, metaTitle, metaDescription,imageAlt,iconAlt,bannerImageAlt,slug } = await request.json();

  console.log("gallery", applications)

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
    metaTitle,
    metaDescription,
    imageAlt,
    iconAlt,
    bannerImageAlt,
    slug
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
