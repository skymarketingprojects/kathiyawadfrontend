import ProductContainer from "../../components/product/ProductContainer"
import ProductDetailHero from "../../components/product/ProductDetailHero"
import ProductDetailTabs from "../../components/product/ProductDetailTabs"
import BulkOrder from "../../components/shared/CTA/BulkOrder"
import styles from "./ProductDetail.module.css"
import { useParams } from "react-router-dom"
import useProductDetailPage from "./useProductDetailPage"

const ProductDetail = () => {
    const { slug } = useParams();
    const { product, productTabs, relatedProducts } = useProductDetailPage(slug)
    return (
        <div className={styles.container}>
            <ProductDetailHero product={product} />
            <ProductDetailTabs productTabs={productTabs} />
            <h3 className={`container ${styles.mayAlsoLike}`}>You may also like</h3>
            <ProductContainer products={relatedProducts} />
            <BulkOrder />
        </div>
    )
}

export default ProductDetail
