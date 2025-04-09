import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";
import Home from "@/models/Home";
import { NextRequest, NextResponse } from "next/server";



export async function GET() {
  
  try {
    await connectDB();
    const home = await Home.find();

    console.log("Home",home)

    if (home.length == 0) {
      return NextResponse.json({ error: "Home not found" }, { status: 404 });
    }else{
      return NextResponse.json({ home });
    }
  } catch (error) {
    console.error("error getting about:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {

    console.log("here")

    const isAdmin = await verifyAdmin(req);
  
    if (!isAdmin) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

  await connectDB();

  try {

    const formData = await req.formData();
    const pageHeading = formData.get("pageHeading")
    const pageDescription = formData.get("pageDescription")
    const metaTitle = formData.get("metaTitle")
    const metaDescription = formData.get("metaDescription")
    const bannerVideo = formData.get("bannerVideo")
    const bannerPoster = formData.get("bannerPoster")
    const bannerImageAlt = formData.get("bannerImageAlt")

    const home = await Home.findOne({});

    if(home){
        home.pageHeading = pageHeading;
        home.pageDescription = pageDescription;
        home.metaTitle = metaTitle;
        home.metaDescription = metaDescription;
        home.bannerVideo = bannerVideo;
        home.bannerPoster = bannerPoster
        home.bannerImageAlt = bannerImageAlt
        await home.save()
    }

    if (!home) {
      return NextResponse.json({ error: "Home not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Content updated successfully" }, { status: 200 });
  } catch (error) {
    console.log("error getting home:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}