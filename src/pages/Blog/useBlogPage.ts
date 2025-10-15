import type { BlogCardType } from "../../types/content";
import { STATIC_IMAGES } from "../../utils/constants/image";

const useBlogPage = () => {
  const blogs: BlogCardType[] = [
    {
      id: 1,
      image: STATIC_IMAGES.PRODUCTVER,
      title: "Blog 1",
      description: "This is the description for Blog 1.",
    },
    {
      id: 2,
      image: STATIC_IMAGES.PRODUCTVER,
      title: "Blog 2",
      description: "This is the description for Blog 2.",
    },
    {
      id: 3,
      image: STATIC_IMAGES.PRODUCTVER,
      title: "Blog 3",
      description: "This is the description for Blog 3.",
    },
    {
      id: 4,
      image: STATIC_IMAGES.PRODUCTVER,
      title: "Blog 3",
      description: "This is the description for Blog 3.",
    },
    {
      id: 5,
      image: STATIC_IMAGES.PRODUCTVER,
      title: "Blog 1",
      description: "This is the description for Blog 1.",
    },
    {
      id: 6,
      image: STATIC_IMAGES.PRODUCTVER,
      title: "Blog 2",
      description: "This is the description for Blog 2.",
    },
    {
      id: 7,
      image: STATIC_IMAGES.PRODUCTVER,
      title: "Blog 3",
      description: "This is the description for Blog 3.",
    },
    {
      id: 8,
      image: STATIC_IMAGES.PRODUCTVER,
      title: "Blog 3",
      description: "This is the description for Blog 3.",
    },
  ];
  return { blogs };
};
export default useBlogPage;
