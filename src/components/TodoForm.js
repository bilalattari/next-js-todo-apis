"use client";
import { addTodo } from "@/actions/todos";
import { useEffect, useRef, useState } from "react";
export default function TodoForm() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let res = await fetch(`/api/users`);
    res = await res.json();
    console.log("users=>", res);
    setUsers(res.users);
  };

  const formRef = useRef(null);

  const handleAddTodo = async (formData) => {
    const obj = { task: formData.get("task") };
    if (obj.task) {
      // console.log({
      //   task : obj.task,
      //   isCompleted : false,
      //   user : formData.get('user')
      // })
      await addTodo({
        task : obj.task,
        isCompleted : false,
        user : formData.get('user')
      });
      formRef?.current?.reset();
    } else {
      alert("Plz add task");
    }
  };

  return (
    <form action={handleAddTodo} ref={formRef} className="flex container mx-auto">
      <input
        placeholder="Todo"
        name="task"
        className="border  p-2 text-2xl flex flex-grow "
      />
      <select
        className="border  p-2 text-2xl flex flex-grow"
        placeholder={"Select User"}
        name="user"
      >
        {users.map((data) => (
          <option key={data._id} value={data._id}>
            {data.fullname}
          </option>
        ))}
      </select>
      <input
        type="submit"
        value={"Submit"}
        className="bg-blue-200 cursor-pointer rounded p-2 px-3 ml-2"
      />
    </form>
  );
}
