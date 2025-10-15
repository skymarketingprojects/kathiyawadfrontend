import ProductDetailHero from "../../components/product/ProductDetailHero"
import ProductDetailTabs from "../../components/product/ProductDetailTabs"
import styles from "./ProductDetail.module.css"
import useProductDetailPage from "./useProductDetailPage"

const ProductDetail = () => {
    const { productTabs } = useProductDetailPage()
    return (
        <div className={styles.container}>
            <ProductDetailHero />
            <ProductDetailTabs productTabs={productTabs} />
        </div>
    )
}

export default ProductDetail
