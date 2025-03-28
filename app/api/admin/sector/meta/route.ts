import { NextRequest, NextResponse } from "next/server";
import SectorsMeta from "@/models/SectorsMeta";
import connectDB from "@/lib/mongodb";

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const metaTitle = formData.get("metaTitle");
        const metaDescription = formData.get("metaDescription");
        await connectDB();
        const sectorsMeta = await SectorsMeta.findOne({});
        if(sectorsMeta){
            sectorsMeta.metaTitle = metaTitle;
            sectorsMeta.metaDescription = metaDescription;
            await sectorsMeta.save();
            return NextResponse.json({ success: true, message: "Meta saved successfully" }, { status: 200 });
        }else{
            return NextResponse.json({ success: false, message: "Error saving meta" }, { status: 500 });
        }
    } catch (error) {
        console.log("Error saving meta:", error);
        return NextResponse.json({ success: false, message: "Error saving meta" }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectDB();
        const sectorsMeta = await SectorsMeta.find();
        if(sectorsMeta){
            return NextResponse.json({ success: true, data: sectorsMeta }, { status: 200 });
        }else{
            return NextResponse.json({ success: false, message: "No meta found" }, { status: 404 });
        }
    } catch (error) {
        console.log("Error fetching meta:", error);
        return NextResponse.json({ success: false, message: "Error fetching meta" }, { status: 500 });
    }
}
