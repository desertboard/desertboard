import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";
import Faqs from "@/models/Faqs";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {

  await connectDB();

  try {

    const { searchParams } = new URL(req.url)
    const id = searchParams.get("id")

    const faqs = await Faqs.findById({ _id: id })
    if (faqs) {
      const contents = faqs.contents
      return NextResponse.json(contents, { status: 200 });
    } else {
      return NextResponse.json({ error: "Fetching items failed" })
    }

  } catch (error) {
    console.log("error adding section:", error);
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
    const sectionName = formData.get("sectionName");

    const faqs = await Faqs.create({ sectionName })
    if (faqs) {
      return NextResponse.json({ message: "Section added successfully" }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Adding section failed" })
    }

  } catch (error) {
    console.log("error adding section:", error);
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

    const { searchParams } = new URL(req.url)
    const id = searchParams.get("id")

    const formData = await req.formData();
    const sectionName = formData.get("sectionName");

    const faqs = await Faqs.findByIdAndUpdate({ _id: id }, { sectionName })
    if (faqs) {
      return NextResponse.json({ message: "Faqs updated successfully" }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Updating faqs failed" })
    }


  } catch (error) {
    console.log("error updating faqs:", error);
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

    const faqs = await Faqs.findByIdAndDelete({ _id: id })
    if (faqs) {
      return NextResponse.json({ message: "Faqs deleted successfully" }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Deleting faqs failed" })
    }


  } catch (error) {
    console.log("error updating faqs:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}