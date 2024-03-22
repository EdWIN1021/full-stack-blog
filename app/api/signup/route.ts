import SignUpResponse from "@/models/SignUpResponse";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = new SignUpResponse();
  return NextResponse.json(
    {
      data,
    },
    {
      status: data.statusCode,
    }
  );
}
