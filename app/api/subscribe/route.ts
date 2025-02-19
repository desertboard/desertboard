import Subscription from "@/models/Subscription";
import { NextRequest, NextResponse } from "next/server";


export const GET = async() => {
    try {
        const emails = await Subscription.find()
        if(emails){
            return NextResponse.json({emails},{status:200})
        }else{
            return NextResponse.json({error:"no emails found"},{status:400})
        }
    } catch (error) {
        console.log("Error fetching emails",error)
        return NextResponse.json({error:"Something went wrong"},{status:400})
    }
}


export const POST = async(req:NextRequest) => {
    try {
        const formData = await req.formData()
        const email = formData.get("email") as string;
        const subscribe = await Subscription.create({
            email
        })
        if(subscribe){
            return NextResponse.json({message:"You have subscribed to our newsletter"},{status:200})
        }else{
            return NextResponse.json({error:"We couldn't process that request at the moment, please try again later"},{status:400})
        }
    } catch (error) {
        console.log("Error adding contact to newsletter:",error)
        return NextResponse.json({error:"Something went wrong"},{status:400})
    }
}