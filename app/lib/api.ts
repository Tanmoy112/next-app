import { Todo } from "../types/todo";

export async function getTodos(): Promise<Todo[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    next: { revalidate: 60 }, // ISR
  });

  if (!res.ok) throw new Error("Failed to fetch todos");
  return res.json();
}

export async function getTodoById(id: string): Promise<Todo> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    cache: "no-store", // dynamic
  });

  if (!res.ok) throw new Error("Todo not found");
  return res.json();
}
