import useHero from "./useHero";
import styles from "./Hero.module.css"
import { Link } from "react-router-dom";
import Carousel from "../../shared/Carousel";
import { WIDTH } from "../../../utils/constants";
import useWindowWidth from "../../../hooks/width/useWindowWidth";
import type { PageTtype } from "../../../types/content";


const Hero = ({ pageType }: { pageType: PageTtype }) => {
    const { loading, heroImages } = useHero(pageType);
    const width = useWindowWidth();
    if (loading) {
        return <CarouselShimmer />
    }
    const showStepper = width > WIDTH.TABLET;
    if (heroImages.length === 0) return null

    return (
        <Carousel showStepper={showStepper}>
            {heroImages.map((hero, index: number) => (
                <Link
                    key={index}
                    to={hero.link || ""}
                >
                    <img
                        src={hero.image}
                        alt={`Slide ${index}`}
                        className={styles.heroImage}
                    />
                </Link>
            ))}
        </Carousel>

    )
}
export default Hero;

const CarouselShimmer = () => {
    return (
        <div className="w-full mx-auto">
            {/* Shimmer Carousel */}
            <div className="w-full relative ">
                <div className="grid w-full">
                    {[1].map((i) => (
                        <div
                            key={i}
                            className="w-full aspect-[3.5/1] bg-gray-200 animate-pulse"
                        />
                    ))}
                </div>

                {/* Stepper Dots */}
                <div className="flex justify-center gap-2  absolute -bottom-[23px] left-1/2 transform -translate-x-1/2">
                    {[1, 2,].map((dot) => (
                        <div
                            key={dot}
                            className="w-[10px] h-[10px] bg-gray-900 rounded-full animate-pulse"
                        />
                    ))}
                </div>
            </div >
        </div >
    );
};



