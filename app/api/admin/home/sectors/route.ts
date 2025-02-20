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
    const description = formData.get("description")


    const home = await Home.findOne({}); 

    if(home){
            home.sectorsDescription = description
            await home.save()
            return NextResponse.json({ message: "Content updated successfully" }, { status: 200 });
    }

    if (!home) {
      return NextResponse.json({ error: "Home not found" }, { status: 404 });
    }

  } catch (error) {
    console.log("error getting home:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}