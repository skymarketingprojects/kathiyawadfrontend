import ProductCard from "../ProductCard"
import styles from "./ProductContainer.module.css"
import type { ProductCardType } from "../../../types/content"

const ProductContainer = ({ products }: { products: ProductCardType[] }) => {

    return (
        <div className={`container  ${styles.productContainer}`}>
            {products.map((product) => (<ProductCard key={product.id} product={product} />))}
        </div>
    )
}

export default ProductContainer;
