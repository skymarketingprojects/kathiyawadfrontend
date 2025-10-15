import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import type { ProductCardType } from "../../../types/content";
import { generateSlug } from "../../../utils/helper/slug";
const ProductCard = ({ product }: { product: ProductCardType }) => {
    const { id, description, image, name } = product;
    const slug = generateSlug(name, id)
    return (
        <div className={styles.productCard}>
            <img src={image} alt={name} className={styles.productImage} />
            <h3 className={styles.productName}>{name}</h3>
            <p className={styles.productDescription}>{description}</p>
            <Link to={`/product/${slug}`} className={styles.productButton}>Shop Now</Link>
        </div>
    )
}

export default ProductCard
