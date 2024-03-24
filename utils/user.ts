"use server";

import dbConnect from "@/lib/dbConnect";
import { User } from "@/models/User";

export const getUser = async (email: string) => {
  await dbConnect();
  return await User.findOne({ email });
};

export const createUser = async (
  email: string,
  name: string,
  image: string
) => {
  await dbConnect();
  const user = new User({ email, name, image });
  return await user.save();
};
