import { UserModal } from "@/lib/UserModal";
import { connectDB } from "@/lib/dbConnect";

export async function GET(request) {
  await connectDB();
  const users = await UserModal.find(); // it return arrays
  return Response.json({
    users,
    msg: "Users Fetched Successfully",
  });
}

export async function POST(request) {
  try {
    let obj = await request.json();
    const newUser = await new UserModal({
      ...obj,
    });
    await newUser.save();

    return Response.json({
      user: newUser,
      msg: "User Added Successfully",
    });
  } catch (err) {
    return Response.json(
      {
        msg: "Something went wrong",
      },
      { status: 400 }
    );
  }
}
