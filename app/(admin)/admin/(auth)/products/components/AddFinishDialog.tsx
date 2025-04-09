import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { ImageUploader } from "@/app/components/ui/image-uploader";
import { useState, useEffect } from "react";
import { PencilIcon, PlusIcon } from "lucide-react";

interface Finish {
  name: string;
  image: string;
  description: string;
  imageAlt:string;
}

interface AddFinishDialogProps {
  finishId?: string;
}

export default function AddFinishDialog({ finishId }: AddFinishDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [image, setImage] = useState<string>("");
  const { register, handleSubmit, setValue } = useForm<Finish>({
    defaultValues: {
      name: "",
      image: "",
      description: "",
      imageAlt:""
    },
  });

  const fetchFinish = async () => {
    setIsFetching(true);
    try {
      const response = await fetch(`/api/admin/finish/byid?id=${finishId}`);
      const responseData = await response.json();
      setValue("name", responseData.name);
      setValue("image", responseData.image);
      setValue("description", responseData.description);
      setValue("imageAlt", responseData.imageAlt);
      setImage(responseData.image);
    } catch (error) {
      console.error(error);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    if (finishId) {
      fetchFinish();
    }
  }, [finishId]);

  const onSubmit = async (data: Finish) => {
    const newData = {
      name: data.name,
      image: image,
      description: data.description,
      imageAlt:data.imageAlt
    };
    setIsLoading(true);
    try {
      const response = await fetch(`/api/admin/finish${finishId ? `/byid?id=${finishId}` : ""}`, {
        method: finishId ? "PATCH" : "POST",
        body: JSON.stringify(newData),
      });
      const responseData = await response.json();
      if (responseData.success) {
        setIsLoading(false);
        setImage("");
        setIsOpen(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <Button className="bg-primary text-white">
          <span>{finishId ? <PencilIcon /> : <PlusIcon />}</span>
          {finishId ? "" : "Add Finish"}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{finishId ? "Edit Finish" : "Add Finish"}</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          {finishId ? "Edit the finish details" : "Add a new finish to the database."}
        </DialogDescription>
        {isFetching && <p>Loading...</p>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" {...register("name")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image">Image</Label>
              <ImageUploader value={image} onChange={(url) => setImage(url)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Image Alt</Label>
              <Input id="name" {...register("imageAlt")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Input id="description" {...register("description")} />
            </div>
          </div>
          <Button className="my-2" type="submit" disabled={isLoading}>
            {isLoading ? "Adding..." : finishId ? "Edit Finish" : "Add Finish"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
