import type { BlogCardType } from "../../../types/content"
import { PAGES } from "../../../utils/constants";
import { generateSlug } from "../../../utils/helper/slug";
import styles from "./BlogCard.module.css"
import { RightArrow } from "../../ui";
import { Link } from "react-router-dom";
// import useBlogCardPage from "./useBlogCardPage"

const BlogCard = ({ blog }: { blog: BlogCardType }) => {
    const { id, image, title, description } = blog;
    const slug = generateSlug(title, id);
    return (
        <div className={styles.blogCard}>
            <img className={styles.blogImage} src={image} alt={title} />
            <div className={styles.blogContent}>
                <h2 className={styles.blogTitle}>{title}</h2>
                <p className={styles.blogDescription}>{description}</p>
                <Link to={PAGES.BLOG_DETAIL.replace(":slug", slug)} className={styles.readMoreButton}>
                    Read More <RightArrow className={styles.rightArrow} />
                </Link>
            </div>
        </div>
    )
}

export default BlogCard
