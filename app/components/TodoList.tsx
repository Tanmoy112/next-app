"use client";

import { Todo } from "../types/todo";
import TodoCard from "./TodoCard";

interface Props {
  todos: Todo[];
}

export default function TodoList({ todos }: Props) {
  return (
    <div className="grid">
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
