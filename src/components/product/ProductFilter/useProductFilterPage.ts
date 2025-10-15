import { STATIC_IMAGES } from "../../../utils/constants/image";
import { products } from "../../../utils/data/products";
const useProductFilterPage = () => {
  const title = "ProductFilter";
  const bannerImage = STATIC_IMAGES.BANNER;
  return { title, products, bannerImage };
};

export default useProductFilterPage;
