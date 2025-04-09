import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";
import Home from "@/models/Home";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    const isAdmin = await verifyAdmin(req);
  
    if (!isAdmin) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

  await connectDB();

  try {

    const formData = await req.formData();
    const title = formData.get("title")
    const description = formData.get("description")
    const image = formData.get("image")
    const logo = formData.get("logo")
    const imageAlt = formData.get("imageAlt")
    const logoAlt = formData.get("logoAlt")

    const home = await Home.findOne({}); 

    if(home){
        console.log(home)
        home.sustainabilitySection.contents.push({title,description,image,logo,imageAlt,logoAlt})
        await home.save()
        return NextResponse.json({ message: "Content updated successfully" }, { status: 200 });
    }

    if (!home) {
      return NextResponse.json({ error: "Home not found" }, { status: 404 });
    }

  } catch (error) {
    console.log("error getting home:", error);
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

    const {searchParams} = new URL(req.url)
    const id = searchParams.get("id")
    const formData = await req.formData();
    const title = formData.get("title")
    const description = formData.get("description")
    const image = formData.get("image")
    const logo = formData.get("logo")
    const imageAlt = formData.get("imageAlt")
    const logoAlt = formData.get("logoAlt")

    const home = await Home.findOne({}); 

    if(home){
        console.log(home)
        const toBeEditedItem = home.sustainabilitySection.contents.find((item:{_id:string})=>item._id==id)
        if(toBeEditedItem){
            toBeEditedItem.title = title
            toBeEditedItem.description = description
            toBeEditedItem.image = image
            toBeEditedItem.logo = logo
            toBeEditedItem.imageAlt = imageAlt
            toBeEditedItem.logoAlt = logoAlt

            await home.save()
            return NextResponse.json({ message: "Content updated successfully" }, { status: 200 });
        }else{
            return NextResponse.json({ message: "Content updation failed" }, { status: 404 });
        }
        
    }

    if (!home) {
      return NextResponse.json({ error: "Home not found" }, { status: 404 });
    }

  } catch (error) {
    console.log("error getting home:", error);
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


    const home = await Home.findOne({}); 

    if(home){
        console.log(home)
        const toBeDeletedItem = home.sustainabilitySection.contents.findIndex((item:{_id:string})=>item._id==id)
        if(toBeDeletedItem!==-1){
            home.sustainabilitySection.contents.splice(toBeDeletedItem,1)
            await home.save()
            return NextResponse.json({ message: "Content updated successfully" }, { status: 200 });
        }else{
            return NextResponse.json({ message: "Content updation failed" }, { status: 404 });
        }
        
    }

    if (!home) {
      return NextResponse.json({ error: "Home not found" }, { status: 404 });
    }

  } catch (error) {
    console.log("error getting home:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}