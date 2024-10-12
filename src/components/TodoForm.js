"use client";
import { addTodo } from "@/actions/todos";
import { useRef } from "react";
export default function TodoForm() {
  const formRef = useRef(null);

  const handleAddTodo = async (formData) => {
    const obj = { task: formData.get("task") };
    if(obj.task){
        await addTodo(obj);
        formRef?.current?.reset();
    }else{
        alert('Plz add task')
    }
  };

  return (
    <form action={handleAddTodo} ref={formRef} className="flex w-2/3 mx-auto">
      <input
        placeholder="Todo"
        name="task"
        className="border  p-2 text-2xl flex flex-grow "
      />
      <input
        type="submit"
        value={"Submit"}
        className="bg-blue-200 cursor-pointer rounded p-2 px-3 ml-2"
      />
    </form>
  );
}
