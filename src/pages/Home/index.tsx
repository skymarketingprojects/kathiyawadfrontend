import { Hero } from "../../components/home";
import ProductContainer from "../../components/product/ProductContainer";
import SectionHeading from "../../components/shared/SectionHeading";
import { products } from "../../utils/data/products";
const Home = () => {
    return (
        <div>
            <Hero />
            <SectionHeading
                heading="Our Top Categories!"
                subHeading="त्योहार का एहसास हर बीतते पल में"
            />
            <ProductContainer
                products={products}
            />
        </div>
    )
}
export default Home;