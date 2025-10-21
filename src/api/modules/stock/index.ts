import appUrl from "../../endpoints";
import apiService from "../../apiService";
import type {
  HeroImagesRes,
  ApiResponseType,
} from "../../../types/reqResTypes";

export class StockService {
  static async fetchHeroImage(pageType: "home" | "product") {
    const url = `${appUrl.stock}/hero/${pageType}/`;
    const response: ApiResponseType<HeroImagesRes> =
      await apiService.getGetApiResponse(url);
    return response;
  }
}
