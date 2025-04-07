"use client";

import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, X, Loader2 } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";

interface ImageUploaderProps {
  value?: string;
  altText?: string;
  onChange: (url: string, altText?: string, imageData?: File) => void;
  className?: string;
  deleteAfterUpload?: boolean;
}

export function ImageUploader({
  value,
  altText = "",
  onChange,
  className,
  deleteAfterUpload = false,
}: ImageUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [localImageUrl, setLocalImageUrl] = useState<string | null>(null);
  const [isUploadComplete, setIsUploadComplete] = useState(false);
  const [localAltText, setLocalAltText] = useState<string>(altText);

  useEffect(() => {
    setIsUploadComplete(!!value);
    setLocalAltText(altText);
  }, [value, altText]);

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
          setLocalImageUrl(null);
          alert("Upload failed");
          return;
        }

        const data = await response.json();
        setLocalImageUrl(data.url);
        console.log("Image", data.url);
        onChange(data.url, localAltText, file);
        setIsUploadComplete(true);
        if (deleteAfterUpload) {
          setLocalImageUrl(null);
          setIsUploadComplete(false);
        }
      } catch (err) {
        setLocalImageUrl(null);
        setError(err instanceof Error ? err.message : "Failed to upload image");
      } finally {
        setIsUploading(false);
      }
    },
    [onChange, localAltText]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif"],
    },
    maxFiles: 1,
    multiple: false,
  });

  const removeImage = useCallback(() => {
    setLocalImageUrl(null);
    setIsUploadComplete(false);
    onChange("", "", undefined);
  }, [onChange]);

  const handleAltTextChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newAltText = e.target.value;
      setLocalAltText(newAltText);
      if (value) {
        onChange(value, newAltText);
      }
    },
    [onChange, value]
  );

  const displayUrl = localImageUrl || value;

  return (
    <div className={cn("space-y-4 w-full", className)}>
      {displayUrl && isUploadComplete ? (
        <div className="space-y-2">
          <div className="relative w-full max-w-[300px] aspect-[4/3] overflow-hidden rounded-lg border">
            <Image
              src={value ? value : displayUrl}
              alt={localAltText || "Uploaded image"}
              className="object-cover"
              fill
            />
            <Button
              type="button"
              variant="destructive"
              size="icon"
              className="absolute right-2 top-2"
              onClick={removeImage}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-1">
            <Label htmlFor="alt-text">Alt Text</Label>
            <Input
              id="alt-text"
              value={localAltText}
              onChange={handleAltTextChange}
              placeholder="Enter image description"
            />
          </div>
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
                {isDragActive ? "Drop the image here" : "Drag & drop an image here, or click to select"}
              </p>
            </>
          )}
        </div>
      )}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
