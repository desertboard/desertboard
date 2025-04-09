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
        const vision = sustainability.vision
        return NextResponse.json({ vision });
      }
  
    } catch (error) {
      console.log("error getting visions:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }


export async function POST(req: NextRequest) {
    const isAdmin = await verifyAdmin(req);
        
          if (!isAdmin) {
            return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
          }
    await connectDB();
  
    try {

      const formData = await req.formData();
      const entries = Object.fromEntries(formData.entries());
        
      //todo - need to change this
      const sustainability = await Sustainability.findOne()

      if (!sustainability) {
        return NextResponse.json({ error: "Sustainability not found" }, { status: 404 });
      }

      sustainability.vision.push({image:entries.image,description:entries.description,title:entries.title,region:entries.region,imageAlt:entries.imageAlt})
      await sustainability.save()      
      return NextResponse.json({ message: "Vision added successfully" }, { status: 200 });
    
    } catch (error) {
      console.log("error adding vision:", error);
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
        
      const sustainability = await Sustainability.findOne();

      if (!sustainability) {
        return NextResponse.json({ error: "Sustainability not found" }, { status: 404 });
      }else{
        const toEditItem = sustainability.vision.find((item:{_id:string})=>item._id==id)
        if(toEditItem){
          toEditItem.title = updatedData.title
          toEditItem.description = updatedData.description
          toEditItem.region = updatedData.region
          toEditItem.image = updatedData.image
          toEditItem.imageAlt = updatedData.imageAlt
          
          await sustainability.save()
        } 
        return NextResponse.json({ message: "Vision updated successfully" }, { status: 200 });
      }
      
    } catch (error) {
      console.log("error updating vision:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }


  export async function DELETE(req: NextRequest) {
    const isAdmin = await verifyAdmin(req);
    
      if (!isAdmin) {
        return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
      }
    await connectDB();
  
    try {

      const {searchParams} = new URL(req.url)
      const id = searchParams.get("id")

      const sustainability = await Sustainability.findOne();

      if (!sustainability) {
        return NextResponse.json({ error: "Sustainability not found" }, { status: 404 });
      }else{
        const toDeleteItem = sustainability.vision.findIndex((item:{_id:string})=>item._id==id)
        if(toDeleteItem!==-1){
            sustainability.vision.splice(toDeleteItem,1)
            await sustainability.save()
            return NextResponse.json({ message: "Vision deleted successfully" }, { status: 200 });
        }
      }
    
    } catch (error) {
      console.log("error deleting vision:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }