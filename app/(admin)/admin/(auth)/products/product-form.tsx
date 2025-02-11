"use client";

import { Card } from "@/app/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Controller, useForm, useFieldArray } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ImageUploader } from "@/app/components/ui/image-uploader";
import Image from "next/image";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

type FinishData = {
  name: string;
  image: string;
  description: string;
};

type ProductData = {
  title: string;
  subTitle: string;
  specifications: {
    name: string;
    value: string;
  }[];
  subSections: {
    icon: string;
    description: string;
  }[];
  bestPractices: {
    title: string;
    description: string;
  }[];
  finishes: FinishData[];
  sector: string;
  images: string[];
  bannerImage: string;
  featuredImage?: string;
};

interface ProductFormData {
  productId?: string;
}
const ProductForm = ({ productId }: ProductFormData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [sectors, setSectors] = useState<string[]>([]);
  const [finishes, setFinishes] = useState<FinishData[]>([]);
  const router = useRouter();
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const { register, handleSubmit, control, setValue } = useForm<ProductData>({
    defaultValues: {
      title: "",
      subTitle: "",
      specifications: [],
      subSections: [],
      bestPractices: [],
      finishes: [],
      sector: "",
      images: [],
      bannerImage: "",
      featuredImage: "",
    },
  });

  const {
    fields: specFields,
    append: appendSpec,
    remove: removeSpec,
  } = useFieldArray({
    control,
    name: "specifications",
  });

  const {
    fields: subSectionFields,
    append: appendSubSection,
    remove: removeSubSection,
  } = useFieldArray({
    control,
    name: "subSections",
  });

  const {
    fields: bestPracticeFields,
    append: appendBestPractice,
    remove: removeBestPractice,
  } = useFieldArray({
    control,
    name: "bestPractices",
  });

  const {
    fields: finishFields,
    append: appendFinish,
    replace: replaceFinishes,
  } = useFieldArray({
    control,
    name: "finishes",
  });

  useEffect(() => {
    const fetchSectors = async () => {
      const response = await fetch("/api/admin/sector");
      const res = await response.json();
      setSectors(res.data.map((sector: { title: string }) => sector.title));
    };
    fetchSectors();
  }, []);

  useEffect(() => {
    const fetchFinishes = async () => {
      const response = await fetch("/api/admin/finish");
      const res = await response.json();
      setFinishes(res.data);
    };
    fetchFinishes();
  }, []);

  const fetchProduct = async () => {
    const response = await fetch(`/api/admin/products/byid?id=${productId}`);
    const res = await response.json();
    setValue("title", res.data.title);
    setValue("subTitle", res.data.subTitle);
    setValue("specifications", res.data.specifications);
    setValue("subSections", res.data.subSections);
    setValue("bestPractices", res.data.bestPractices);
    setValue("finishes", res.data.finishes);
    setValue("sector", res.data.sector);
    setValue("images", res.data.images);
    setValue("bannerImage", res.data.bannerImage);
    setValue("featuredImage", res.data.featuredImage);
  };

  useEffect(() => {
    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const onSubmit = async (data: ProductData) => {
    try {
      if (productId) {
        const response = await fetch(`/api/admin/products/byid?id=${productId}`, {
          method: "PATCH",
          body: JSON.stringify(data),
        });
        const res = await response.json();
        console.log(res);
        router.push("/admin/products");
      } else {
        const response = await fetch(`/api/admin/products`, {
          method: "POST",
          body: JSON.stringify(data),
        });
        const res = await response.json();
        console.log(res);
        router.push("/admin/products");
      }
    } catch (error) {
      console.error("Error submitting product:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUpload = async (uploadedUrl: string) => {
    setImageUrls((prev) => [...prev, uploadedUrl]);
    setValue("images", [...imageUrls, uploadedUrl]);
  };

  const handleRemoveImage = (indexToRemove: number) => {
    setImageUrls((prev) => prev.filter((_, index) => index !== indexToRemove));
    setValue(
      "images",
      imageUrls.filter((_, index) => index !== indexToRemove)
    );
  };

  const toggleFinish = (finish: FinishData) => {
    const currentFinishes = finishFields;
    const isSelected = currentFinishes.some((f) => f.name === finish.name);

    if (isSelected) {
      const newFinishes = currentFinishes.filter((f) => f.name !== finish.name);
      replaceFinishes(newFinishes);
    } else {
      appendFinish(finish);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">{productId ? "Edit" : "Create"} Product</h1>

      <Card className="p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" {...register("title")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subTitle">Sub Title</Label>
              <Input id="subTitle" {...register("subTitle")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sector">Sector</Label>
              <Controller
                name="sector"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a sector" />
                    </SelectTrigger>
                    <SelectContent>
                      {sectors.map((sector) => (
                        <SelectItem key={sector} value={sector}>
                          {sector}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Specifications</Label>
              <Button type="button" variant="outline" onClick={() => appendSpec({ name: "", value: "" })}>
                Add Specification
              </Button>
            </div>

            {specFields.map((field, index) => (
              <div key={field.id} className="flex gap-4 items-start">
                <div className="space-y-2 flex-1">
                  <Label htmlFor={`specifications.${index}.name`}>Name</Label>
                  <Input {...register(`specifications.${index}.name`)} placeholder="Specification name" />
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor={`specifications.${index}.value`}>Value</Label>
                  <Input {...register(`specifications.${index}.value`)} placeholder="Specification value" />
                </div>
                <Button type="button" variant="destructive" className="mt-8" onClick={() => removeSpec(index)}>
                  Remove
                </Button>
              </div>
            ))}
          </div>

          {/* Sub Sections */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Sub Sections</Label>
              <Button type="button" variant="outline" onClick={() => appendSubSection({ icon: "", description: "" })}>
                Add Sub Section
              </Button>
            </div>

            {subSectionFields.map((field, index) => (
              <div key={field.id} className="space-y-4 p-4 border rounded-lg">
                <div className="space-y-2">
                  <Label>Icon</Label>
                  <Controller
                    name={`subSections.${index}.icon`}
                    control={control}
                    render={({ field }) => <ImageUploader value={field.value} onChange={field.onChange} />}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Controller
                    name={`subSections.${index}.description`}
                    control={control}
                    render={({ field }) => (
                      <ReactQuill theme="snow" value={field.value} onChange={field.onChange} className="bg-white" />
                    )}
                  />
                </div>
                <Button type="button" variant="destructive" onClick={() => removeSubSection(index)}>
                  Remove Sub Section
                </Button>
              </div>
            ))}
          </div>

          {/* Best Practices */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Best Practices</Label>
              <Button
                type="button"
                variant="outline"
                onClick={() => appendBestPractice({ title: "", description: "" })}
              >
                Add Best Practice
              </Button>
            </div>

            {bestPracticeFields.map((field, index) => (
              <div key={field.id} className="space-y-4 p-4 border rounded-lg">
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input {...register(`bestPractices.${index}.title`)} placeholder="Best Practice Title" />
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Controller
                    name={`bestPractices.${index}.description`}
                    control={control}
                    render={({ field }) => (
                      <ReactQuill theme="snow" value={field.value} onChange={field.onChange} className="bg-white" />
                    )}
                  />
                </div>
                <Button type="button" variant="destructive" onClick={() => removeBestPractice(index)}>
                  Remove Best Practice
                </Button>
              </div>
            ))}
          </div>

          {/* Banner Image */}
          <div className="space-y-2">
            <Label>Banner Image</Label>
            <Controller
              name="bannerImage"
              control={control}
              render={({ field }) => (
                <ImageUploader
                  value={field.value}
                  onChange={(url) => {
                    field.onChange(url);
                    setValue("bannerImage", url);
                  }}
                />
              )}
            />
          </div>

          {/* Featured Image */}
          <div className="space-y-2">
            <Label>
              Featured Image
              <span className="text-sm text-muted-foreground ml-2">(Optional)</span>
            </Label>
            <Controller
              name="featuredImage"
              control={control}
              render={({ field }) => (
                <ImageUploader
                  value={field.value}
                  onChange={(url) => {
                    field.onChange(url);
                    setValue("featuredImage", url);
                  }}
                />
              )}
            />
          </div>
          {/* Images */}
          <div>
            <Label className="block text-sm font-medium text-gray-700">Images</Label>
            <div className="mt-2">
              <ImageUploader onChange={handleImageUpload} deleteAfterUpload={true} />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {imageUrls.map((url, index) => (
                <div key={index} className="relative h-40">
                  <Image
                    src={url}
                    alt={`Uploaded image ${index + 1}`}
                    className="h-full w-full object-cover rounded-lg"
                    width={100}
                    height={100}
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Finishes</Label>
              <div className="text-sm text-muted-foreground">Selected: {finishFields.length}</div>
            </div>

            {finishes.length === 0 ? (
              <div className="text-center p-8 border rounded-lg">
                <p className="text-muted-foreground">No finishes available to select</p>
              </div>
            ) : (
              <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
                {finishes.map((finish) => {
                  const isSelected = finishFields.some((f) => f.name === finish.name);
                  return (
                    <div
                      key={finish.name}
                      className={`
                        cursor-pointer rounded-lg border p-2 transition-all
                        hover:border-primary hover:shadow-sm
                        ${isSelected ? "border-primary bg-primary/5" : "border-border"}
                      `}
                      onClick={() => toggleFinish(finish)}
                    >
                      <div className="aspect-square w-full relative mb-1">
                        <img src={finish.image} alt={finish.name} className="object-cover rounded-md w-full h-full" />
                        {isSelected && (
                          <div className="absolute top-1 right-1 bg-primary text-white rounded-full p-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              className="w-3 h-3"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <p className="text-xs font-medium text-center truncate">{finish.name}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <Button type="submit" className="w-full">
            {isLoading ? "Saving..." : productId ? "Update Product" : "Create Product"}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default ProductForm;
