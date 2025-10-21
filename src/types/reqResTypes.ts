import type {
  BlogCardType,
  BlogDetail,
  HeroImage,
  ProductCardType,
} from "./content";

export interface ApiResponseType<T> {
  data: T;
  response: boolean;
  message: string;
  code: number;
}

export interface ApiErrorType {
  message: string;
  status: string;
  code: number;
}

export interface RequestOptions {
  auth?: boolean;
  responseType?: "json" | "text" | "blob" | "arrayBuffer";
}

export interface BlogListType {
  items: BlogCardType[];
  totalPages: number;
  currentPage: number;
}

export type BlogDetailRes = BlogDetail;
export type HeroImagesRes = HeroImage[];

export type ProductListRes = ProductCardType[];
