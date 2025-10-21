import type { BlogCardType } from "../../../types/content"
import BlogCard from "../BlogCard"
import styles from "./BlogContainer.module.css"
// import useBlogContainerPage from "./useBlogContainerPage"

const BlogContainer = ({ blogs }: { blogs: BlogCardType[] }) => {
    // const { title } = useBlogContainerPage()
    return (
        <div className={`container ${styles.blogContainer}`}>
            {blogs.map((blog, index) => (
                <BlogCard key={index} blog={blog} />
            ))}
        </div>
    )
}

export default BlogContainer
