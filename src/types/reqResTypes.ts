import type { BlogCardType } from "./content";

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
  blogs: BlogCardType[];
  totalPages: number;
  currentPage: number;
}
