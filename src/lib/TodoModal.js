import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema({
  task: { type: String, unique: true },
  isCompleted: Boolean,
  user: { type: mongoose.Types.ObjectId, ref: "Users" },
});
if (mongoose.models.Todos) {
  console.log('schema update')
  mongoose.models.Todos.schema = todoSchema;
}
export const TodoModal =
  mongoose.models.Todos || mongoose.model("Todos", todoSchema);
