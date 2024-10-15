class ApiError extends Error {
  public errorCode?: string;

  constructor(message: string, errorCode?: string, stack: string = "") {
    super(message);
    this.errorCode = errorCode;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, ApiError);
    }
  }
}
