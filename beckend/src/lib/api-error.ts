class ApiError extends Error {
  public errorCode?: string;
  public status: number;

  constructor(
    status: number,
    message: string,
    errorCode?: string,
    stack: string = ""
  ) {
    super(message);
    this.status = status;
    this.errorCode = errorCode;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, ApiError);
    }
  }
}

export default ApiError;
