import { getTodoById } from "../../lib/api";

interface Props {
  params: { id: string };
}

export default async function TodoDetailsPage({ params }: Props) {
  const getId= await params
  const todo = await getTodoById(getId.id);
  return (
    <div className="container">
      <h1>Todo Details</h1>

      <div className="card">
        <p><b>ID:</b> {todo.id}</p>
        <p><b>User ID:</b> {todo.userId}</p>
        <p><b>Title:</b> {todo.title}</p>
        <p>
          <b>Status:</b>{" "}
          {todo.completed ? "Completed ✅" : "Pending ❌"}
        </p>
      </div>
    </div>
  );
}
