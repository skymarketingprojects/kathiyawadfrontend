import { logger } from "../../utils/logger";
// import { STATIC_IMAGES } from "../../utils/constants/image";
import { getIdFromSlug } from "../../utils/helper/slug";
import { useEffect, useState } from "react";
import { BlogService } from "../../api/modules/blog";
import type { BlogDetail } from "../../types/content";

const useBlogDetailPage = (slug: string | undefined) => {
  const id = getIdFromSlug(slug!);
  const [blog, setBlog] = useState({} as BlogDetail);
  const [loading, setLoading] = useState(true);
  // const [relatedBlogs, setRelatedBlogs] = useState([]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const res = await BlogService.getBlogDetail(id);
      if (!res.response) {
        return;
      }
      setBlog(res.data);
      // setRelatedBlogs(res.data.relatedBlogs);
    } catch (error) {
      logger.error("Error while fetching blog detail: ", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!id) return;
    fetchBlog();
  }, [id]);
  logger.log(slug);
  // const blog = {
  //   id: 1,
  //   title: "Blog 1",
  //   description: "This is the description for Blog 1.",
  //   image: STATIC_IMAGES.BANNER2,
  //   content: "This is the content for Blog 1.",
  // };
  return { blog, loading };
};

export default useBlogDetailPage;
