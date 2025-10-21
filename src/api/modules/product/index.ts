import appUrl from "../../endpoints";
import apiService from "../../apiService";
import type {
  ProductListRes,
  ApiResponseType,
  AllProductListRes,
  ProductDetailRes,
} from "../../../types/reqResTypes";

export class ProductService {
  static async fetchHomeProducts() {
    const url = `${appUrl.product}/home/`;
    const response: ApiResponseType<ProductListRes> =
      await apiService.getGetApiResponse(url);
    return response;
  }
  static async fetchAllProducts() {
    const url = `${appUrl.product}/`;
    const response: ApiResponseType<AllProductListRes> =
      await apiService.getGetApiResponse(url);
    return response;
  }
  static async fetchProductDetail(id: number) {
    const url = `${appUrl.product}/${id}/`;
    const response: ApiResponseType<ProductDetailRes> =
      await apiService.getGetApiResponse(url);
    return response;
  }
}
