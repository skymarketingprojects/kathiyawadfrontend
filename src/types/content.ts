export interface ProductCardType {
  id: number;
  image: string;
  name: string;
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
  name: string;
  link?: string;
  image: string;
  price?: number;
  description: string;
  tabs: ProductTabType[];
}

export interface BlogCardType {
  id: number;
  image: string;
  title: string;
  description: string;
}

export type PageTtype = "home" | "product";
export interface HeroImage {
  id: number;
  index: number;
  image: string;
  link?: string;
}
