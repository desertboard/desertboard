import { Card } from "@/app/components/ui/card";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm, useFieldArray } from "react-hook-form";
import dynamic from "next/dynamic";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import "react-quill/dist/quill.snow.css";
import Image from "next/image";
import { ImageUploader } from "@/app/components/ui/image-uploader";
import { Textarea } from "@/components/ui/textarea";
import { formatLinkForSectors } from "@/app/helpers/formatLinks";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import {closestCorners, DndContext, DragEndEvent, UniqueIdentifier} from '@dnd-kit/core'
import {SortableContext, verticalListSortingStrategy} from '@dnd-kit/sortable'
import ApplicationCard from "./applicationCard";

interface Application {
  title: string;
  description: string;
  image: string;
  product: string;
  bannerImage: string;
  gallery: string[]
  shortDescription:string;
  metaTitle:string;
  metaDescription:string;
  bannerImageAlt:string;
  imageAlt:string;
  slug:string;
}

interface SectorFormData {
  title: string;
  description: string;
  image: string;
  applications: Application[];
  icon: string;
  bannerImage: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  imageAlt:string;
  iconAlt:string;
  bannerImageAlt:string;
  slug:string;
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
  const [reorderMode,setReorderMode] = useState(false)

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    control,
    watch,
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

  const { fields, append, remove,move } = useFieldArray({
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
            setValue("metaTitle", data.data.metaTitle);
            setValue("metaDescription", data.data.metaDescription);
            setValue("imageAlt", data.data.imageAlt);
            setValue("iconAlt", data.data.iconAlt);
            setValue("bannerImageAlt", data.data.bannerImageAlt);
            setValue("slug",data.data.slug)
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
      console.log("applications",data.applications)
      
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
    append({ title: "", description: "", image: "", product: "", bannerImage: "", gallery: [], shortDescription:"", metaTitle:"", metaDescription:"",imageAlt:"",bannerImageAlt:"",slug:"" });
  };

  const handleRemoveApplication = (index: number) => {
    remove(index);
  };



  const handleApplicationImageUpload = (index: number, uploadedUrl: string) => {

    console.log("index",index)
    // Ensure the gallery exists for the specific application
    const currentGallery = [...(getValues(`applications.${index}.gallery`) || [])];
  
    // Add new image to that specific application's gallery
    currentGallery.push(uploadedUrl);

    console.log("currentGallery",currentGallery)
  
    // Set the new gallery state only for that specific application
    setValue(`applications.${index}.gallery`, currentGallery, { shouldValidate: true, shouldDirty: true });
  };
  

  const handleRemoveApplicationImage = (appIndex: number, imgIndex: number) => {
    const currentGallery = [...(getValues(`applications.${appIndex}.gallery`) || [])];
  
    // Remove the selected image from the correct application
    currentGallery.splice(imgIndex, 1);
  
    setValue(`applications.${appIndex}.gallery`, currentGallery, { shouldValidate: true, shouldDirty: true });
  };

  useEffect(() => {
    if (!sectorId) {
      setValue("slug", formatLinkForSectors(watch("title")));
    }
  }, [sectorId, watch("title")]);


  const getTaskPos = (id: UniqueIdentifier) => fields.findIndex((item:{id:string})=>( item.id == id))



  const handleDragEnd = (event: DragEndEvent) => {
      const {active,over} = event

      

      if(!over || active.id == over.id) return;
        const originalPos = getTaskPos(active.id)
        const newPos = getTaskPos(over.id);
        move(originalPos, newPos);
  }


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
            <Label className="text-sm font-medium">Slug</Label>
            <Input id="slug" {...register("slug", {
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9-]+$/,
                    message: "Only letters, numbers, and hyphens are allowed"
                  }
                })
              }/>
            {errors.slug && <p className="text-red-500 text-sm">{errors.slug.message}</p>}
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
            <Label className="text-sm font-medium">Meta Title</Label>
            <Input
              {...register("metaTitle")}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">Meta Description</Label>
            <Input
              {...register("metaDescription")}
              className="w-full p-2 border rounded-md"
            />
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

          <div>
            <Label>Image Alt</Label>
            <Input {...register("imageAlt")}/>
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

          <div>
            <Label>Icon Alt</Label>
            <Input {...register("iconAlt")}/>
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

          <div>
            <Label>Banner Image Alt</Label>
            <Input {...register("bannerImageAlt")}/>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Applications</h2>
              <div className="flex gap-5">
              {!reorderMode && <Button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={handleAddApplication}
              >
                Add Application
              </Button>}
              <Button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={()=>setReorderMode(!reorderMode)}
              >
                {reorderMode ? "Confirm" : "Reorder"}
              </Button>
              </div>
            </div>

              {reorderMode && <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
              <div className='flex flex-col gap-3'>
                <SortableContext items={fields} strategy={verticalListSortingStrategy}>
                  {fields.map((field,index)=>(
                    <ApplicationCard title={field.title} id={field.id} key={index}/>
                  ))}
                </SortableContext>
              </div>
                </DndContext>}


            {!reorderMode && fields.map((field, index) => (
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
                  <Label className="text-sm font-medium">Slug</Label>
                  <Input
                    {...register(`applications.${index}.slug`, {
                      required: true,
                      pattern: {
                        value: /^[a-zA-Z0-9-]+$/,
                          message: "Only letters, numbers, and hyphens are allowed"
                        }
                    })}
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter application slug"
                  />
                  {errors.applications?.[index]?.slug && (
                    <p className="text-red-500 text-sm">{errors.applications[index]?.slug?.message}</p>
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

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Short description</Label>
                  <Controller
                    name={`applications.${index}.shortDescription`}
                    control={control}
                    rules={{ required: "Short description is required" }}
                    render={({ field }) => (
                      <ReactQuill theme="snow" value={field.value} onChange={field.onChange} className="mt-1" />
                    )}
                  />
                  {errors.applications?.[index]?.shortDescription && (
                    <p className="text-red-500 text-sm">{errors.applications[index]?.shortDescription?.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Meta Title</Label>
                  <Input
                    {...register(`applications.${index}.metaTitle`)}
                    className="w-full p-2 border rounded-md"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">Meta Description</Label>
                  <Input
                    {...register(`applications.${index}.metaDescription`)}
                    className="w-full p-2 border rounded-md"
                  />
                </div>

                <div className="space-y-2 grid grid-cols-2">
                  <div className="flex flex-col gap-2">
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
                  <div className="w-3/4">
                    <Label>Image Alt</Label>
                    <Input {...register(`applications.${index}.imageAlt`)}/>
                  </div>
                  </div>

                    <div>
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
                  <div className="w-3/4">
                    <Label>Banner Image Alt</Label>
                    <Input {...register(`applications.${index}.bannerImageAlt`)}/>
                  </div>
                  </div>

                </div>

                <div>
                  <Label className="block text-sm font-medium text-gray-700">Gallery</Label>
                  <div className="mt-2">
                    <ImageUploader onChange={(url) => handleApplicationImageUpload(index, url)} deleteAfterUpload={true} />
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    {getValues(`applications.${index}.gallery`)?.map((url, imgIndex) => (
                      <div key={imgIndex} className="relative h-40">
                        <Image
                          src={url}
                          alt={`Uploaded image ${imgIndex + 1}`}
                          className="h-full w-full object-cover rounded-lg"
                          width={100}
                          height={100}
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveApplicationImage(index, imgIndex)}
                          className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                          ×
                        </button>
                      </div>
                    ))}
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

                {/* <div className="space-y-2">
                  <Label className="text-sm font-medium">Title</Label>
                  <Input
                    {...register(`applications.${index}.productSlug`, {
                      required: "Product Slug is required",
                    })}
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter application title"
                  />
                  
                </div> */}

              </Card>
            ))}
          </div>

          {!reorderMode && <Button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
            {isLoading ? "Saving..." : sectorId ? "Update Sector" : "Create Sector"}
          </Button>}
        </form>
      </Card>
    </div>
  );
};

export default SectorFormPage;
