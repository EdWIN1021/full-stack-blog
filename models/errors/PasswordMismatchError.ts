import CustomError from "./CustomError";
import ErrorMessage from "@/constants/errorMessage";
import HttpStatusCode from "@/constants/httpStatusCode";
import ResponseCode from "@/constants/responseCode";

class PasswordMismatchError extends CustomError {
  constructor() {
    super(
      ErrorMessage.PasswordMismatch,
      HttpStatusCode.BadRequest,
      ResponseCode.PasswordMismatch
    );
  }
}

export default PasswordMismatchError;
