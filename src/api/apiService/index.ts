export class AppExceptions extends Error {
  public code: number;
  public response: boolean;

  constructor(message: string, code: number = -1, response: boolean = false) {
    super(message);
    this.code = code;
    this.response = response;
  }
}
export class ApiService {}

const apiService = new ApiService();

export default apiService;
