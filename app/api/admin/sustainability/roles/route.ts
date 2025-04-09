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
        const roles = sustainability.roles
        return NextResponse.json({ roles });
      }
  
    } catch (error) {
      console.log("error getting roles:", error);
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

      sustainability.roles.push({image:entries.image,logo:entries.logo,title:entries.title,description:entries.description,imageAlt:entries.imageAlt,logoAlt:entries.logoAlt})
      await sustainability.save()      
      return NextResponse.json({ message: "Roles added successfully" }, { status: 200 });
    
    } catch (error) {
      console.log("error adding role:", error);
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
        const toEditItem = sustainability.roles.find((item:{_id:string})=>item._id==id)
        if(toEditItem){
          
            toEditItem.title = updatedData.title
            toEditItem.description = updatedData.description
            toEditItem.image = updatedData.image
            toEditItem.logo = updatedData.logo
            toEditItem.imageAlt = updatedData.imageAlt
            toEditItem.logoAlt = updatedData.logoAlt
            await sustainability.save()
          
            return NextResponse.json({ message: "Role updated successfully" }, { status: 200 });
        }
      }
      
    } catch (error) {
      console.log("error updating role:", error);
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
        const toDeleteItem = sustainability.roles.findIndex((item:{_id:string})=>item._id==id)
        if(toDeleteItem!==-1){
            sustainability.roles.splice(toDeleteItem,1)
            await sustainability.save()
            return NextResponse.json({ message: "Role deleted successfully" }, { status: 200 });
        }
      }
    
    } catch (error) {
      console.log("error deleting role:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }