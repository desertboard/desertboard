"use client";

import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Edit } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DeleteTopicDialog from "./components/DeleteTopicDialog";

type FileType = {
  _id: string;
  name: string;
  file: string;
  thumbnail: string;
};

type TopicType = {
  _id: string;
  title: string;
  files: FileType[];
};

type Topic = {
  _id: string;
  title: string;
  types: TopicType[];
};

export default function FilesPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [topics, setTopics] = useState<Topic[]>([]);
  const router = useRouter();

  const fetchTopics = async () => {
    setIsLoading(true);
    const response = await fetch("/api/admin/files");
    const data = await response.json();
    setTopics(data.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTopics();
  }, []);

  const handleClickAddTopic = () => {
    router.push("/admin/files/create");
  };

  const handleEditTopic = (topicId: string) => {
    router.push(`/admin/files/${topicId}`);
  };

  if (isLoading) {
    return (
      <div className="p-6 flex justify-center items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading files...</p>
        </div>
      </div>
    );
  }
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Files</h1>
        <Button className="bg-primary text-white" onClick={handleClickAddTopic}>
          <span className="mr-2">+</span>
          Add File Topic
        </Button>
      </div>

      {topics?.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No topics found</h3>
          <p className="text-gray-500 mb-4">Get started by creating your first file topic</p>
          <Button className="bg-primary text-white" onClick={handleClickAddTopic}>
            <span className="mr-2">+</span>
            Add File Topic
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics?.map((topic, index) => (
            <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-bold">{topic.title}</CardTitle>
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEditTopic(topic._id)}
                    className="h-8 w-8 text-blue-600 hover:text-blue-800"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <DeleteTopicDialog topicId={topic._id} onDelete={fetchTopics} />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  {topic.types.length} type{topic.types.length !== 1 ? "s" : ""}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
