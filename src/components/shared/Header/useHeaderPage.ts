import { useState } from "react";
import { PAGES } from "../../../utils/constants";

const useHeaderPage = () => {
  const links = [
    { label: "Home", url: PAGES.HOME },
    { label: "Product", url: PAGES.PRODUCT },
    { label: "Blog", url: PAGES.BLOG },
    { label: "Contact", url: PAGES.CONTACT },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const title = "Header";
  return {
    links,
    isOpen,
    toggleMenu,
    closeMenu,
    title,
  };
};

export default useHeaderPage;
