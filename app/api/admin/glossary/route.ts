import { formatDbResponse } from "@/lib/formatDbResponse";
import connectDB from "@/lib/mongodb";
import { verifyAdmin } from "@/lib/verifyAdmin";
import Glossary from "@/models/Glossary";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
  await connectDB();

  try {

    const { searchParams } = new URL(req.url)
    const alphabet = searchParams.get("alphabet") as string

    if (!alphabet) {
      const glossary = await Glossary.find()
      return NextResponse.json({ glossary: formatDbResponse(glossary) })
    }

    const glossary = await Glossary.findOne({ alphabet });


    if (!glossary) {
      return NextResponse.json({ message: "No content found" }, { status: 200 });
    }

    return NextResponse.json({ glossary: formatDbResponse(glossary) });

  } catch (error) {
    console.log("error getting glossary:", error);
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
    const updatedData = Object.fromEntries(formData.entries());

    const alphabet = updatedData.alphabet

    if (!alphabet) {
      return NextResponse.json({ error: "Alphabet is required" }, { status: 400 });
    }

    let glossaryEntry = await Glossary.findOne({ alphabet });

    if (glossaryEntry) {
      // Append new contents to the existing array
      glossaryEntry.contents.push({ title: updatedData.title, description: updatedData.description });
      await glossaryEntry.save();
    } else {
      // Create a new document
      glossaryEntry = new Glossary({
        alphabet,
        contents: { title: updatedData.title, description: updatedData.description },
      });
      await glossaryEntry.save();
    }

    return NextResponse.json({ message: "Glossary updated successfully" }, { status: 200 });

  } catch (error) {
    console.log("error getting about:", error);
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

    const alphabet = updatedData.alphabet
    const editId = updatedData.editId

    if (!alphabet) {
      return NextResponse.json({ error: "Alphabet is required" }, { status: 400 });
    }

    const glossaryEntry = await Glossary.findOne({ alphabet });

    if (glossaryEntry) {
      // Append new contents to the existing array
      const editItem = await glossaryEntry.contents.find((item: { _id: string }) => item._id == editId)
      editItem.title = updatedData.title
      editItem.description = updatedData.description
      await glossaryEntry.save();
    } else {

      return NextResponse.json({ message: "Glossary not found" }, { status: 400 });

    }

    return NextResponse.json({ message: "Glossary updated successfully" }, { status: 200 });

  } catch (error) {
    console.log("error getting about:", error);
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
    const formData = await req.formData();

    const alphabet = formData.get("alphabet") as string;

    if (!alphabet) {
      return NextResponse.json({ error: "Glossary not found" }, { status: 400 });
    }

    const glossaryEntry = await Glossary.findOne({ alphabet });

    if (glossaryEntry) {
      // Append new contents to the existing array
      const deleteItem = await glossaryEntry.contents.findIndex((item: { _id: string }) => item._id == id)
      if (deleteItem !== -1) {
        glossaryEntry.contents.splice(deleteItem, 1)
        await glossaryEntry.save();
      } else {
        return NextResponse.json({ message: "Something went wrong" }, { status: 400 });
      }
    } else {

      return NextResponse.json({ message: "Glossary not found" }, { status: 400 });

    }

    return NextResponse.json({ message: "Glossary updated successfully" }, { status: 200 });

  } catch (error) {
    console.log("error getting about:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}