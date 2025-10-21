export interface ProductCardType {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  price?: number;
  link?: string;
}

export interface ProductTabType {
  id: number;
  label: string;
  value: string;
  content: string;
}
export interface ProductDetail extends ProductCardType {
  id: number;
  title: string;
  link?: string;
  price?: number;
  description: string;
  metaDescription: string;
  tabs: ProductTabType[];
}

export interface BlogCardType {
  id: number;
  image: string;
  title: string;
  description: string;
}

export interface BlogDetail extends BlogCardType {
  content: string;
}
export type PageTtype = "home" | "product";
export interface HeroImage {
  id: number;
  index: number;
  image: string;
  link?: string;
}
