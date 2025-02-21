"use client";

import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, X, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import ReactPlayer from 'react-player'

interface VideoUploaderProps {
  value?: string;
  onChange: (url: string, imageData?: File) => void;
  className?: string;
  deleteAfterUpload?: boolean;
}

export function VideoUploader({ value, onChange, className, deleteAfterUpload = false }: VideoUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [localVideoUrl, setLocalVideoUrl] = useState<string | null>(null);
  const [isUploadComplete, setIsUploadComplete] = useState(false);

  useEffect(() => {
    setIsUploadComplete(!!value);
  }, [value]);

  
  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (!file) return;
      
      try {
        setIsUploading(true);
        setError(null);
        setIsUploadComplete(false);
        
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        if (response.status !== 200) {
            setLocalVideoUrl(null);
          alert("Upload failed");
          return;
        }

        const data = await response.json();
        setLocalVideoUrl(data.url);
        console.log("Image",data.url)
        onChange(data.url, file);
        setIsUploadComplete(true);
        if (deleteAfterUpload) {
            setLocalVideoUrl(null);
          setIsUploadComplete(false);
        }
      } catch (err) {
        setLocalVideoUrl(null);
        setError(err instanceof Error ? err.message : "Failed to upload video");
      } finally {
        setIsUploading(false);
      }
    },
    [onChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "video/*": [".mp4", ".mov", ".avi", ".mkv", ".webm"],
    },
    maxFiles: 1,
    multiple: false,
  });

  const removeVideo = useCallback(() => {
    setLocalVideoUrl(null);
    setIsUploadComplete(false);
    onChange("", undefined);
  }, [onChange, localVideoUrl]);

  const displayUrl = localVideoUrl || value;

  return (
    <div className={cn("space-y-4 w-full", className)}>
      {displayUrl && isUploadComplete ? (
        <div className="relative w-full max-w-[300px] aspect-[4/3] overflow-hidden rounded-lg border">
          {/* <Image src={value ? value : displayUrl} alt="Uploaded image" className="object-cover" fill /> */}
          <ReactPlayer url={value ? value : displayUrl} />
          <Button
            type="button"
            variant="destructive"
            size="icon"
            className="absolute right-2 top-2"
            onClick={removeVideo}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={cn(
            "border-2 border-dashed rounded-lg p-8 transition-colors hover:border-gray-400",
            "flex flex-col items-center justify-center gap-2 cursor-pointer",
            isDragActive && "border-blue-500 bg-blue-50",
            isUploading && "pointer-events-none opacity-60"
          )}
        >
          <input {...getInputProps()} />
          {isUploading ? (
            <>
              <Loader2 className="h-10 w-10 animate-spin text-gray-400" />
              <p className="text-sm text-gray-600">Uploading...</p>
            </>
          ) : (
            <>
              <Upload className="h-10 w-10 text-gray-400" />
              <p className="text-sm text-gray-600">
                {isDragActive ? "Drop the image here" : "Drag & drop an video here, or click to select"}
              </p>
            </>
          )}
        </div>
      )}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
