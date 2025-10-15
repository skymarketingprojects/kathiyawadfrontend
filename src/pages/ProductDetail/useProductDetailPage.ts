import type { ProductTabType } from "../../types/content";

const useProductDetailPage = () => {
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
  return { title, productTabs };
};

export default useProductDetailPage;
