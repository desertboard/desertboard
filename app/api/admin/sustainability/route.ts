import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";
import Sustainability from "@/models/Sustainability";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    await connectDB();
  
    try {
      const sustainability = await Sustainability.findOne();
  
      if (!sustainability) {
        return NextResponse.json({ error: "Sustainability not found" }, { status: 404 });
      }else{
        return NextResponse.json({ sustainability });
      }
  
    } catch (error) {
      console.log("error getting sustainability:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }

  export async function PATCH(req: NextRequest) {
    const isAdmin = await verifyAdmin(req);
        
          if (!isAdmin) {
            return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
          }
    await connectDB();
  
    try {

      const formData = await req.formData();
      const updatedData = Object.fromEntries(formData.entries());
        
      const sustainability = await Sustainability.findOne();

      console.log(updatedData)

      if (!sustainability) {
        return NextResponse.json({ error: "Sustainability not found" }, { status: 404 });
      }else{
        sustainability.pageHeading = updatedData.pageHeading
        sustainability.pageDescription = updatedData.pageDescription
        sustainability.heading = updatedData.heading
        sustainability.description = updatedData.description
        sustainability.image = updatedData.image
        sustainability.bannerImage = updatedData.bannerImage
        sustainability.metaTitle = updatedData.metaTitle
        sustainability.metaDescription = updatedData.metaDescription
        await sustainability.save()
        return NextResponse.json({ message: "Sustainability updated successfully" }, { status: 200 });
        }   
    } catch (error) {
      console.log("error updating sustainability:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }
