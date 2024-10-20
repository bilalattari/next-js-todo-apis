import { TodoModal } from "@/lib/TodoModal";
import { connectDB } from "@/lib/dbConnect";

export async function GET(request) {
  await connectDB();
  const todos = await TodoModal.find().populate("user", "fullname"); 
  return Response.json({
    todos,
    msg: "Todos Fetched Successfully",
  });
}

export async function POST(request) {
  try {
    let todo = await request.json();
    const newTodo = await new TodoModal({
      ...todo,
    });
    await newTodo.save();

    return Response.json({
      todo: newTodo,
      msg: "Todos Added Successfully",
    });
  } catch (err) {
    console.log("error=>", err);
    return Response.error(
      {
        msg: "Something went wrong",
      },
      { status: 400 }
    );
  }
}

export async function PUT(request) {
  let obj = await request.json();
  const singleTodo = await TodoModal.findById(obj.id);
  let todo = await TodoModal.updateOne(
    { _id: obj.id },
    { isCompleted: !singleTodo.isCompleted }
  );

  return Response.json({
    todo,
    msg: "Todos Updated Successfully",
  });
}

export async function DELETE(request) {
  let obj = await request.json();
  await TodoModal.deleteOne({ _id: obj.id });
  return Response.json({
    msg: "Todos Deleted Successfully",
  });
}
