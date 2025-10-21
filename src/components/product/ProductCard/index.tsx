import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import type { ProductCardType } from "../../../types/content";
import { generateSlug } from "../../../utils/helper/slug";
import { logger } from "../../../utils/logger";
const ProductCard = ({ product }: { product: ProductCardType }) => {
    const { id, description, image, title } = product;
    const slug = generateSlug(title, id);
    logger.log("this is slug: ", name, id, slug)
    return (
        <div className={styles.productCard}>
            <img src={image} alt={title} className={styles.productImage} />
            <h3 className={styles.productName}>{title}</h3>
            <p className={styles.productDescription}>{description}</p>
            <Link to={`/product/${slug}`} className={styles.productButton}>Shop Now</Link>
        </div>
    )
}

export default ProductCard
