import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import * as jose from "jose";

export async function middleware(request: NextRequest) {
 
  const referer = request.headers.get("referer") || "";
  const host = request.headers.get("host") || "";

  if (referer.includes("desertboard.in") || host.includes("desertboard.in")) {
    return new NextResponse("Access Denied", { status: 403 });
  }

  
  console.log("workkkkk")
  const path = request.nextUrl.pathname;
  const searchParams = request.nextUrl.searchParams;


  // Define protected routes
  const isProtectedRoute = path.startsWith("/admin") && !path.includes("/admin/login");

  if (isProtectedRoute) {
    const token = request.cookies.get("adminToken")?.value || "";

    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key");
      await jose.jwtVerify(token, secret);
      return NextResponse.next();
    } catch (error) {
      console.log(error);
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  // if (
  //   path.startsWith('/applications/PSB%C2%AE%20Supreme') &&
  //   searchParams.has('application') &&
  //   searchParams.has('sector')
  // ) {
  //   let application = decodeURIComponent(searchParams.get('application')?.toLowerCase() || "");
  //   const sector = searchParams.get('sector')?.toLowerCase();
  //   application = application?.replace(/ /g, '-') 
  //   // Construct the new URL with dynamic segments
  //   const newUrl = request.nextUrl.clone();
  //   newUrl.pathname = `/sectors/${sector}/${application}`;
  //   newUrl.search = ""

  //   // Perform the redirect
  //   const response = NextResponse.redirect(newUrl);
  //   response.cookies.set("productName", "psb-supreme", {
  //     path: "/", // Make the cookie available across the site
  //     httpOnly: true, // Ensures it's only accessible via HTTP requests (not JavaScript)
  //     secure: process.env.NODE_ENV === "production", // Secure in production
  //     sameSite: "lax",
  //   });

  //   return response;
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
