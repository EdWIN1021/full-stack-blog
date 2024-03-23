import CustomResponse from "./CustomResponse";
import { IUser } from "../User";

class SuccessRegistrationResponse extends CustomResponse {
  user: IUser;

  //todo: add more properties
  constructor(user: IUser) {
    super("Congratulations! You have successfully signed up.");
    this.user = user;
  }
}

export default SuccessRegistrationResponse;
