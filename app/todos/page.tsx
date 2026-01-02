import { getTodos } from "../lib/api";
import TodoList from "../components/TodoList";

export default async function TodosPage() {
  const todos = await getTodos();

  return (
    <div className="container">
      <h1>Todos</h1>

      {/* Client boundary */}
      <TodoList todos={todos.slice(0, 10)} />
    </div>
  );
}
