"use client";

import { deleteTodo, updateTodo } from "@/actions/todos";

export default function ListItem({ todo }) {
  const handleOnClickItem = async () => {
    await updateTodo(todo._id);
  };

  const handleOnDelItem = async () => {
    await deleteTodo(todo._id);
  };
  return (
    <div className="flex border p-2 my-1 w-2/3 mx-auto">
      <h1
        onClick={handleOnClickItem}
        className={` cursor-pointer
      font-semibold w-full text-xl ${todo?.isCompleted && "line-through"}`}
      >
        {todo.task}
      </h1>

      <button
        onClick={handleOnDelItem}
        className="bg-red-200 rounded p-2 px-3 cursor-pointer"
      >
        Del
      </button>
    </div>
  );
}
