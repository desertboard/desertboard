import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete("adminToken");
    return NextResponse.json({ success: true, message: "Logged out successfully" }, { status: 200 });
  } catch (error) {
    console.log("Error logging out", error);
    return NextResponse.json({ success: false, message: "Error logging out" }, { status: 500 });
  }
}
