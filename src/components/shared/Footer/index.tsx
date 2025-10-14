import styles from "./Footer.module.css"
import useFooterPage from "./useFooterPage"
import { Link } from "react-router-dom";
import { CONTACTS, SOCIAL_MEDIA } from "../../../utils/constants/contact";
import { STATIC_IMAGES } from "../../../utils/constants/image";
import { PAGES } from "../../../utils/constants";

const Footer = () => {
    const { title } = useFooterPage()
    return (
        <footer className={`${styles.footerWrapper}`}>
            <div className={`${styles.footerContainer}`}>
                <section className={`${styles.topBar}`}>
                    <div className={`${styles.row1}`}>
                        <h3 className={`${styles.colHeading} `}>
                            <img className={`${styles.companyLogo}`} src={STATIC_IMAGES.LOGO} alt="Kathiyawad Logo" />
                        </h3>
                        <p className={`${styles.companyDescription}`}>
                            Serving 2000+ dealers across India for over 17 years | We offer modern blinds and customizable options.
                        </p>
                        {/* <div className={`${styles.socialIconContainer}`}>
                            <a
                                href={SOCIAL_MEDIA.INSTAGRAM}
                                target="_blank"
                                aria-label="Follow us on Instagram"
                            >
                                <img
                                    className={`${styles.socialIcon}`}
                                    src="/images/instagram.png"
                                    alt="instagram logo"
                                />
                            </a>
                            <a
                                href={SOCIAL_MEDIA.YOUTUBE}
                                target="_blank"
                                aria-label="Follow us on X"
                            >
                                <img
                                    className={`${styles.socialIcon}`}
                                    src="/images/youtube.png"
                                    alt="x logo"
                                />
                            </a>
                            <a
                                href={SOCIAL_MEDIA.FACEBOOK}
                                target="_blank"
                                aria-label="Like us on Facebook"
                            >
                                <img
                                    className={`${styles.socialIcon}`}
                                    src="/images/facebook.png"
                                    alt="facebook logo"
                                />
                            </a>
                        </div> */}
                    </div>
                    <div className={`${styles.row2}`}>
                        <h3 className={`${styles.colHeading}`}>Quick Links</h3>
                        <ul>
                            <li>
                                <Link to={PAGES.HOME}>Home</Link>
                            </li>
                            <li>
                                <Link to={PAGES.PRODUCT}>Product</Link>
                            </li>
                            <li>
                                <Link to={PAGES.BLOG}>Blog</Link>
                            </li>
                            <li>
                                <Link to={PAGES.CONTACT}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={`${styles.row3}`}>
                        <h3 className={`${styles.colHeading}`}>Customer Care</h3>
                        <ul>
                            <li>
                                <Link to={PAGES.HOME}>Home</Link>
                            </li>
                            <li>
                                <Link to={PAGES.PRODUCT}>Product</Link>
                            </li>
                            <li>
                                <Link to={PAGES.BLOG}>Blog</Link>
                            </li>
                            <li>
                                <Link to={PAGES.CONTACT}>Contact</Link>
                            </li>
                        </ul>



                    </div>
                    <div className={`${styles.row3}`}>
                        <div>
                            <h3 className={`${styles.colHeading}`}>Connect</h3>
                        </div>
                    </div>
                </section>

                <section className={`${styles.bottomBar}`}>
                    <span className={`${styles.bottomCta}`}>
                        Need custom gifting? We proudly accept "BULK ORDERS"!
                    </span>
                    <span>
                        &copy; 2025  Kathiyawad Treats. All right reserved
                    </span>
                    {/* <span className={`${styles.companyUsername} ${styles.bottomLink}`}>
                        &copy; Kathiyawad
                    </span> */}
                    {/* <div className={`${styles.termsContainer} ${styles.bottomLink}`}>
                        <Link to={"/terms-of-service"} title="Read our Terms of Service">
                            Terms of service
                        </Link>
                        <Link to={"/privacy-policy"} title="Read our Privacy Policy">
                            Privacy Policy
                        </Link>
                    </div> */}
                </section>
                {/* <section className={`${styles.bottomcontainer}`}>
                    <div
                        className={`${styles.companyUsername} ${styles.bottomLink}`}
                    >
                        <span>Build with class</span>{" "}
                        <Link
                            className={`${styles.buildByLink}`}
                            rel="noopener"
                            target="_blank"
                            to={"https://feelsafemarkone.com"}
                        >
                            @feelsafemarkone
                        </Link>
                    </div>
                </section> */}
            </div>
        </footer>
    )
}

export default Footer
