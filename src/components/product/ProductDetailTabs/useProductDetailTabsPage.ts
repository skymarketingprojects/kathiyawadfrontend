import { useState } from "react";
import type { ProductTabType } from "../../../types/content";

const useProductDetailTabsPage = (productTabs: ProductTabType[]) => {
  // Initialize state with the provided product tabs
  const [tabs] = useState<ProductTabType[]>(productTabs);
  const [activeTab, setActiveTab] = useState<string>(
    productTabs[0]?.value || ""
  ); // Set the first tab as active by default

  // Handle switching between tabs
  const handleTabClick = (tabValue: string) => {
    setActiveTab(tabValue); // Set the clicked tab as active
  };

  return {
    tabs,
    activeTab,
    handleTabClick,
  };
};

export default useProductDetailTabsPage;
