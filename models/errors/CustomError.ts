abstract class CustomError extends Error {
  status: string = "fail";
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export default CustomError;
