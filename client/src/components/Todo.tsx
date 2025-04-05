// File: components/TodoApp.tsx
"use client";

import { useState } from "react";
import { Check, Plus, Trash2 } from "lucide-react";

// Type definitions
type Todo = {
  id: string;
  text: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
};

type FilterType = "all" | "active" | "completed";

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    const todo: Todo = {
      id: Date.now().toString(),
      text: newTodo,
      completed: false,
      priority: "medium",
    };
    setTodos([...todos, todo]);
    setNewTodo("");
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const activeTodosCount = todos.filter(todo => !todo.completed).length;

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-4 border rounded-lg shadow">
      <h2 className="text-2xl font-bold text-center">My Tasks</h2>
      <p className="text-center text-sm text-gray-500 mb-4">
        Organize your day with this simple todo app
      </p>

      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          className="flex-1 p-2 border rounded"
          placeholder="Add a new task..."
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          onKeyDown={e => e.key === "Enter" && addTodo()}
        />
        <button
          onClick={addTodo}
          className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          <Plus size={16} />
        </button>
      </div>

      <div className="flex justify-between text-sm mb-4">
        {(["all", "active", "completed"] as FilterType[]).map(value => (
          <button
            key={value}
            onClick={() => setFilter(value)}
            className={`px-2 py-1 rounded ${
              filter === value ? "bg-blue-600 text-white" : "bg-gray-100"
            }`}
          >
            {value[0].toUpperCase() + value.slice(1)}
          </button>
        ))}
      </div>

      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />

      <div className="border-t mt-4 pt-2 text-sm text-gray-500 text-center">
        {activeTodosCount === 0
          ? "All tasks completed! 🎉"
          : `${activeTodosCount} task${
              activeTodosCount === 1 ? "" : "s"
            } remaining`}
      </div>
    </div>
  );
}

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

function TodoList({ todos, toggleTodo, deleteTodo }: TodoListProps) {
  if (todos.length === 0) {
    return <p className="text-center text-gray-400">No tasks found</p>;
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-600 border-red-200";
      case "medium":
        return "text-yellow-600 border-yellow-200";
      case "low":
        return "text-green-600 border-green-200";
      default:
        return "text-gray-600 border-gray-200";
    }
  };

  return (
    <ul className="space-y-2">
      {todos.map(todo => (
        <li
          key={todo.id}
          className="flex justify-between items-center p-2 border rounded hover:bg-gray-50"
        >
          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleTodo(todo.id)}
              className={`h-5 w-5 rounded-full border flex items-center justify-center ${
                todo.completed ? "bg-blue-600 text-white" : "border-blue-600"
              }`}
            >
              {todo.completed && <Check size={12} />}
            </button>
            <span
              className={todo.completed ? "line-through text-gray-400" : ""}
            >
              {todo.text}
            </span>
            <span
              className={`text-xs border px-2 py-0.5 rounded ${getPriorityColor(
                todo.priority
              )}`}
            >
              {todo.priority}
            </span>
          </div>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="text-gray-400 hover:text-red-500"
          >
            <Trash2 size={16} />
          </button>
        </li>
      ))}
    </ul>
  );
}
