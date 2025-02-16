import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    
    await connectDB();

    try {

      const formData = await req.formData();
      const regionName = formData.get("regionName")
      const area = formData.get("area")
      const phone = formData.get("phone")
      const email = formData.get("email")
      const address = formData.get("address")

    const contact = await Contact.findOne({regionName})
    if(contact){
        contact.content.push({area,phone,email,address})
        await contact.save()
        return NextResponse.json({message:"Saved content successfully"},{status:200})
    }else{
        return NextResponse.json({error:"Contact not found"},{status:400})
    }
      
    } catch (error) {
        
      console.log("error saving contents:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }


  export async function PATCH(req: NextRequest) {
    
    await connectDB();

    try {
    const {searchParams} = new URL(req.url)
    const id = searchParams.get("id")

      const formData = await req.formData();
      const regionName = formData.get("regionName")
      const area = formData.get("area")
      const phone = formData.get("phone")
      const email = formData.get("email")
      const address = formData.get("address")

    const contact = await Contact.findOne({regionName})
    if(contact){
        const toBeEditedItem = contact.content.find((item:{_id:string})=>item._id == id)
        if(toBeEditedItem){
            toBeEditedItem.area = area
            toBeEditedItem.phone = phone
            toBeEditedItem.email = email
            toBeEditedItem.address = address
            await contact.save()
            return NextResponse.json({message:"Saved content successfully"},{status:200})
        }else{
            return NextResponse.json({error:"Item not found"},{status:400}) 
        }
    }else{
        return NextResponse.json({error:"Contact not found"},{status:400})
    }
      
    } catch (error) {
        
      console.log("error saving contents:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }



  export async function DELETE(req: NextRequest) {
    await connectDB();

    try {
    const {searchParams} = new URL(req.url)
    const id = searchParams.get("id")
    const regionName = searchParams.get("region")

    const contact = await Contact.findOne({regionName})
    if(contact){
        const toBeDeletedItem = contact.content.findIndex((item:{_id:string})=>item._id == id)
        if(toBeDeletedItem !== -1){
            contact.content.splice(toBeDeletedItem,1)
            await contact.save()
            return NextResponse.json({message:"Removed content successfully"},{status:200})
        }else{
            return NextResponse.json({error:"Item not found"},{status:400}) 
        }
    }else{
        return NextResponse.json({error:"Contact not found"},{status:400})
    }
      
    } catch (error) {
        
      console.log("error removing contents:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }