import appUrl from "../../endpoints";
import apiService from "../../apiService";
import type { ApiResponseType, BlogListType } from "../../../types/reqResTypes";

export class BlogService {
  static async fetchBlogs() {
    const url = `${appUrl.blog}/signup/`;
    const response: ApiResponseType<BlogListType> =
      await apiService.getGetApiResponse(url);
    return response;
  }
}
