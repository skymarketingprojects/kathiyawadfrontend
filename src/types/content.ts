export interface ProductCardType {
  id: number;
  image: string;
  name: string;
  description: string;
  price?: number;
  link?: string;
}

export interface ProductDetail extends ProductCardType {
  id: number;
  image: string;
  name: string;
  description: string;
  price?: number;
  link?: string;
}
