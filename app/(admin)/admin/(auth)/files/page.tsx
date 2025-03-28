"use client";

import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Edit } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DeleteTopicDialog from "./components/DeleteTopicDialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

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
  const { register, setValue, getValues } = useForm();

  const fetchTopics = async () => {
    setIsLoading(true);
    const response = await fetch("/api/admin/files");
    const data = await response.json();
    setTopics(data.data);
    setIsLoading(false);
  };

  const fetchMeta = async () => {
    try {
      const response = await fetch("/api/admin/files/meta");
      if(response.ok){
        const data = await response.json();
        setValue("metaTitle", data.data[0].metaTitle);
        setValue("metaDescription", data.data[0].metaDescription);
      }else{
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log("Error fetching meta:", error);
    }
  }

  useEffect(() => {
    fetchTopics();
    fetchMeta();
  }, []);

  const handleClickAddTopic = () => {
    router.push("/admin/files/create");
  };

  const handleEditTopic = (topicId: string) => {
    router.push(`/admin/files/${topicId}`);
  };

  const handleSaveMeta = async () => {
    try {
      const formData = new FormData();
      formData.append("metaTitle", getValues("metaTitle"));
      formData.append("metaDescription", getValues("metaDescription"));
      const response = await fetch("/api/admin/files/meta", {
        method: "POST",
        body: formData,
      });
      if(response.ok){
        const data = await response.json();
        alert(data.message);
      }else{
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.error("Error saving meta:", error);
      alert("Failed to save meta. Please try again.");
    }
  }

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
      </div>

      {topics?.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No topics found</h3>
          <p className="text-gray-500 mb-4">Get started by creating your first file topic</p>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          
          <div className="flex gap-2 flex-col border-dashed border-2 border-gray-300 p-4 rounded-lg">
            <div className="flex justify-between">
              <h3>Meta Section</h3>
              <Button className="bg-blue-500 text-white w-fit" type="button" onClick={handleSaveMeta}>Save</Button>
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

          <div className="flex flex-col gap-5">
            <div className="flex justify-end">
          <Button className="bg-primary text-white" onClick={handleClickAddTopic}>
            <span className="mr-2">+</span>
            Add File Topic
          </Button>
          </div>
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
          </div>
        </div>
      )}
    </div>
  );
}
