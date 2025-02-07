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
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

type ProductData = {
  title: string;
  description: string;
  image_url: string;
  specifications: {
    name: string;
    value: string;
  }[];
};

interface ProductFormData {
  productId?: string;
}
const ProductForm = ({ productId }: ProductFormData) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<ProductData>({
    defaultValues: {
      title: "",
      description: "",
      image_url: "",
      specifications: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "specifications",
  });

  const fetchProduct = async () => {
    const response = await fetch(`/api/admin/products/byid?id=${productId}`);
    const res = await response.json();
    setValue("title", res.data.title);
    setValue("description", res.data.description);
    setValue("image_url", res.data.image_url);
    setValue("specifications", res.data.specifications);
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
              <Label className="text-sm font-medium">Description</Label>
              <Controller
                name="description"
                control={control}
                rules={{ required: "Description is required" }}
                render={({ field }) => (
                  <ReactQuill theme="snow" value={field.value} onChange={field.onChange} className="mt-1" />
                )}
              />
              {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="image_url">Image URL</Label>
              <Input id="image_url" {...register("image_url")} />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Specifications</Label>
              <Button type="button" variant="outline" onClick={() => append({ name: "", value: "" })}>
                Add Specification
              </Button>
            </div>

            {fields.map((field, index) => (
              <div key={field.id} className="flex gap-4 items-start">
                <div className="space-y-2 flex-1">
                  <Label htmlFor={`specifications.${index}.name`}>Name</Label>
                  <Input {...register(`specifications.${index}.name`)} placeholder="Specification name" />
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor={`specifications.${index}.value`}>Value</Label>
                  <Input {...register(`specifications.${index}.value`)} placeholder="Specification value" />
                </div>
                <Button type="button" variant="destructive" className="mt-8" onClick={() => remove(index)}>
                  Remove
                </Button>
              </div>
            ))}
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
