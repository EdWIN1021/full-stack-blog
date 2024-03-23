import CustomError from "./CustomError";
import ErrorMessage from "@/constants/errorMessage";
import HttpStatusCode from "@/constants/httpStatusCode";
import ResponseCode from "@/constants/responseCode";

class DuplicateUserError extends CustomError {
  constructor() {
    super(
      ErrorMessage.DuplicateUser,
      HttpStatusCode.Conflict,
      ResponseCode.DuplicateUser
    );
  }
}

export default DuplicateUserError;
