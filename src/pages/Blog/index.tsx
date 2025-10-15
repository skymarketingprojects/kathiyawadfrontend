import useBlogPage from "./useBlogPage";
import styles from "./BlogPage.module.css";
import BlogContainer from "../../components/blog/BlogContainer";
import BulkOrder from "../../components/shared/CTA/BulkOrder";
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
            <BlogContainer blogs={blogs} />
            <BulkOrder />
        </div>
    )
}

export default BlogPage