import { Card } from "@/app/components/ui/card";
import { useSectorStore } from "@/app/store/useSectorStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import "react-quill/dist/quill.snow.css";
import { ImageUploader } from "@/app/components/ui/image-uploader";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

interface Application {
  title: string;
  description: string;
  finishes: Array<{
    title: string;
    image_url: string;
  }>;
}

interface SectorFormData {
  title: string;
  description: string;
  image_url: string;
  applications: Application[];
}

interface Props {
  sectorId?: string;
}

const SectorFormPage = ({ sectorId }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const applications = useSectorStore((state) => state.applications);
  const clearAll = useSectorStore((state) => state.clearAll);
  const { setTitle, setDescription, setImageUrl, setApplications, title, description, image_url } = useSectorStore(
    (state) => state
  );

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    control,
    formState: { errors },
  } = useForm<SectorFormData>({
    defaultValues: {
      title: title,
      description: description,
      image_url: image_url,
      applications: applications,
    },
  });

  useEffect(() => {
    const fetchSector = async () => {
      if (sectorId) {
        try {
          setIsLoading(true);
          const response = await fetch(`/api/admin/sector/byid?id=${sectorId}`);
          const data = await response.json();
          setValue("title", data.data.title);
          setValue("description", data.data.description);
          setValue("image_url", data.data.image_url);
          setTitle(data.data.title);
          setDescription(data.data.description);
          setImageUrl(data.data.image_url);
          setApplications(data.data.applications);
        } catch (error) {
          console.error("Error fetching sector:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchSector();
  }, [sectorId, setValue, setTitle, setDescription, setImageUrl, setApplications]);

  useEffect(() => {
    setValue("title", title);
    setValue("description", description);
    setValue("image_url", image_url);
  }, [title, description, image_url, setValue]);

  const onSubmit = async (data: SectorFormData) => {
    const newData = {
      ...data,
      applications: applications,
    };
    try {
      setIsLoading(true);
      if (sectorId) {
        const response = await fetch(`/api/admin/sector?id=${sectorId}`, {
          method: "PATCH",
          body: JSON.stringify(newData),
        });
        const res = await response.json();
        console.log(res);
        clearAll();
        router.push("/admin/sectors");
      } else {
        const response = await fetch(`/api/admin/sector`, {
          method: "POST",
          body: JSON.stringify(newData),
        });
        const res = await response.json();
        console.log(res);
        clearAll();
        router.push("/admin/sectors");
      }
    } catch (error) {
      console.error("Error submitting sector:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClickAddApplication = () => {
    setTitle(getValues("title"));
    setDescription(getValues("description"));
    setImageUrl(getValues("image_url"));
    router.push("/admin/sectors/create/application");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">{sectorId ? "Edit" : "Create"} Sector</h1>

      <Card className="p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label className="text-sm font-medium">Title</Label>
            <Input
              {...register("title", { required: "Title is required" })}
              className="w-full p-2 border rounded-md"
              placeholder="Enter sector title"
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

          <div className="space-y-2">
            <Label className="text-sm font-medium">Image</Label>
            <ImageUploader value={getValues("image_url")} onChange={(url) => setValue("image_url", url)} />
            {errors.image_url && <p className="text-red-500 text-sm">{errors.image_url.message}</p>}
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Applications</h2>
              <Button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={handleClickAddApplication}
              >
                Add Application
              </Button>
            </div>

            {!applications || applications?.length === 0 ? (
              <p className="text-gray-500 text-center py-4">No applications added yet</p>
            ) : (
              <div className="space-y-4">
                {applications.map((app, index) => (
                  <Card key={index} className="p-4">
                    <h3 className="font-medium">{app.title}</h3>
                    <p className="text-sm text-gray-600">{app.description}</p>
                    <div className="mt-4">
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-sm font-medium">Finishes ({app.finishes.length})</p>
                        <Button
                          type="button"
                          onClick={() => router.push(`/admin/sectors/create/application/${index}/finish`)}
                          className="text-sm bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                        >
                          Add Finish
                        </Button>
                      </div>
                      {app.finishes.length > 0 ? (
                        <div className="grid grid-cols-2 gap-2">
                          {app.finishes.map((finish, finishIndex) => (
                            <div key={finishIndex} className="border rounded-md p-2">
                              <p className="font-medium text-sm">{finish.title}</p>
                              <p className="text-xs text-gray-500 truncate">{finish.image_url}</p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500">No finishes added yet</p>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>

          <Button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
            {isLoading ? "Saving..." : sectorId ? "Update Sector" : "Create Sector"}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default SectorFormPage;
