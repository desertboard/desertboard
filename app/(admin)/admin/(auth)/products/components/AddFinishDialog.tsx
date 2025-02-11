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
import { useState } from "react";

interface Finish {
  name: string;
  image: string;
  description: string;
}

export default function AddFinishDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState<string>("");
  const { register, handleSubmit } = useForm<Finish>({
    defaultValues: {
      name: "",
      image: "",
      description: "",
    },
  });

  const onSubmit = async (data: Finish) => {
    const newData = {
      name: data.name,
      image: image,
      description: data.description,
    };
    setIsLoading(true);
    try {
      const response = await fetch("/api/admin/finish", {
        method: "POST",
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
          <span className="mr-2">+</span>
          Add Finish
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Finish</DialogTitle>
        </DialogHeader>
        <DialogDescription>Add a new finish to the database.</DialogDescription>
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
              <Label htmlFor="description">Description</Label>
              <Input id="description" {...register("description")} />
            </div>
          </div>
          <Button className="my-2" type="submit" disabled={isLoading}>
            {isLoading ? "Adding..." : "Add Finish"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
