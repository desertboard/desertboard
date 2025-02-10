import { formatDbResponse } from "@/lib/formatDbResponse";
import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    await connectDB();
  
    try {
      const faqs = await Contact.find();
  
      console.log(faqs);
  
      if (!faqs) {
        return NextResponse.json({ error: "Faqs not found" }, { status: 404 });
      }
  
      return NextResponse.json({ faqs: formatDbResponse(faqs) });
    } catch (error) {
      console.log("error getting faqs:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }


export async function POST(req: NextRequest) {
    
    await connectDB();

    try {

      const formData = await req.formData();
      const regionName = formData.get("regionName")

    if(regionName){
        const contact = await Contact.create({
            regionName,
            content:[]
        })
        if(contact){
            return NextResponse.json({ message: "Region created successfully" }, { status: 200 });
        }else{
            return NextResponse.json({ error: "Creating region failed" }, { status: 404 });
        }
    }
      
    } catch (error) {
        
      console.log("error creating region:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }