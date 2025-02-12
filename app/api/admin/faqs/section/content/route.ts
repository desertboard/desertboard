import connectDB from "@/lib/mongodb";
import Faqs from "@/models/Faqs";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    
    await connectDB();

    try {

      const {searchParams} = new URL(req.url)
      const sectionid = searchParams.get("sectionid")
      const contentid = searchParams.get("contentid")
 
        const faqs = await Faqs.findById({_id:sectionid})
        if(faqs){
            const foundItem = faqs.contents.find((item:{_id:string})=>item._id==contentid)
            if(foundItem){
                return NextResponse.json({ content: foundItem }, { status: 200 }); 
            }else{
                return NextResponse.json({error:"Item not found"})
            }
            
        }else{
            return NextResponse.json({error:"Section not found"})
        }


    } catch (error) {
      console.log("error fetching content:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }

export async function PATCH(req: NextRequest) {
    
    await connectDB();

    try {

      const {searchParams} = new URL(req.url)
      const sectionid = searchParams.get("sectionid")
      const contentid = searchParams.get("contentid")

      const formData = await req.formData();
      const question = formData.get("question");
      const answer = formData.get("answer");
 
        const faqs = await Faqs.findById({_id:sectionid})
        if(faqs){
            const foundItem = faqs.contents.find((item:{_id:string})=>item._id==contentid)
            if(foundItem){
                foundItem.question = question
                foundItem.answer = answer
                await faqs.save()
                return NextResponse.json({ message: "Content updated successfully" }, { status: 200 }); 
            }else{
                return NextResponse.json({ message: "Content updating failed" }, { status: 400 }); 
            }
        }else{
            return NextResponse.json({error:"Content updating failed"})
        }


    } catch (error) {
      console.log("error updating content:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }


  export async function POST(req: NextRequest) {
    
    await connectDB();

    try {

      const {searchParams} = new URL(req.url)
      const id = searchParams.get("id")

      const formData = await req.formData();
      const question = formData.get("question");
      const answer = formData.get("answer");
 
        const faqs = await Faqs.findById({_id:id})
        if(faqs){
            faqs.contents.push({question,answer})
            await faqs.save()
            return NextResponse.json({ message: "Content added successfully" }, { status: 200 }); 
        }else{
            return NextResponse.json({error:"Content adding failed"})
        }


    } catch (error) {
      console.log("error adding content to faqs:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }



  export async function DELETE(req: NextRequest) {
    
    await connectDB();

    try {

      const {searchParams} = new URL(req.url)
      const sectionid = searchParams.get("sectionid")
      const contentid = searchParams.get("contentid")
 
        const faqs = await Faqs.findById({_id:sectionid})
        if(faqs){
            const filteredData = faqs.contents.filter((item:{_id:string})=>item._id.toString()!==contentid)
            if(filteredData){
                faqs.contents = filteredData
                await faqs.save()
                return NextResponse.json({ message: "Content deleted successfully" }, { status: 200 }); 
            }else{
                return NextResponse.json({error:"Content deletion failed"})
            }
            
        }else{
            return NextResponse.json({error:"Section not found"})
        }


    } catch (error) {
      console.log("error deleting content:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }