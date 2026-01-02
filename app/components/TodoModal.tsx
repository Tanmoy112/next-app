"use client";

import { useEffect, useState } from "react";
import { Todo } from "../types/todo";

interface Props {
  id: number;
  onClose: () => void;
}

export default function TodoModal({ id, onClose }: Props) {
  const [todo, setTodo] = useState<Todo | null>(null);

  useEffect(() => {
    async function fetchTodo() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      const data: Todo = await res.json();
      setTodo(data);
    }

    fetchTodo();
  }, [id]);

  if (!todo) return null;

  return (
    <div className="overlay">
      <div className="modal">
        <h2>Todo Details</h2>
        <p>
          <b>ID:</b> {todo.id}
        </p>
        <p>
          <b>User ID:</b> {todo.userId}
        </p>
        <p>
          <b>Title:</b> {todo.title}
        </p>
        <p>
          <b>Status:</b> {todo.completed ? "Completed ✅" : "Pending ❌"}
        </p>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
