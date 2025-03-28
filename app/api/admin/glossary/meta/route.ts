import { verifyAdmin } from "@/lib/verifyAdmin";
import GlossaryMeta from "@/models/GlossaryMeta";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const isAdmin = await verifyAdmin(req);
        if(!isAdmin){
            return NextResponse.json({success:false,message:"Unauthorized"},{status:401})
        }

        const formData = await req.formData();
        const metaTitle = formData.get("metaTitle")
        const metaDescription = formData.get("metaDescription")

        const glossary = await GlossaryMeta.findOne({})

        if(glossary){
            glossary.metaTitle = metaTitle
            glossary.metaDescription = metaDescription
            await glossary.save()
            return NextResponse.json({success:true,message:"Meta updated successfully"},{status:200})
        }else{
            return NextResponse.json({success:false,message:"Glossary not found"},{status:404})
        }

    } catch (error) {
        console.log("Error saving meta",error)
    } 
}

export async function GET() {
    try {
        const glossary = await GlossaryMeta.findOne({})
        if(glossary){
            return NextResponse.json({success:true,message:"Meta fetched successfully",data:glossary},{status:200})
        }else{
            return NextResponse.json({success:false,message:"Meta not found"},{status:404})
        }
    } catch (error) {
        console.log("Error fetching meta",error)
        return NextResponse.json({success:false,message:"Error fetching meta"},{status:500})
    }
}