import { formatDbResponse } from "@/lib/formatDbResponse";
import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";
import About from "@/models/About";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    await connectDB();
  
    try {
      const about = await About.find();
  
      console.log(about);
  
      if (!about) {
        return NextResponse.json({ error: "About not found" }, { status: 404 });
      }
  
      return NextResponse.json({ about: formatDbResponse(about) });
    } catch (error) {
      console.log("error getting about:", error);
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

        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

      const formData = await req.formData();
      const updatedData = Object.fromEntries(formData.entries());

      if(updatedData.history && typeof updatedData.history == "string"){
        updatedData.history = JSON.parse(updatedData.history)
      }
      
      let partnerData;
      if(updatedData.partners && typeof updatedData.partners == "string"){
        partnerData = JSON.parse(updatedData.partners)
        delete updatedData.partners
        console.log("partnersData",partnerData)
      }

      console.log("updatedData",updatedData)

        
      //todo - need to change this
      console.log("update data final", updatedData);
      const about = await About.findByIdAndUpdate(id, updatedData, { new: true });
      about.partners.partners = partnerData
      about.partners.description = updatedData.partnerDescription
      await about.save()
      if (!about) {
        return NextResponse.json({ error: "About not found" }, { status: 404 });
      }
      return NextResponse.json({ message: "About updated successfully" }, { status: 200 });
    } catch (error) {
      console.log("error getting about:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }