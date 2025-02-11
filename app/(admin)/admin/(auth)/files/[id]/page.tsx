"use client";

import { CreateTopicForm } from "../create-topic-form";
import { useParams } from "next/navigation";

export default function EditTopicPage() {
  const { id } = useParams();
  return (
    <div>
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold">Edit Topic</h1>
      </div>
      <CreateTopicForm topicId={id as string} />
    </div>
  );
}
