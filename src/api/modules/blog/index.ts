import appUrl from "../../endpoints";
import apiService from "../../apiService";
import type {
  ApiResponseType,
  BlogListType,
  BlogDetailRes,
} from "../../../types/reqResTypes";

export class BlogService {
  static async fetchBlogs() {
    const url = `${appUrl.blog}/`;
    const response: ApiResponseType<BlogListType> =
      await apiService.getGetApiResponse(url);
    return response;
  }
  static async getBlogDetail(id: number) {
    const url = `${appUrl.blog}/${id}/`;
    const response: ApiResponseType<BlogDetailRes> =
      await apiService.getGetApiResponse(url);
    return response;
  }
}
