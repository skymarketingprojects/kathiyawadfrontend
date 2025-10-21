import styles from "./Home.module.css"
import { Hero } from "../../components/home";
import ProductContainer from "../../components/product/ProductContainer";
import SectionHeading from "../../components/shared/SectionHeading";

import useHomePage from "./useHomePage";
import BulkOrder from "../../components/shared/CTA/BulkOrder";
const Home = () => {
    const { bannerImage, productsTemp } = useHomePage();
    return (
        <div className={styles.container}>
            <Hero pageType="home" />
            <SectionHeading
                heading="Our Top Categories!"
                subHeading="त्योहार का एहसास हर बीतते पल में"
            />
            <ProductContainer
                products={productsTemp}
            />
            <img
                src={bannerImage}
                className={styles.bannerImage}
            />
            <BulkOrder />
        </div>
    )
}
export default Home;