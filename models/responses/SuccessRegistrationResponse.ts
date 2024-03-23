import CustomResponse from "./CustomResponse";
import { IUser } from "../User";

class SuccessRegistrationResponse extends CustomResponse {
  user: IUser;

  constructor(user: IUser) {
    super("Congratulations! You have successfully signed up.");
    this.user = user;
  }
}

export default SuccessRegistrationResponse;
