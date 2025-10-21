import appUrl from "../../endpoints";
import apiService from "../../apiService";
import type {
  HeroImagesRes,
  ApiResponseType,
} from "../../../types/reqResTypes";
import type { PageTtype } from "../../../types/content";

export class StockService {
  static async fetchHeroImage(pageType: PageTtype) {
    const url = `${appUrl.stock}/hero/?page=${pageType}/`;
    const response: ApiResponseType<HeroImagesRes> =
      await apiService.getGetApiResponse(url);
    return response;
  }
}
