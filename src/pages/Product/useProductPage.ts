import { useEffect, useState } from "react";
import type { ProductCardType } from "../../types/content";
import { ProductService } from "../../api/modules/product";
import { logger } from "../../utils/logger";

const useProductPage = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<ProductCardType[]>([]);
  const fetchHomeProducts = async () => {
    try {
      const res = await ProductService.fetchAllProducts();
      if (!res.response) {
        return;
      }
      setProducts(res.data);
    } catch (e) {
      logger.error("Error while fetching home products: ", e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchHomeProducts();
  });
  return { loading, products };
};

export default useProductPage;
