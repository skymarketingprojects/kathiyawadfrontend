import styles from "./ProductDetailHero.module.css";
import { STATIC_IMAGES } from "../../../utils/constants/image";
import useProductDetailHeroPage from "./useProductDetailHeroPage";

const ProductDetailHero = () => {
    const { noOfItems, increment, decrement } = useProductDetailHeroPage()
    return (
        <div className={`container`}>
            <div className={styles.container}>
                <div className={styles.productDetail}>
                    {/* Product Image and Description */}
                    <div className={styles.productImage}>
                        <img src={STATIC_IMAGES.PRODUCTVER} alt="Peanut Chikki" />
                    </div>
                    <div className={styles.productInfo}>
                        <h1 className={styles.productName}>Peanut Chikki</h1>
                        <div className={styles.rating}>
                            <span className={styles.stars}>★★★★★</span>
                            <span className={styles.ratingValue}>4.5/5.0</span>
                        </div>
                        <div className={styles.priceSection}>
                            <span className={styles.price}>₹799/-</span>
                            <span className={styles.oldPrice}>₹950/-</span>
                        </div>
                        <p className={styles.productDescription}>
                            A luxurious, energy-packed treat made from a blend of premium dates, cashews, almonds, and pistachios, bound with organic jaggery. Perfect for a healthy snack or gifting. <strong>**No refined sugar, no preservatives.**</strong>
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
