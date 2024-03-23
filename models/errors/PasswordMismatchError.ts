import CustomError from "./CustomError";
import ErrorMessage from "@/constants/errorMessage";
import HttpStatusCode from "@/constants/httpStatusCode";

class PasswordMismatchError extends CustomError {
  constructor() {
    super(ErrorMessage.PasswordMismatch, HttpStatusCode.BadRequest);
  }
}

export default PasswordMismatchError;
