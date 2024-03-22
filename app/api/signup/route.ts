import { NextResponse } from "next/server";
// import isEmail from "validator/lib/isEmail";
// import bcrypt from "bcrypt";

export async function POST(request: Request) {
  const { email, password, username, confirmPwd } = await request.json();

  return NextResponse.json(
    {
      message: "Congratulations! You have successfully signed up.",
    },
    {
      status: 201,
    }
  );
}
