import { CreateTopicForm } from "../create-topic-form";

export default function CreateTopicPage() {
  return (
    <div>
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold">Create New Topic</h1>
      </div>
      <CreateTopicForm />
    </div>
  );
}
