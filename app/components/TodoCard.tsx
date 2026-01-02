"use client";

import { useRouter } from "next/navigation";
import { Todo } from "../types/todo";

interface Props {
  todo: Todo;
}

export default function TodoCard({ todo }: Props) {
  const router = useRouter();

  return (
    <div className="card" onClick={() => router.push(`/todos/${todo.id}`)}>
      <h3>{todo.title}</h3>
      <p>User ID: {todo.userId}</p>
      <p>{todo.completed ? "✅ Completed" : "❌ Pending"}</p>
    </div>
  );
}
