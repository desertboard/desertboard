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
    } else {
      const partners = sustainability.partners.partners
      const topContent = { heading: sustainability.partners.heading, description: sustainability.partners.description }
      return NextResponse.json({ partners, topContent });
    }

  } catch (error) {
    console.log("error getting partners:", error);
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

    const { searchParams } = new URL(req.url)
    const t = searchParams.get("t")
    const formData = await req.formData();
    const entries = Object.fromEntries(formData.entries());

    //todo - need to change this
    const sustainability = await Sustainability.findOne()

    console.log("entiresss", entries)

    if (!sustainability) {
      return NextResponse.json({ error: "Sustainability not found" }, { status: 404 });
    } else {
      if (t) {
        sustainability.partners.heading = entries.contentheading
        sustainability.partners.description = entries.contentdescription
        await sustainability.save()
        return NextResponse.json({ message: "Partner updated successfully" }, { status: 200 });
      } else {
        console.log(sustainability)
        sustainability.partners.partners.push({ title: entries.title, description: entries.description })
        await sustainability.save()
        return NextResponse.json({ message: "Partner added successfully" }, { status: 200 });
      }

    }



  } catch (error) {
    console.log("error adding partner:", error);
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

    const formData = await req.formData();
    const updatedData = Object.fromEntries(formData.entries());

    const editId = updatedData.editId


    const sustainability = await Sustainability.findOne()

    if (sustainability) {
      // Append new contents to the existing array
      const editItem = await sustainability.partners.partners.find((item: { _id: string }) => item._id == editId)
      editItem.title = updatedData.title
      editItem.description = updatedData.description
      await sustainability.save();
    } else {

      return NextResponse.json({ message: "Sustainability not found" }, { status: 400 });

    }

    return NextResponse.json({ message: "Partners updated successfully" }, { status: 200 });

  } catch (error) {
    console.log("error updating partners:", error);
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

    const { searchParams } = new URL(req.url)
    const id = searchParams.get("id")

    const sustainability = await Sustainability.findOne();

    if (!sustainability) {
      return NextResponse.json({ error: "Sustainability not found" }, { status: 404 });
    } else {
      const toDeleteItem = sustainability.partners.partners.findIndex((item: { _id: string }) => item._id == id)
      if (toDeleteItem !== -1) {
        sustainability.partners.partners.splice(toDeleteItem, 1)
        await sustainability.save()
        return NextResponse.json({ message: "Partner deleted successfully" }, { status: 200 });
      }
    }

  } catch (error) {
    console.log("error deleting partner:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}