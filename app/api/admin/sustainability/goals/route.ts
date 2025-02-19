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
      const goals = sustainability.goals.goals
      const topContent = { heading: sustainability.goals.heading, description: sustainability.goals.description }
      return NextResponse.json({ goals, topContent });
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
        sustainability.goals.heading = entries.contentheading
        sustainability.goals.description = entries.contentdescription
        await sustainability.save()
        return NextResponse.json({ message: "Goal updated successfully" }, { status: 200 });
      } else {
        console.log(sustainability)
        sustainability.goals.goals.push({ image: entries.image, logo: entries.logo, heading: entries.title, description: entries.description })
        await sustainability.save()
        return NextResponse.json({ message: "Goal added successfully" }, { status: 200 });
      }

    }



  } catch (error) {
    console.log("error adding goal:", error);
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

    console.log("updatedData", updatedData)

    if (!sustainability) {
      return NextResponse.json({ error: "Sustainability not found" }, { status: 404 });
    } else {
      const toEditItem = sustainability.goals.goals.find((item: { _id: string }) => item._id == id)
      if (toEditItem) {
        //to not override with empty string if content not present
        toEditItem.heading = updatedData.title
        toEditItem.description = updatedData.description
        toEditItem.image = updatedData.image
        toEditItem.logo = updatedData.logo

        await sustainability.save()
        return NextResponse.json({ message: "Goal updated successfully" }, { status: 200 });
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

    const { searchParams } = new URL(req.url)
    const id = searchParams.get("id")

    const sustainability = await Sustainability.findOne();

    if (!sustainability) {
      return NextResponse.json({ error: "Sustainability not found" }, { status: 404 });
    } else {
      const toDeleteItem = sustainability.goals.goals.findIndex((item: { _id: string }) => item._id == id)
      if (toDeleteItem !== -1) {
        sustainability.goals.goals.splice(toDeleteItem, 1)
        await sustainability.save()
        return NextResponse.json({ message: "Goal deleted successfully" }, { status: 200 });
      }
    }

  } catch (error) {
    console.log("error deleting goal:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}