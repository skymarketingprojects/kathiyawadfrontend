import { useState } from "react";
import styles from "./BlogFilter.module.css"
// import useBlogFilterPage from "./useBlogFilterPage"

const BlogFilter = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const categories = [
        { name: "Tradition & History", postCount: 4 },
        { name: "Gifting Guides", postCount: 6 },
        { name: "Festive Sweets", postCount: 3 },
        { name: "Health & Ingredients", postCount: 2 },
    ];

    return (
        <div className={styles.sidebar}>
            {/* Search Blog Section */}
            <div className={styles.searchSection}>
                <label className={styles.searchLabel}>Search Blog</label>
                <input
                    type="text"
                    className={styles.searchInput}
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Categories Section */}
            <div className={styles.categoriesSection}>
                <h3 className={styles.categoriesTitle}>Categories</h3>
                {categories.map((category, index) => (
                    <div key={index} className={styles.categoryItem}>
                        {category.name} <span className={styles.categoryCount}>({category.postCount})</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogFilter
