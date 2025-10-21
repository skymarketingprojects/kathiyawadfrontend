import { useEffect, useState } from "react";
import type { BlogCardType } from "../../types/content";
import { STATIC_IMAGES } from "../../utils/constants/image";
import { BlogService } from "../../api/modules/blog";
import { logger } from "../../utils/logger";

const useBlogPage = () => {
  const blogss: BlogCardType[] = [
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
  const [loading, setLoading] = useState<boolean>(false);
  const [blogs, setBlogs] = useState<BlogCardType[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [hasNext, setHasNext] = useState<boolean>(false);
  const [hasPrev, setHasPrev] = useState<boolean>(false);

  const fetchBlogs = async () => {
    try {
      const res = await BlogService.fetchBlogs();
      if (!res.response) {
        return;
      }
      setBlogs(res.data.items);
      setTotalPages(res.data.totalPages);
      setCurrentPage(res.data.currentPage);
      setHasNext(() => res.data.currentPage < res.data.totalPages);
      setHasPrev(() => res.data.currentPage > 1);
    } catch (e) {
      logger.error("Error while fetching blogs: ", e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, [currentPage]);
  return {
    blogs,
    blogss,
    loading,
    hasNext,
    hasPrev,
    totalPages,
    currentPage,
  };
};
export default useBlogPage;
