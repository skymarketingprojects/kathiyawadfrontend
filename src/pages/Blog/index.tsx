import useBlogPage from "./useBlogPage";
import styles from "./BlogPage.module.css";
import BulkOrder from "../../components/shared/CTA/BulkOrder";
import BlogContainer from "../../components/blog/BlogContainer";
import BlogFilter from "../../components/blog/BlogFilter";
const BlogPage = () => {
    const { blogs, } = useBlogPage()
    return (
        <div className={styles.container}>

            <div className={`container ${styles.headingContainer}`}>
                <h1 className={styles.heading}>{"Our Latest Articles"}</h1>
                <p className={styles.subHeading}>{"Exploring the rich history,cultural significance, and art of the handcrafted treats"
                }
                </p>
            </div>
            <div className={` container ${styles.blogsContainer}`}>
                <BlogContainer blogs={blogs} />
                <BlogFilter />
            </div>
            <BulkOrder />
        </div>
    )
}

export default BlogPage