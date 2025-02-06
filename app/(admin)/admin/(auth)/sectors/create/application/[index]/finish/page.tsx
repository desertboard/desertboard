"use client";

import { Card } from "@/app/components/ui/card";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useSectorStore } from "@/app/store/useSectorStore";
import { useParams } from "next/navigation";

interface FinishFormData {
  title: string;
  image_url: string;
}

const CreateFinishPage = () => {
  const router = useRouter();
  const params = useParams();
  const applicationIndex = parseInt(params.index as string);
  const addFinishToApplication = useSectorStore((state) => state.addFinishToApplication);
  const addTempFinish = useSectorStore((state) => state.addTempFinish);
  const applications = useSectorStore((state) => state.applications);

  const application = applications[applicationIndex];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FinishFormData>({
    defaultValues: {
      title: "",
      image_url: "",
    },
  });

  const onSubmit = (data: FinishFormData) => {
    if (application) {
      // If we're editing an existing application
      addFinishToApplication(applicationIndex, data);
    } else {
      // If we're creating a new application
      addTempFinish(data);
    }
    router.back();
  };

  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => router.back()} className="text-gray-600 hover:text-gray-900">
          ← Back
        </button>
        <div>
          <h1 className="text-3xl font-bold">Add Finish</h1>
        </div>
      </div>

      <Card className="p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Title</label>
            <input
              {...register("title", { required: "Title is required" })}
              className="w-full p-2 border rounded-md"
              placeholder="Enter finish title"
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Image URL</label>
            <input
              {...register("image_url", { required: "Image URL is required" })}
              className="w-full p-2 border rounded-md"
              placeholder="Enter image URL"
            />
            {errors.image_url && <p className="text-red-500 text-sm">{errors.image_url.message}</p>}
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-md hover:bg-gray-200"
            >
              Cancel
            </button>
            <button type="submit" className="flex-1 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
              Add Finish
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default CreateFinishPage;
