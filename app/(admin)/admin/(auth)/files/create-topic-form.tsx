"use client";

import { useEffect, useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { ImageUploader } from "@/app/components/ui/image-uploader";
import { FileUploader } from "@/app/components/ui/file-uploader";
import { Plus, Minus } from "lucide-react";
import { useRouter } from "next/navigation";
interface FileData {
  file: string;
  thumbnail: string;
  name: string;
}

interface TopicType {
  title: string;
  files: FileData[];
}

interface CreateTopicFormProps {
  topicId?: string;
}

export function CreateTopicForm({ topicId }: CreateTopicFormProps) {
  const [title, setTitle] = useState("");
  const [types, setTypes] = useState<TopicType[]>([{ title: "", files: [] }]);
  const router = useRouter();
  const [fetching, setFetching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (topicId) {
      fetchTopicData();
    }
  }, [topicId]);

  const fetchTopicData = async () => {
    try {
      setFetching(true);
      const response = await fetch(`/api/admin/files/byid?id=${topicId}`);
      const data = await response.json();
      setTitle(data.data.title);
      setTypes(data.data.types);
    } catch (error) {
      console.error("Error fetching topic data:", error);
    } finally {
      setFetching(false);
    }
  };

  const addType = () => {
    setTypes([...types, { title: "", files: [] }]);
  };

  const removeType = (index: number) => {
    setTypes(types.filter((_, i) => i !== index));
  };

  const updateTypeTitle = (index: number, title: string) => {
    const newTypes = [...types];
    newTypes[index].title = title;
    setTypes(newTypes);
  };

  const addFile = (typeIndex: number) => {
    const newTypes = [...types];
    newTypes[typeIndex].files.push({ file: "", thumbnail: "", name: "" });
    setTypes(newTypes);
  };

  const removeFile = (typeIndex: number, fileIndex: number) => {
    const newTypes = [...types];
    newTypes[typeIndex].files.splice(fileIndex, 1);
    setTypes(newTypes);
  };

  const updateFile = (typeIndex: number, fileIndex: number, data: Partial<FileData>) => {
    const newTypes = [...types];
    newTypes[typeIndex].files[fileIndex] = {
      ...newTypes[typeIndex].files[fileIndex],
      ...data,
    };
    setTypes(newTypes);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("handle submit");

    try {
      setIsLoading(true);
      if (topicId) {
        const response = await fetch(`/api/admin/files?id=${topicId}`, {
          method: "PATCH",
          body: JSON.stringify({ title, types }),
        });
        await response.json();
        router.push("/admin/files");
      } else {
        const response = await fetch(`/api/admin/files`, {
          method: "POST",
          body: JSON.stringify({ title, types }),
        });
        await response.json();
        router.push("/admin/files");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (fetching) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6">
      <div>
        <label className="block text-sm font-medium mb-2">Topic Title</label>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter topic title" required />
      </div>

      <div className="space-y-4">
        {types?.map((type, typeIndex) => (
          <Card key={typeIndex}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex-1 mr-4">
                  <Input
                    value={type.title}
                    onChange={(e) => updateTypeTitle(typeIndex, e.target.value)}
                    placeholder="Enter type title"
                    required
                  />
                </div>
                {typeIndex > 0 && (
                  <Button type="button" variant="destructive" size="icon" onClick={() => removeType(typeIndex)}>
                    <Minus className="h-4 w-4" />
                  </Button>
                )}
              </div>

              <div className="space-y-4">
                {type?.files?.map((file, fileIndex) => (
                  <div key={fileIndex} className="border rounded-lg p-4 space-y-4">
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-medium">File {fileIndex + 1}</h4>
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        onClick={() => removeFile(typeIndex, fileIndex)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    </div>

                    <Input
                      placeholder="File name"
                      value={file.name}
                      onChange={(e) => updateFile(typeIndex, fileIndex, { name: e.target.value })}
                      className="mb-2"
                    />

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">File</label>
                        <FileUploader
                          value={file.file}
                          onChange={(url) => updateFile(typeIndex, fileIndex, { file: url })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Thumbnail</label>
                        <ImageUploader
                          value={file.thumbnail}
                          onChange={(url) => updateFile(typeIndex, fileIndex, { thumbnail: url })}
                        />
                      </div>
                    </div>
                  </div>
                ))}

                <Button type="button" variant="outline" onClick={() => addFile(typeIndex)} className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Add File
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex space-x-4">
        <Button type="button" variant="outline" onClick={addType}>
          <Plus className="h-4 w-4 mr-2" />
          Add Type
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Saving..." : topicId ? "Update Topic" : "Create Topic"}
        </Button>
      </div>
    </form>
  );
}
