import SuccessRegistrationResponse from "@/models/responses/SuccessRegistrationResponse";
import { NextResponse } from "next/server";
import HttpStatusCode from "@/constants/httpStatusCode";
import dbConnect from "@/lib/dbConnect";
import { isEmail, equals } from "validator";

import User from "@/models/User";
import DuplicateUserError from "@/models/errors/DuplicateUserError";
import InvalidEmailError from "@/models/errors/InvalidEmailError";
import PasswordMismatchError from "@/models/errors/PasswordMismatchError";

export async function POST(request: Request) {
  await dbConnect();

  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  try {
    if (!isEmail(String(email))) throw new InvalidEmailError();

    if (!equals(String(password), String(confirmPassword)))
      throw new PasswordMismatchError();

    // check if the email is taken
    const user = await User.findOne({ email });
    if (user) throw new DuplicateUserError();

    //create a new user
  } catch (err) {
    if (
      err instanceof DuplicateUserError ||
      err instanceof InvalidEmailError ||
      err instanceof PasswordMismatchError
    ) {
      return NextResponse.json(
        {
          error: {
            status: err.status,
            message: err.message,
            code: err.code,
            statusCode: err.statusCode,
          },
        },
        {
          status: err.statusCode,
        }
      );
    }
  }

  // create a new user
  // const newUser = new User({ email, hashed_password: password });
  // await newUser.save();
  // const data = new SuccessRegistrationResponse(newUser);

  return NextResponse.json(
    {
      data: null,
    },
    {
      status: HttpStatusCode.Created,
    }
  );
}
