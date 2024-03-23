abstract class CustomResponse {
  status: string = "success";
  message: string;
  statusCode: number;

  constructor(message: string, statusCode: number) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default CustomResponse;
