import { useState } from "react";
import toast from "react-hot-toast";

export default function TodoSection({ todos }) {
  const [todoList, setTodoList] = useState(todos);

  const handleWish = (id) => {
    toast.success("Wish sent!");
  };

  const handleRemind = (id) => {
    setTodoList((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: "reminded" } : t))
    );
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 md:col-span-2 lg:col-span-3">
      <h2 className="text-lg font-semibold mb-4">To-Do's</h2>
      <ul>
        {todoList.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-2 border-b"
          >
            <span
              className={`${
                todo.status === "reminded" ? "text-gray-400" : "text-gray-800"
              }`}
            >
              {todo.message}
            </span>
            <div className="space-x-2">
              <button
                className="bg-green-500 text-white px-3 py-1 rounded"
                onClick={() => handleWish(todo.id)}
              >
                Wish
              </button>
              <button
                className={`${
                  todo.status === "reminded"
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-500"
                } text-white px-3 py-1 rounded`}
                onClick={() => handleRemind(todo.id)}
                disabled={todo.status === "reminded"}
              >
                Remind
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
