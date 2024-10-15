class ApiResponse<T> {
  public message: string;
  public data: T | undefined;

  constructor(message: string, data?: T) {
    this.message = message;
    this.data = data;
  }
}

export default ApiResponse;
