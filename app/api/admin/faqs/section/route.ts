import connectDB from "@/lib/mongodb";
import Faqs from "@/models/Faqs";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
    
    await connectDB();

    try {

      const formData = await req.formData();
      const sectionName = formData.get("sectionName");
      const previousSectionName = formData.get("previousSectionName");
 
        const faqs = await Faqs.updateMany({sectionName:previousSectionName},{$set:{sectionName}})
        if(faqs){
            return NextResponse.json({ message: "Faqs updated successfully" }, { status: 200 }); 
        }else{
            return NextResponse.json({error:"Updating faqs failed"})
        }


    } catch (error) {
      console.log("error updating faqs:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }


  export async function DELETE(req: NextRequest) {
    
    await connectDB();

    try {
        const formData = await req.formData()
        const sectionName = formData.get("sectionName")

        console.log("sectionNAme",sectionName)
        const faqs = await Faqs.deleteMany({sectionName})
        if(faqs){
            return NextResponse.json({ message: "Faqs updated successfully" }, { status: 200 }); 
        }else{
            return NextResponse.json({error:"Updating faqs failed"})
        }


    } catch (error) {
      console.log("error updating faqs:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }