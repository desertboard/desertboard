import connectDB from "@/lib/mongodb";
import ratelimit from "@/lib/rateLimit";
import { verifyAdmin } from "@/lib/verifyAdmin";
import Enquiry from "@/models/Enquiry";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

  await connectDB();

  try {

    const { searchParams } = new URL(req.url)
    const department = searchParams.get("department")

    const enquiries = await Enquiry.findOne({ department })

    if (enquiries) {
      return NextResponse.json({ enquiries }, { status: 200 })
    } else {
      return NextResponse.json({ error: "Depatment not found" }, { status: 400 })
    }

  } catch (error) {

    console.log("error getting enquiries:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


export async function POST(req: NextRequest) {
  
  await connectDB();

  try {
    
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1";   
    const result = await ratelimit.limit(ip);

    if(!result.success){
      console.log("rate limit")
      return NextResponse.json({ message: "Please wait while we process your request" }, { status: 200 })
    }

    console.log("here")
    const { searchParams } = new URL(req.url)
    const department = searchParams.get("department")

    const formData = await req.formData()
    const name = formData.get("name")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const message = formData.get("message")
    const resume = formData.get("resume")

    const enquiries = await Enquiry.findOne({ department })

    if (enquiries) {
      enquiries.enquiry.push({ name, email, phone, message, resume })
      await enquiries.save()
      return NextResponse.json({ message: "Thank you, we will get back to you soon" }, { status: 200 })
    }
  } catch (error) {
    console.log("error posting enquiry:", error);
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
    const department = searchParams.get("department")
    const id = searchParams.get("id")

    const enquiries = await Enquiry.findOne({ department })

    if (enquiries) {
      const itemToBeDeleted = enquiries.enquiry.findIndex((item: { _id: string }) => item._id == id)
      if (itemToBeDeleted !== -1) {
        enquiries.enquiry.splice(itemToBeDeleted, 1)
        await enquiries.save()
        return NextResponse.json({ message: "Enquiry deleted successfully" }, { status: 200 })
      }

    } else {
      return NextResponse.json({ error: "Enquiry not found" }, { status: 500 });
    }
  } catch (error) {
    console.log("error posting enquiry:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
