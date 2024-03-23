import CustomResponse from "./CustomResponse";
import { IUser } from "../User";
import HttpStatusCode from "@/constants/httpStatusCode";
import SuccessMessage from "@/constants/successMessage";

class SuccessRegistrationResponse extends CustomResponse {
  user: IUser;

  //todo: add more properties
  constructor(user: IUser) {
    super(SuccessMessage.SignupSuccessMessage, HttpStatusCode.Created);
    this.user = user;
  }
}

export default SuccessRegistrationResponse;
