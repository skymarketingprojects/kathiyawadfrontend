import styles from "./ProductDetailHero.module.css";
import useProductDetailHeroPage from "./useProductDetailHeroPage";
import type { ProductDetail } from "../../../types/content";

const ProductDetailHero = ({ product }: { product: ProductDetail }) => {
    const { noOfItems, increment, decrement } = useProductDetailHeroPage()
    const { title, price, metaDescription, imageUrl } = product;
    return (
        <div className={`container`}>
            <div className={styles.container}>
                <div className={styles.productDetail}>
                    {/* Product Image and Description */}
                    <div className={styles.productImage}>
                        <img src={imageUrl} alt={title} />
                    </div>
                    <div className={styles.productInfo}>
                        <h1 className={styles.productName}>{title}</h1>
                        <div className={styles.rating}>
                            <span className={styles.stars}>★★★★★</span>
                            <span className={styles.ratingValue}>4.5/5.0</span>
                        </div>
                        <div className={styles.priceSection}>
                            <span className={styles.price}>₹{price}/-</span>
                            {/* <span className={styles.oldPrice}>₹{price}/-</span> */}
                        </div>
                        <p className={styles.productDescription}>
                            {metaDescription}
                        </p>

                        {/* Quantity and Cart/Buy Buttons */}
                        <div className={styles.quantity}>
                            <button onClick={decrement} className={styles.decrement}>-</button>
                            <span className={styles.quantityValue}>{noOfItems}</span>
                            <button onClick={increment} className={styles.increment}>+</button>
                        </div>
                        <div className={styles.actions}>
                            <button className={styles.buyNow}>Buy Now!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailHero
