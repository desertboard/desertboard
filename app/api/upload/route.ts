import { NextRequest, NextResponse } from "next/server";
import { Storage } from "@google-cloud/storage";
import { verifyAdmin } from "@/lib/verifyAdmin";

// Initialize storage
const storage = new Storage({
  projectId: "desertboard",
  credentials: {
    client_email: process.env.GOOGLE_CLOUD_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_CLOUD_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
});

const bucket = storage.bucket("desertboard_website_files");

export async function POST(request: NextRequest) {
  const isAdmin = verifyAdmin(request);
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const fileType = formData.get("fileType") as string;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Generate unique filename
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    let filename = "";
    if (fileType === "file") {
      filename = `files/${uniqueSuffix}-${file.name}`;
    } else {
      filename = `images/${uniqueSuffix}-${file.name}`;
    }

    // Create a new blob in the bucket
    const blob = bucket.file(filename);
    const blobStream = blob.createWriteStream({
      resumable: false,
      metadata: {
        contentType: file.type,
      },
    });

    // Handle errors
    const uploadPromise = new Promise((resolve, reject) => {
      blobStream.on("error", (err) => {
        reject(err);
      });

      blobStream.on("finish", async () => {
        // Get public URL
        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${filename}`;
        resolve(publicUrl);
      });

      // Write file to stream
      blobStream.end(buffer);
    });

    const publicUrl = await uploadPromise;

    return NextResponse.json(
      {
        url: publicUrl,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
