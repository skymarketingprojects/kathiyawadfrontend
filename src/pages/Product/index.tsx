import Hero from "../../components/home/Hero"
import ProductFilter from "../../components/product/ProductFilter"
import BulkOrder from "../../components/shared/CTA/BulkOrder"
import styles from "./Product.module.css"
import SectionHeading from "../../components/shared/SectionHeading"
// import styles from "./Product.module.css"
// import useProductPage from "./useProductPage"

const Product = () => {

    return (
        <div className={`${styles.container}`}>
            <Hero pageType="product" />
            <SectionHeading
                heading="Our Handcrafted Delights!"
                subHeading="त्योहार का एहसास हर बीतते पल में"
            />
            <ProductFilter />
            <BulkOrder />
        </div>
    )
}

export default Product
