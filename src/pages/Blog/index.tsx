import styles from "./BlogPage.module.css"
import useBlogPage from "./useBlogPage"
const BlogPage = () => {
    const { title } = useBlogPage()
    return (
        <div className={styles.mainContainer}>
            <h1>{title}</h1>
        </div>
    )
}

export default BlogPage