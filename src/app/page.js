import TodoForm from "@/components/TodoForm";
import ListItem from "@/components/TodoListItem";

export default async function Home() {
  let res = await fetch("http://localhost:3000/api/todos", {
    cache: "no-cache",
  });
  res = await res.json();
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl text-center my-5">Todo App</h1>

      <TodoForm />
      {res.todos.map((data) => (
        <ListItem todo={data} key={data._id} />
      ))}
    </div>
  );
}
