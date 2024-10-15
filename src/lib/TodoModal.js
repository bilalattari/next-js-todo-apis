import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema({
  task: String,
  isCompleted: Boolean,
});

export const TodoModal =
  mongoose.models.Todos || mongoose.model("todos", todoSchema);
