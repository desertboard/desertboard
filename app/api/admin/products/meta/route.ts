import { NextRequest, NextResponse } from "next/server";
import ProductMeta from "@/models/ProductMeta";
import connectDB from "@/lib/mongodb";

export async function POST(request: NextRequest) {
    try {
        await connectDB();
        const formData = await request.formData();
        const metaTitle = formData.get("metaTitle");
        const metaDescription = formData.get("metaDescription");
        
        const productMeta = await ProductMeta.findOne({});
        if(productMeta){
            productMeta.metaTitle = metaTitle?.toString();
            productMeta.metaDescription = metaDescription?.toString();
            await productMeta.save();
            return NextResponse.json({ message: "Meta saved successfully", productMeta }, { status: 200 });
        }else{
            return NextResponse.json({ message: "Error saving meta" }, { status: 500 });
        }
    } catch (error) {
        console.error("Error saving meta:", error);
        return NextResponse.json({ message: "Error saving meta", error }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectDB();
        const productMeta = await ProductMeta.findOne();
        if(productMeta){
            return NextResponse.json({ productMeta }, { status: 200 });
        }else{
            return NextResponse.json({ message: "No meta found" }, { status: 404 });
        }
    } catch (error) {
        console.error("Error fetching meta:", error);
        return NextResponse.json({ message: "Error fetching meta", error }, { status: 500 });
    }
}
