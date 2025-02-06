"use client";

import { Card } from "@/app/components/ui/card";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useSectorStore } from "@/app/store/useSectorStore";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

interface ApplicationFormData {
  title: string;
  description: string;
}

const CreateApplicationPage = () => {
  const router = useRouter();
  const addApplication = useSectorStore((state) => state.addApplication);
  const tempFinishes = useSectorStore((state) => state.tempFinishes);
  const [initialFormData, setInitialFormData] = useState<ApplicationFormData>({ title: "", description: "" });

  useEffect(() => {
    const tempApplicationData = localStorage.getItem("tempApplicationData");
    if (tempApplicationData) {
      setInitialFormData(JSON.parse(tempApplicationData));
    }
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    defaultValues: initialFormData,
  });

  const onSubmit = (data: ApplicationFormData) => {
    addApplication({
      ...data,
      finishes: tempFinishes,
    });
    localStorage.removeItem("tempApplicationData");
    router.push("/admin/sectors/create");
  };

  const handleAddFinish = () => {
    // Store the current form data in localStorage before navigating
    const formData = {
      title: (document.querySelector('input[name="title"]') as HTMLInputElement)?.value,
      description: (document.querySelector('textarea[name="description"]') as HTMLTextAreaElement)?.value,
    };
    localStorage.setItem("tempApplicationData", JSON.stringify(formData));

    // Navigate to finish creation
    const nextIndex = useSectorStore.getState().applications.length;
    router.push(`/admin/sectors/create/application/${nextIndex}/finish`);
  };

  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => router.back()} className="text-gray-600 hover:text-gray-900">
          ← Back
        </button>
        <h1 className="text-3xl font-bold">Add Application</h1>
      </div>

      <Card className="p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label className="text-sm font-medium">Title</Label>
            <Input
              {...register("title", { required: "Title is required" })}
              className="w-full p-2 border rounded-md"
              placeholder="Enter application title"
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
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

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Finishes</h2>
              <Button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={handleAddFinish}
              >
                Add Finish
              </Button>
            </div>

            {tempFinishes.length === 0 ? (
              <p className="text-gray-500 text-center py-4">No finishes added yet</p>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                {tempFinishes.map((finish, index) => (
                  <div key={index} className="border rounded-md p-2">
                    <p className="font-medium text-sm">{finish.title}</p>
                    <p className="text-xs text-gray-500 truncate">{finish.image_url}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex gap-4">
            <Button
              type="button"
              onClick={() => router.back()}
              className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-md hover:bg-gray-200"
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
              Add Application
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default CreateApplicationPage;
