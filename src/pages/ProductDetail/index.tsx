import ProductDetailHero from "../../components/product/ProductDetailHero"
import styles from "./ProductDetail.module.css"
// import useProductDetailPage from "./useProductDetailPage"

const ProductDetail = () => {
    // const { title } = useProductDetailPage()
    return (
        <div className={styles.container}>
            <ProductDetailHero />
        </div>
    )
}

export default ProductDetail
