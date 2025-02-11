"use client";
import { Card } from "@/app/components/ui/card";
import { CardContent } from "@/app/components/ui/card";
import { Button } from "@/components/ui/button";
import { PencilIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AddFinishDialog from "./components/AddFinishDialog";
import Image from "next/image";
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
  image: string;
};

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [finishes, setFinishes] = useState<Finish[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchFinishes = async () => {
      const response = await fetch("/api/admin/finish");
      const data = await response.json();
      setFinishes(data.data);
    };
    fetchFinishes();
  }, []);

  useEffect(() => {
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
    fetchProducts();
  }, []);

  const handleClickNewProduct = () => {
    router.push("/admin/products/create");
  };

  const handleEditProduct = (productId: string) => {
    router.push(`/admin/products/${productId}/edit`);
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
        <Button className="bg-primary text-white" onClick={handleClickNewProduct}>
          <span className="mr-2">+</span>
          Add Product
        </Button>
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
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-gray-500 hover:text-primary hover:bg-primary/10"
                    onClick={() => handleEditProduct(product._id)}
                  >
                    <PencilIcon className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
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
              <Image src={finish.image} alt={finish.name} className="object-cover w-full h-full" fill />
            </div>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">{finish.name}</h2>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
