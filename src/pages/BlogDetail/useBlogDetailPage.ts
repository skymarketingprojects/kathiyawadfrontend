// import { useEffect } from "react";
// import { getIdFromSlug } from "../../utils/helper/slug";

import { logger } from "../../utils/logger";
import { STATIC_IMAGES } from "../../utils/constants/image";

const useBlogDetailPage = (slug: string | undefined) => {
  //   const id = getIdFromSlug(slug!);
  //   const [blog, setBlog] = useState({});
  //   const [relatedBlogs, setRelatedBlogs] = useState([]);

  //   const fetchBlog = () => {
  //     try {
  //       const res = BlogService.getBlogDetail(id);
  //       if (!res.response) {
  //         return;
  //       }
  //       setBlog(res.data);
  //       setRelatedBlogs(res.data.relatedBlogs);
  //     } catch (error) {}
  //   };
  //   useEffect(() => {
  //     if (!id) return;
  //     fetchBlog();
  //   }, [id]);
  logger.log(slug);
  const blog = {
    id: 1,
    title: "Blog 1",
    description: "This is the description for Blog 1.",
    image: STATIC_IMAGES.BANNER2,
    content: "This is the content for Blog 1.",
  };
  return { blog };
};

export default useBlogDetailPage;
