import { Card } from "@/app/components/ui/card";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm, useFieldArray } from "react-hook-form";
import dynamic from "next/dynamic";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import "react-quill/dist/quill.snow.css";
import { ImageUploader } from "@/app/components/ui/image-uploader";
import { Textarea } from "@/components/ui/textarea";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

interface Application {
  title: string;
  description: string;
  image: string;
  product: string;
  bannerImage:string;
}

interface SectorFormData {
  title: string;
  description: string;
  image: string;
  applications: Application[];
  icon: string;
  bannerImage: string;
  shortDescription: string;
}

interface Props {
  sectorId?: string;
}

const SectorFormPage = ({ sectorId }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<string[]>([]);
  const router = useRouter();

  // Add loading state for products
  const [isProductsLoading, setIsProductsLoading] = useState(true);

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    control,
    formState: { errors },
  } = useForm<SectorFormData>({
    defaultValues: {
      title: "",
      description: "",
      image: "",
      applications: [],
      icon: "",
      bannerImage: "",
      shortDescription: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "applications",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsProductsLoading(true);
        const response = await fetch("/api/admin/products");
        const data = await response.json();
        setProducts(data.data.map((product: { title: string }) => product.title));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsProductsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchSector = async () => {
      if (sectorId) {
        try {
          setIsLoading(true);
          const response = await fetch(`/api/admin/sector/byid?id=${sectorId}`);
          const data = await response.json();

          // Wait for products to load before setting sector data
          if (!isProductsLoading) {
            setValue("title", data.data.title);
            setValue("description", data.data.description);
            setValue("image", data.data.image);
            setValue("applications", data.data.applications);
            setValue("icon", data.data.icon);
            setValue("bannerImage", data.data.bannerImage);
            setValue("shortDescription", data.data.shortDescription);
          }
        } catch (error) {
          console.error("Error fetching sector:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchSector();
  }, [sectorId, setValue, isProductsLoading]); // Add isProductsLoading to dependencies

  const onSubmit = async (data: SectorFormData) => {
    try {
      setIsLoading(true);
      if (sectorId) {
        const response = await fetch(`/api/admin/sector?id=${sectorId}`, {
          method: "PATCH",
          body: JSON.stringify(data),
        });
        const res = await response.json();
        console.log(res);
        router.push("/admin/sectors");
      } else {
        const response = await fetch(`/api/admin/sector`, {
          method: "POST",
          body: JSON.stringify(data),
        });
        const res = await response.json();
        console.log(res);
        router.push("/admin/sectors");
      }
    } catch (error) {
      console.error("Error submitting sector:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddApplication = () => {
    append({ title: "", description: "", image: "", product: "",bannerImage:"" });
  };

  const handleRemoveApplication = (index: number) => {
    remove(index);
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
            <Label className="text-sm font-medium">Short Description</Label>
            <Textarea
              {...register("shortDescription", { required: "Short Description is required" })}
              className="w-full p-2 border rounded-md"
              placeholder="Enter sector short description"
              rows={4}
            />
            {errors.shortDescription && <p className="text-red-500 text-sm">{errors.shortDescription.message}</p>}
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">Image</Label>
            <Controller
              name="image"
              control={control}
              render={({ field }) => (
                <ImageUploader
                  value={field.value}
                  onChange={(url) => {
                    field.onChange(url);
                    setValue("image", url);
                  }}
                />
              )}
            />
            {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">Icon</Label>
            <Controller
              name="icon"
              control={control}
              render={({ field }) => (
                <ImageUploader
                  value={field.value}
                  onChange={(url) => {
                    field.onChange(url);
                    setValue("icon", url);
                  }}
                />
              )}
            />
            {errors.icon && <p className="text-red-500 text-sm">{errors.icon.message}</p>}
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">Banner Image</Label>
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
            {errors.bannerImage && <p className="text-red-500 text-sm">{errors.bannerImage.message}</p>}
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Applications</h2>
              <Button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={handleAddApplication}
              >
                Add Application
              </Button>
            </div>

            {fields.map((field, index) => (
              <Card key={field.id} className="p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Application {index + 1}</h3>
                  <Button type="button" variant="destructive" onClick={() => handleRemoveApplication(index)}>
                    Remove
                  </Button>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Title</Label>
                  <Input
                    {...register(`applications.${index}.title`, {
                      required: "Title is required",
                    })}
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter application title"
                  />
                  {errors.applications?.[index]?.title && (
                    <p className="text-red-500 text-sm">{errors.applications[index]?.title?.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Description</Label>
                  <Controller
                    name={`applications.${index}.description`}
                    control={control}
                    rules={{ required: "Description is required" }}
                    render={({ field }) => (
                      <ReactQuill theme="snow" value={field.value} onChange={field.onChange} className="mt-1" />
                    )}
                  />
                  {errors.applications?.[index]?.description && (
                    <p className="text-red-500 text-sm">{errors.applications[index]?.description?.message}</p>
                  )}
                </div>

                <div className="space-y-2 grid grid-cols-2">
                  <div className="w-full">
                    <Label className="text-sm font-medium">Image</Label>
                    <ImageUploader className="w-full"
                      value={getValues(`applications.${index}.image`)}
                      onChange={(url) => setValue(`applications.${index}.image`, url)}
                    />
                    {errors.applications?.[index]?.image && (
                      <p className="text-red-500 text-sm">{errors.applications[index]?.image?.message}</p>
                    )}
                  </div>

                  <div className="">
                    <Label className="text-sm font-medium">Banner Image</Label>
                    <ImageUploader className="w-full"
                      value={getValues(`applications.${index}.bannerImage`)}
                      onChange={(url) => setValue(`applications.${index}.bannerImage`, url)}
                    />
                    {errors.applications?.[index]?.image && (
                      <p className="text-red-500 text-sm">{errors.applications[index]?.image?.message}</p>
                    )}
                  </div>

                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Product</Label>
                  <select
                    {...register(`applications.${index}.product`, {
                      required: "Product is required",
                    })}
                    className="w-full p-2 border rounded-md"
                    disabled={isProductsLoading}
                  >
                    <option value="">Select a product</option>
                    {products.map((product) => (
                      <option
                        key={product}
                        value={product}
                        selected={getValues(`applications.${index}.product`) === product}
                      >
                        {product}
                      </option>
                    ))}
                  </select>
                  {isProductsLoading && <p className="text-gray-500 text-sm">Loading products...</p>}
                  {errors.applications?.[index]?.product && (
                    <p className="text-red-500 text-sm">{errors.applications[index]?.product?.message}</p>
                  )}
                </div>
              </Card>
            ))}
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
