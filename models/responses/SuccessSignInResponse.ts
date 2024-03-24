import CustomResponse from "./CustomResponse";
import { IUser } from "../User";
import HttpStatusCode from "@/constants/httpStatusCode";
import SuccessMessage from "@/constants/successMessage";

class SuccessSignInResponse extends CustomResponse {
  user: IUser;

  constructor(user: IUser) {
    super(SuccessMessage.SigninSuccessMessage, HttpStatusCode.Ok);
    this.user = user;
  }
}

export default SuccessSignInResponse;
