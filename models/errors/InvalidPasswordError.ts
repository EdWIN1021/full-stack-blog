import CustomError from "./CustomError";
import ErrorMessage from "@/constants/errorMessage";
import HttpStatusCode from "@/constants/httpStatusCode";

class InvalidPasswordError extends CustomError {
  constructor() {
    super(ErrorMessage.InvalidPassword, HttpStatusCode.BadRequest);
  }
}

export default InvalidPasswordError;
