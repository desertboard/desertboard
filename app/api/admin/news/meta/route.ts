import NewsMeta from "@/models/NewsMeta";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const metaTitle = formData.get("metaTitle");
        const metaDescription = formData.get("metaDescription");
        const newsMeta = await NewsMeta.findOne({});
        if (newsMeta) {
            newsMeta.metaTitle = metaTitle;
            newsMeta.metaDescription = metaDescription;
            await newsMeta.save();
            return NextResponse.json({ message: "Meta saved successfully" }, { status: 200 });
        } else {
            return NextResponse.json({ message: "Error saving meta" }, { status: 500 });
        }
    } catch (error) {
        console.error("Error saving meta:", error);
        return NextResponse.json({ message: "Error saving meta" }, { status: 500 });
    }
}

export async function GET() {
    try {
        const newsMeta = await NewsMeta.findOne();
        if (newsMeta) {
            return NextResponse.json({ newsMeta }, { status: 200 });
        } else {
            return NextResponse.json({ message: "Meta not found" }, { status: 404 });
        }
    } catch (error) {
        console.error("Error fetching meta:", error);
        return NextResponse.json({ message: "Error fetching meta" }, { status: 500 });
    }
}


