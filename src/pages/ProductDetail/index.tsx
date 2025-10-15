import ProductContainer from "../../components/product/ProductContainer"
import ProductDetailHero from "../../components/product/ProductDetailHero"
import ProductDetailTabs from "../../components/product/ProductDetailTabs"
import BulkOrder from "../../components/shared/CTA/BulkOrder"
import styles from "./ProductDetail.module.css"
import useProductDetailPage from "./useProductDetailPage"

const ProductDetail = () => {
    const { productTabs, relatedProducts } = useProductDetailPage()
    return (
        <div className={styles.container}>
            <ProductDetailHero />
            <ProductDetailTabs productTabs={productTabs} />
            <h3 className={`container ${styles.mayAlsoLike}`}>You may also like</h3>
            <ProductContainer products={relatedProducts} />
            <BulkOrder />
        </div>
    )
}

export default ProductDetail
