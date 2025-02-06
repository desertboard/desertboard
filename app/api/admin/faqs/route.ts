import { formatDbResponse } from "@/lib/formatDbResponse";
import connectDB from "@/lib/mongodb";
import Faqs from "@/models/Faqs";
import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    await connectDB();
  
    try {
      const faqs = await Faqs.find();
  
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

    const session = await Faqs.startSession();
  
    try {

      const formData = await req.formData();
      const updatedData = Object.fromEntries(formData.entries());

      let items;
      if(updatedData.items && typeof updatedData.items == "string"){
        items = JSON.parse(updatedData.items)
      }

      
      session.startTransaction();
 
      const bulkOps = items.map((item:{customId:string,sectionName:string,question:string,answer:string,id:string}) => ({
        updateOne: {
            filter: {customId:item.customId.slice(item.customId.length-6)=="DELETE" ? item.customId.slice(0,item.customId.length-6):item.customId}, // Check if ID exists
            update: { $set: { customId:item.customId,sectionName: item.sectionName, question: item.question, answer: item.answer } }, // Update fields if found
            upsert: true, // Insert if not found
            writeConcern: { w: "majority" }
        }
    }));

    
    // Execute bulkWrite operation
    const result = await Faqs.bulkWrite(bulkOps);
    await Faqs.deleteMany({
        customId:/DELETE$/
      })

      await session.commitTransaction();
      
      if (!result) {
        await session.abortTransaction();
        return NextResponse.json({ error: "Faqs not found" }, { status: 404 });
      }else{
          return NextResponse.json({ message: "Faqs updated successfully" }, { status: 200 });
      }
    } catch (error) {
        await session.abortTransaction();
      console.log("error getting about:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    } finally {
        // End the session
        session.endSession();
    }
  }