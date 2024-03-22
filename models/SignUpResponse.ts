import CustomResponse from "./CustomResponse";

class SignUpResponse extends CustomResponse {
  constructor() {
    super("Congratulations! You have successfully signed up.", 201);
  }
}

export default SignUpResponse;
