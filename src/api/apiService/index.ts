import config from "../../config";
import type { ApiResponseType, RequestOptions } from "../../types/reqResTypes";
import { fetchWithAuthRetry } from "../authHelper/fetchWithAuthRetry";
export class AppExceptions extends Error {
  public code: number;
  public response: boolean;

  constructor(message: string, code: number = -1, response: boolean = false) {
    super(message);
    this.code = code;
    this.response = response;
  }
}
export class ApiService {
  private buildUrl = (url: string) => {
    return `${config.BASE_URL}${url.startsWith("/") ? url : `/${url}`}`;
  };
  async getGetApiResponse<T>(
    url: string,
    options: RequestOptions = {}
  ): Promise<ApiResponseType<T>> {
    const request = this.createRequest("GET", {}, "json", options.auth ?? true);

    const response = await fetchWithAuthRetry(this.buildUrl(url), request);

    return this.returnResponse(response, options.responseType ?? "json");
  }

  async getPostApiResponse<T>(
    url: string,
    body: any,
    options: RequestOptions = {}
  ): Promise<ApiResponseType<T>> {
    const request = this.createRequest(
      "POST",
      body,
      options.responseType ?? "json",
      options.auth ?? true
    );
    const response = await fetchWithAuthRetry(this.buildUrl(url), request);
    return this.returnResponse(response, options.responseType ?? "json");
  }

  async getPutApiResponse<T>(
    url: string,
    body: any,
    options: RequestOptions = {}
  ): Promise<ApiResponseType<T>> {
    const request = this.createRequest(
      "PUT",
      body,
      "json",
      options.auth ?? true
    );
    const response = await fetchWithAuthRetry(this.buildUrl(url), request);
    return this.returnResponse(response, options.responseType ?? "json");
  }

  async getPatchApiResponse<T>(
    url: string,
    body: any,
    options: RequestOptions = {}
  ): Promise<ApiResponseType<T>> {
    const request = this.createRequest(
      "PATCH",
      body,
      options.responseType ?? "json",
      options.auth ?? true
    );

    const response = await fetchWithAuthRetry(this.buildUrl(url), request);
    return this.returnResponse(response, options.responseType ?? "json");
  }

  async getDeleteApiResponse<T>(
    url: string,
    body?: any,
    options: RequestOptions = {}
  ): Promise<ApiResponseType<T>> {
    const request = this.createRequest(
      "DELETE",
      body,
      "json",
      options.auth ?? true
    );
    const response = await fetchWithAuthRetry(this.buildUrl(url), request);
    return this.returnResponse(response, options.responseType ?? "json");
  }
  private createRequest(method: string, body: any, data = "json", auth = true) {
    const headers: Record<string, string> = {};
    // remove this because this will be handled by interceptor (fetchWithAuthRetry)
    if (auth) {
      // const token = localStorage.getItem(AUTH_VARS.ACCESS);
      // if (token) {
      //   headers["Authorization"] = `Bearer ${token}`;
      // }
    }

    if (method === "GET") {
      headers["Content-Type"] = "application/json";
      return { method, headers };
    }

    if (data === "formdata") {
      return { method, body, headers };
    }

    headers["Content-Type"] = "application/json";
    return { method, body: JSON.stringify(body), headers };
  }

  private async returnResponse<T>(
    response: Response,
    responseType: RequestOptions["responseType"]
  ): Promise<ApiResponseType<T>> {
    let body: ApiResponseType<T> | string | Blob | ArrayBuffer;

    try {
      switch (responseType) {
        case "text":
          body = await response.text();
          break;
        case "blob":
          body = await response.blob();
          break;
        case "arrayBuffer":
          body = await response.arrayBuffer();
          break;
        default:
          body = await response.json();
      }
    } catch (error) {
      throw new AppExceptions("Failed to parse response", 500, false);
    }

    if (response.ok) {
      return body as ApiResponseType<T>;
    }

    // Handle error response shape
    const errBody = body as Partial<ApiResponseType<unknown>>;
    throw new AppExceptions(
      errBody.message || "Unexpected error",
      errBody.code || -1,
      errBody.response || false
    );
  }
}

const apiService = new ApiService();

export default apiService;
