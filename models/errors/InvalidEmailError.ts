import CustomError from "./CustomError";
import ErrorMessage from "@/constants/errorMessage";
import HttpStatusCode from "@/constants/httpStatusCode";

class InvalidEmailError extends CustomError {
  constructor() {
    super(ErrorMessage.InvalidEmail, HttpStatusCode.BadRequest);
  }
}

export default InvalidEmailError;
