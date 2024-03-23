import CustomError from "./CustomError";
import ErrorMessage from "@/constants/errorMessage";
import HttpStatusCode from "@/constants/httpStatusCode";
import ResponseCode from "@/constants/responseCode";

class InvalidPasswordError extends CustomError {
  constructor() {
    super(
      ErrorMessage.InvalidPassword,
      HttpStatusCode.BadRequest,
      ResponseCode.InvalidPassword
    );
  }
}

export default InvalidPasswordError;
