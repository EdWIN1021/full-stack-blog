import CustomError from "./CustomError";
import ErrorMessage from "@/constants/errorMessage";
import HttpStatusCode from "@/constants/httpStatusCode";

class UserNotFoundError extends CustomError {
  constructor() {
    super(ErrorMessage.UserNotFound, HttpStatusCode.NotFound);
  }
}

export default UserNotFoundError;
