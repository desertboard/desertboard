"use client";
import NewsForm from "../news-form";
import { useParams } from "next/navigation";

export default function EditNewsPage() {
  const { id } = useParams();
  return <NewsForm newsId={id as string} />;
}
