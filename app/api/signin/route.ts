import { NextResponse } from "next/server";
import HttpStatusCode from "@/constants/httpStatusCode";
import dbConnect from "@/lib/dbConnect";
import { isEmail, isStrongPassword } from "validator";
import bcrypt from "bcrypt";
import { User } from "@/models/User";
import InvalidEmailError from "@/models/errors/InvalidEmailError";
import SuccessSignInResponse from "@/models/responses/SuccessSignInResponse";
import UserNotFoundError from "@/models/errors/UserNotFoundError";
import UnauthorizedError from "@/models/errors/UnauthorizedError";

export async function POST(request: Request) {
  await dbConnect();

  const { email, password } = await request.json();
  try {
    if (!isEmail(email)) throw new InvalidEmailError();

    // find user by email
    const user = await User.findOne({ email });
    if (!user) throw new UserNotFoundError();

    // check if the password matches
    const match = await bcrypt.compare(password, user.hashedPassword as string);
    if (!match) throw new UnauthorizedError();

    return NextResponse.json(
      {
        data: new SuccessSignInResponse(user),
      },
      {
        status: HttpStatusCode.Ok,
      }
    );
  } catch (err) {
    if (
      err instanceof InvalidEmailError ||
      err instanceof UserNotFoundError ||
      err instanceof UnauthorizedError
    ) {
      return NextResponse.json(
        {
          error: {
            status: err.status,
            message: err.message,
            statusCode: err.statusCode,
          },
        },
        {
          status: err.statusCode,
        }
      );
    } else {
      console.error(err);
    }
  }
}
