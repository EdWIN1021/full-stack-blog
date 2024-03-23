import CustomError from "./CustomError";
import ErrorMessage from "@/constants/errorMessage";
import HttpStatusCode from "@/constants/httpStatusCode";

class DuplicateUserError extends CustomError {
  constructor() {
    super(ErrorMessage.DuplicateUser, HttpStatusCode.Conflict);
  }
}

export default DuplicateUserError;
