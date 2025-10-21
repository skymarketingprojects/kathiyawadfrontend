import { useEffect, useState } from "react";
import type { ProductTabType, ProductDetail } from "../../types/content";
import { products } from "../../utils/data/products";
import { logger } from "../../utils/logger";
import { ProductService } from "../../api/modules/product";
import { getIdFromSlug } from "../../utils/helper/slug";

const useProductDetailPage = (slug: string | undefined) => {
  const id = getIdFromSlug(slug!);

  const title = "ProductDetail";
  const productTabs: ProductTabType[] = [
    {
      id: 1,
      label: "Description",
      value: "description",
      content:
        "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>",
    },
    {
      id: 2,
      label: "Ingredients & Nutrition",
      value: "ingredients",
      content:
        "<p>Ingredients: <strong>Water</strong>, <strong>Citric Acid</strong>, <strong>Glycerin</strong>...</p>",
    },
    {
      id: 3,
      label: "Shipping & Delivery",
      value: "shipping",
      content:
        "<p><strong>Shipping Information:</strong> We offer various shipping options...</p>",
    },
  ];
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<ProductDetail>({} as ProductDetail);
  const fetchProductDetail = async () => {
    try {
      setLoading(true);
      const res = await ProductService.fetchProductDetail(id);
      if (!res.response) {
        return;
      }
      setProduct(res.data);
    } catch (e) {
      logger.error("Erro while fetching product detail: ", e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!id) return;
    fetchProductDetail();
  }, [id]);
  const relatedProducts = products;
  return { title, productTabs, relatedProducts, product, loading };
};

export default useProductDetailPage;
