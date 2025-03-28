import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import FileMeta from "@/models/FileMeta";

export async function POST(request: NextRequest) {
    try {
        await connectDB();
        const formData = await request.formData();
        const metaTitle = formData.get("metaTitle");
        const metaDescription = formData.get("metaDescription");
        const fileMeta = await FileMeta.findOne({});
        if(fileMeta){
            fileMeta.metaTitle = metaTitle;
            fileMeta.metaDescription = metaDescription;
            await fileMeta.save();
            return NextResponse.json({ message: "Meta saved successfully" }, { status: 200 });
        }else{
            return NextResponse.json({ error: "File meta not found" }, { status: 404 });
        }
    } catch (error) {
        console.error("Error saving meta:", error);
        return NextResponse.json({ error: "Failed to save meta" }, { status: 500 });
    }
}

export async function GET(){
    try {
        await connectDB();
        const fileMeta = await FileMeta.find();
        if(fileMeta){
            return NextResponse.json({ data: fileMeta }, { status: 200 });
        }else{
            return NextResponse.json({ error: "File meta not found" }, { status: 404 });
        }
    } catch (error) {
        console.error("Error fetching meta:", error);
        return NextResponse.json({ error: "Failed to fetch meta" }, { status: 500 });
    }
}