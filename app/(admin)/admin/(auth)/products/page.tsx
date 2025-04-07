"use client";
import { Card } from "@/app/components/ui/card";
import { CardContent } from "@/app/components/ui/card";
import { Button } from "@/components/ui/button";
import { PencilIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AddFinishDialog from "./components/AddFinishDialog";
import Image from "next/image";
import DeleteProductDialog from "./components/DeleteProductDialog";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import { useForm } from "react-hook-form";
type Specification = {
  name: string;
  value: string;
};

type Product = {
  _id: string;
  title: string;
  subtitle: string;
  sector: string;
  specifications: Specification[];
};

type Finish = {
  _id: string;
  name: string;
  image: {
    url: string;
    alt: string;
  };
};

type Meta = {
  metaTitle: string;
  metaDescription: string;
};

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [finishes, setFinishes] = useState<Finish[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { register, getValues, setValue } = useForm<Meta>();

  useEffect(() => {
    const fetchFinishes = async () => {
      const response = await fetch("/api/admin/finish");
      const data = await response.json();
      setFinishes(data.data);
    };
    fetchFinishes();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/admin/products");
      const data = await response.json();
      setProducts(data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchMeta = async () => {
    try {
      const response = await fetch("/api/admin/products/meta");
      if (response.ok) {
        const data = await response.json();
        setValue("metaTitle", data.productMeta.metaTitle);
        setValue("metaDescription", data.productMeta.metaDescription);
      } else {
        console.log("Error fetching meta");
      }
    } catch (error) {
      console.log("Error fetching meta:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchMeta();
  }, []);

  const handleClickNewProduct = () => {
    router.push("/admin/products/create");
  };

  const handleEditProduct = (productId: string) => {
    router.push(`/admin/products/${productId}/edit`);
  };

  const handleSaveMeta = async () => {
    try {
      const formData = new FormData();
      formData.append("metaTitle", getValues("metaTitle"));
      formData.append("metaDescription", getValues("metaDescription"));
      const response = await fetch("/api/admin/products/meta", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        alert(data.message);
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.error("Error saving meta:", error);
    }
  };

  console.log(products);
  if (isLoading) {
    return (
      <div className="p-6 flex justify-center items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Products</h1>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
          <p className="text-gray-500 mb-4">Get started by creating your first product</p>
          <Button className="bg-primary text-white" onClick={handleClickNewProduct}>
            <span className="mr-2">+</span>
            Add Product
          </Button>
        </div>
      ) : (
        <div>
          <div className="flex gap-2 flex-col border-dashed border-2 border-gray-300 p-4 rounded-lg">
            <div className="flex justify-between">
              <h3>Meta Section</h3>
              <Button className="bg-blue-500 text-white w-fit" type="button" onClick={handleSaveMeta}>
                Save
              </Button>
            </div>
            <div>
              <Label htmlFor="metaTitle">Meta Title</Label>
              <Input {...register("metaTitle")} />
            </div>
            <div>
              <Label htmlFor="metaDescription">Meta Description</Label>
              <Input {...register("metaDescription")} />
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-4">
            <div className="flex justify-end">
              <Button className="bg-primary text-white" onClick={handleClickNewProduct}>
                <span className="mr-2">+</span>
                Add Product
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <Card key={index} className="group">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h2 className="text-xl font-semibold">{product.title}</h2>
                        <p className="text-sm text-gray-500 mt-1">{product.subtitle}</p>
                        {product.sector && (
                          <div className="mt-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                              {product.sector}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-gray-500 hover:text-primary hover:bg-primary/10"
                          onClick={() => handleEditProduct(product._id)}
                        >
                          <PencilIcon className="h-4 w-4" />
                        </Button>
                        <DeleteProductDialog productId={product._id} onDelete={fetchProducts} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center my-6">
        <h1 className="text-3xl font-bold">Finishes</h1>
        <AddFinishDialog />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {finishes.map((finish, index) => (
          <Card key={index} className="overflow-hidden group">
            <div className="aspect-video relative">
              <Image src={finish.image.url} alt={finish.image.alt} className="object-cover w-full h-full" fill />
            </div>
            <CardContent className="p-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">{finish.name}</h2>
              <AddFinishDialog finishId={finish._id} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
