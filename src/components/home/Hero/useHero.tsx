// import { useEffect, useState } from "react";
// import { logger } from "../../../utils/logger";
// import { StockService } from "../../../api/modules/stock";

import { useState } from "react";

// import type { HomeCarouselType } from "../../../types/global";
const useHero = () => {
    // const [hero, setHero] = useState({
    //     line1: "Ab Leads Milegy Pakki",
    //     line2: "Flat 25% off on Packages",
    //     line3: "Limited Time Offer",
    //     buttonText: "Get Genuine Leads now",
    //     personImage: "",
    //     badgeImage: "",
    //     backgroundImage: "",
    // });
    // const [loading, setLoading] = useState(true);
    const [heroImages,
        // setHeroImages
    ] = useState([
        {
            id: 1,
            image: "https://prod-ib-s3.s3.ap-south-1.amazonaws.com/stock_media/18c873aa-a483-4ed7-a9a4-042f34242a04_3.jpg",
            link: ""
        },
        {
            id: 2,
            image: "https://prod-ib-s3.s3.ap-south-1.amazonaws.com/stock_media/5f554792-21a1-4e48-912b-b311344ae5f1_4.jpg",
            link: ""
        },
        {
            id: 3,
            image: "https://prod-ib-s3.s3.ap-south-1.amazonaws.com/stock_media/538a3e45-cc47-4079-9305-bbd3910a1e20_5.jpg",
            link: ""
        },
    ]);

    // const fetchHeroImages = async () => {
    //     setLoading(true);
    //     try {
    //         const res = await StockService.getCarouselImages();
    //         if (!res.response) {
    //             return [];
    //         }
    //         setHeroImages(res.data);
    //     } catch (error) {
    //         logger.error("Error while fetching hero imags: ", error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };
    // useEffect(() => {
    //     fetchHeroImages();
    // }, [])

    return { heroImages };

}
export default useHero;