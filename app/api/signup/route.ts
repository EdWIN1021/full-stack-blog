import SuccessRegistrationResponse from "@/models/responses/SuccessRegistrationResponse";
import { NextResponse } from "next/server";
import HttpStatusCode from "@/constants/httpStatusCode";
import dbConnect from "@/lib/dbConnect";
import { isEmail, equals, isStrongPassword } from "validator";

import { User } from "@/models/User";
import DuplicateUserError from "@/models/errors/DuplicateUserError";
import InvalidEmailError from "@/models/errors/InvalidEmailError";
import PasswordMismatchError from "@/models/errors/PasswordMismatchError";
import InvalidPasswordError from "@/models/errors/InvalidPasswordError";

export async function POST(request: Request) {
  await dbConnect();

  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const confirmPassword = String(formData.get("confirmPassword"));

  try {
    if (!isEmail(email)) throw new InvalidEmailError();
    if (!isStrongPassword(password)) throw new InvalidPasswordError();
    if (!equals(password, confirmPassword)) throw new PasswordMismatchError();

    // check if the email is taken
    const user = await User.findOne({ email });
    if (user) throw new DuplicateUserError();

    // hash password
    const hashedPassword = await User.hashPassword(String(password));

    //create a new user
    const newUser = new User({ email, hashedPassword });
    await newUser.save();

    return NextResponse.json(
      {
        data: new SuccessRegistrationResponse(newUser),
      },
      {
        status: HttpStatusCode.Created,
      }
    );
  } catch (err) {
    if (
      err instanceof DuplicateUserError ||
      err instanceof InvalidEmailError ||
      err instanceof PasswordMismatchError ||
      err instanceof InvalidPasswordError
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
}
