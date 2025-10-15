import { useState } from "react";

const useProductDetailHeroPage = () => {
  const title = "ProductDetailHero";
  const [noOfItems, setNoOfItems] = useState(1);
  const increment = () => setNoOfItems(noOfItems + 1);
  const decrement = () => {
    if (noOfItems > 1) {
      setNoOfItems(noOfItems - 1);
    }
  };
  return { title, noOfItems, increment, decrement };
};

export default useProductDetailHeroPage;
