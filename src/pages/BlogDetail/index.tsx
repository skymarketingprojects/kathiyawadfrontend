import { useParams } from "react-router-dom"
import styles from "./BlogDetail.module.css"
import useBlogDetailPage from "./useBlogDetailPage"
import { GreaterThan } from "../../components/ui"
import parser from "html-react-parser"
import BlogFilter from "../../components/blog/BlogFilter"
import BulkOrder from "../../components/shared/CTA/BulkOrder"
const BlogDetail = () => {
    const { slug } = useParams();
    const { blog, loading } = useBlogDetailPage(slug)
    if (loading) return <div>loading</div>

    if (!blog.title) return <div>no blog</div>

    return (
        <div className={styles.container}>
            <div className={`container ${styles.headingContainer}`}>
                <h1 className={styles.heading}>{"Our Latest Articles"}</h1>
                <p className={styles.subHeading}>{"Exploring the rich history,cultural significance, and art of the handcrafted treats"
                }
                </p>
            </div>
            <div className={`container ${styles.breadscrum}`}>
                <span className={`${styles.text}`}>Blog</span>
                <GreaterThan className={styles.icon} />
                <span className={`${styles.text} ${styles.title}`}>{blog?.title}</span>
            </div>
            <div className={`container flex gap-5`}>
                <div className={`${styles.blogContainer}`}>
                    <h1 className={styles.blogTitle}>{blog.title}</h1>
                    <div className={styles.blogContent}>
                        {parser(blog.content)}
                    </div>
                    <img src={blog.image} alt={blog.title} className={styles.blogImage} />
                </div>
                <BlogFilter />
            </div>

            <BulkOrder />
        </div >
    )
}

export default BlogDetail
