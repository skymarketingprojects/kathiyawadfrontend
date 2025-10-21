import ProductCard from "../ProductCard"
import styles from "./ProductFilter.module.css"
import useProductFilterPage from "./useProductFilterPage"

const ProductFilter = () => {
    const { productsTemp, bannerImage } = useProductFilterPage()
    return (
        <div className={`container`}>
            <div className={` ${styles.container}`}>
                {/* Filter Sidebar */}
                <div className={styles.filterSidebar}>
                    <h3>Filter Products</h3>
                    <div className={styles.filterSection}>
                        <h4>Categories</h4>
                        <label>
                            <input type="checkbox" /> All Products
                        </label>
                        <label>
                            <input type="checkbox" /> Premium Gift Hampers
                        </label>
                        <label>
                            <input type="checkbox" /> Chikki & Traditional Sweets
                        </label>
                        <label>
                            <input type="checkbox" /> Fruit & Nut Bites
                        </label>
                        <label>
                            <input type="checkbox" /> Festive Specials
                        </label>
                    </div>

                    <div className={styles.filterSection}>
                        <h4>Price Range (₹)</h4>
                        <input type="range" min="100" max="5000" />
                    </div>

                    <div className={styles.filterSection}>
                        <h4>Dietary Needs</h4>
                        <label>
                            <input type="checkbox" /> Gluten-Free
                        </label>
                        <label>
                            <input type="checkbox" /> Sugar-Free Options
                        </label>
                        <label>
                            <input type="checkbox" /> Vegan
                        </label>
                    </div>

                    <button className={styles.applyButton}>Apply Filters</button>
                </div>

                {/* Product Display */}
                <div className={styles.productDisplay}>
                    <img
                        src={bannerImage}
                        alt="Celebration"
                        className={styles.bannerImage}
                    />
                    <div className={styles.productGrid}>
                        {productsTemp.slice(0, 3).map((product) => (<ProductCard key={product.id} product={product} />))}
                    </div>
                </div>
            </div>
            <div className={styles.productGrid}>
                {productsTemp.slice(3,).map((product) => (<ProductCard key={product.id} product={product} />))}
            </div>
        </div>
    )
}

export default ProductFilter
