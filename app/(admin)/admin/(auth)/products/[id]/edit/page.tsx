"use client";
import ProductFormPage from "../../product-form";
import { useParams } from "next/navigation";

export default function EditProductPage() {
  const { id } = useParams();
  return <ProductFormPage productId={id as string} />;
}
