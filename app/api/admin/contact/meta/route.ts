import { NextRequest, NextResponse } from "next/server";
import ContactMeta from "@/models/ContactMeta";
import connectDB from "@/lib/mongodb";

export async function POST(request: NextRequest) {
    try {
        await connectDB();
        const formData = await request.formData();
        const metaTitle = formData.get("metaTitle");
        const metaDescription = formData.get("metaDescription");
        const contactMeta = await ContactMeta.findOne({});
        if(contactMeta){
            contactMeta.metaTitle = metaTitle;
            contactMeta.metaDescription = metaDescription;
            await contactMeta.save();
            return NextResponse.json({ success: true, message: "Meta saved successfully" }, { status: 200 });
        }else{
            return NextResponse.json({ success: false, message: "Error saving meta" }, { status: 500 });
        }
    } catch (error) {
        console.error("Error saving meta:", error);
        return NextResponse.json({ success: false, message: "Error saving meta" }, { status: 500 });
    }
}


export async function GET() {
    try {
        await connectDB();
        const contactMeta = await ContactMeta.find();
        if(contactMeta){
            return NextResponse.json({ success: true, data: contactMeta }, { status: 200 });
        }else{
            return NextResponse.json({ success: false, message: "No meta found" }, { status: 404 });
        }
    } catch (error) {
        console.error("Error fetching meta:", error);
        return NextResponse.json({ success: false, message: "Error fetching meta" }, { status: 500 });
    }
}
