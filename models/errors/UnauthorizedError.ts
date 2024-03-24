import CustomError from "./CustomError";
import ErrorMessage from "@/constants/errorMessage";
import HttpStatusCode from "@/constants/httpStatusCode";

class UnauthorizedError extends CustomError {
  constructor() {
    super(ErrorMessage.UserUnauthorized, HttpStatusCode.Unauthorized);
  }
}

export default UnauthorizedError;
