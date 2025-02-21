import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";
import Home from "@/models/Home";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {

    const isAdmin = await verifyAdmin(req);
  
    if (!isAdmin) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

  await connectDB();

  try {

      const formData = await req.formData();
      const heading = formData.get("heading")
      const description = formData.get("description")
    const home = await Home.findOne({});

    if(home){
        console.log(home)
        home.sustainabilitySection.heading = heading;
        home.sustainabilitySection.description = description;
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