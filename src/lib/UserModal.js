import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  fullname: String,
  email: { type: String, unique: true },
});

if (mongoose.models.Users) {
  mongoose.models.Users.schema = userSchema;
}
export const UserModal =
  mongoose.models.Users || mongoose.model("Users", userSchema);
