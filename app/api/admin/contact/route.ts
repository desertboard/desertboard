import { formatDbResponse } from "@/lib/formatDbResponse";
import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";
import Contact from "@/models/Contact";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
  await connectDB();

  try {
    const { searchParams } = new URL(req.url)
    const region = searchParams.get("region")


    if (region) {
      const contact = await Contact.findOne({ regionName: region })

      if (contact) {
        const contents = contact.content
        return NextResponse.json({ contents }, { status: 200 })
      } else {
        return NextResponse.json({ error: "Contact not found" }, { status: 404 });
      }
    } else {
      const contact = await Contact.find();
      if (!contact) {
        return NextResponse.json({ error: "Contact not found" }, { status: 404 });
      }

      return NextResponse.json({ regions: formatDbResponse(contact) });
    }



  } catch (error) {
    console.log("error getting contact:", error);
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
    const regionName = formData.get("regionName")

    if (regionName) {
      const contact = await Contact.create({
        regionName,
        content: []
      })
      if (contact) {
        return NextResponse.json({ message: "Region created successfully" }, { status: 200 });
      } else {
        return NextResponse.json({ error: "Creating region failed" }, { status: 404 });
      }
    }

  } catch (error) {

    console.log("error creating region:", error);
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
    const regionName = formData.get("regionName")

    const contact = await Contact.findByIdAndUpdate({ _id: id }, { regionName })
    if (contact) {
      return NextResponse.json({ message: "Region updated successfully" }, { status: 200 })
    } else {
      return NextResponse.json({ error: "Contact not found" }, { status: 400 })
    }

  } catch (error) {

    console.log("error updating region:", error);
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


    const contact = await Contact.findByIdAndDelete({ _id: id })
    if (contact) {
      return NextResponse.json({ message: "Region deleted successfully" }, { status: 200 })
    } else {
      return NextResponse.json({ error: "Contact not found" }, { status: 400 })
    }

  } catch (error) {

    console.log("error deleting region:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

