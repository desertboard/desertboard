import connectDB from "@/lib/mongodb";
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
    
    await connectDB();
  
    try {

      const formData = await req.formData();
      const entries = Object.fromEntries(formData.entries());
        
      //todo - need to change this
      const sustainability = await Sustainability.findOne()

      if (!sustainability) {
        return NextResponse.json({ error: "Sustainability not found" }, { status: 404 });
      }

      sustainability.roles.push({image:entries.image,logo:entries.logo,title:entries.title})
      await sustainability.save()      
      return NextResponse.json({ message: "Roles added successfully" }, { status: 200 });
    
    } catch (error) {
      console.log("error adding role:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }


  export async function PATCH(req: NextRequest) {
    
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
          if(updatedData.title!==""){
            toEditItem.title = updatedData.title
            await sustainability.save()
          } 
            return NextResponse.json({ message: "Role updated successfully" }, { status: 200 });
        }
      }
      
    } catch (error) {
      console.log("error updating role:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }


  export async function DELETE(req: NextRequest) {
    
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