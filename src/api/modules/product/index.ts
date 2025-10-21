import appUrl from "../../endpoints";
import apiService from "../../apiService";
import type { ApiResponseType, BlogListType } from "../../../types/reqResTypes";

export class ProductService {
  static async fetchBlogs() {
    const url = `${appUrl.product}/signup/`;
    const response: ApiResponseType<BlogListType> =
      await apiService.getGetApiResponse(url);
    return response;
  }
}
