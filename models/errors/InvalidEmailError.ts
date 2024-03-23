import CustomError from "./CustomError";
import ErrorMessage from "@/constants/errorMessage";
import HttpStatusCode from "@/constants/httpStatusCode";
import ResponseCode from "@/constants/responseCode";

class InvalidEmailError extends CustomError {
  constructor() {
    super(
      ErrorMessage.InvalidEmail,
      HttpStatusCode.BadRequest,
      ResponseCode.InvalidEmail
    );
  }
}

export default InvalidEmailError;
