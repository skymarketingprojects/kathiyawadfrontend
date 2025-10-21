import { useEffect, useState } from "react";
import { STATIC_IMAGES } from "../../utils/constants/image";
import { products as productsTemp } from "../../utils/data/products";
import type { ProductCardType } from "../../types/content";
import { logger } from "../../utils/logger";
import { ProductService } from "../../api/modules/product";
const useHomePage = () => {
  const bannerImage = STATIC_IMAGES.BANNER;
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<ProductCardType[]>([]);
  const fetchHomeProducts = async () => {
    try {
      const res = await ProductService.fetchHomeProducts();
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
  }, []);
  return { loading, products, productsTemp, bannerImage };
};

export default useHomePage;
