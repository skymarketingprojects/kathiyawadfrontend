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
  image: string;
  name: string;
  description: string;
  price?: number;
  link?: string;
  tabs: ProductTabType[];
}
