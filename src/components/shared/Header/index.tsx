import { NavLink } from "react-router-dom"
import styles from "./Header.module.css"
import useHeaderPage from "./useHeaderPage"
import { STATIC_ICONS, STATIC_IMAGES } from "../../../utils/constants/image"

const Header = () => {
    const {
        links,
        isOpen,
        toggleMenu,
        closeMenu,
    } = useHeaderPage()
    return (
        <header className={`${styles.headerContainer}`}>
            <div className={`${styles.hamburgerContainer}`} onClick={toggleMenu}>
                {
                    isOpen ? (
                        <img
                            src={STATIC_ICONS.MENUOPEN}
                            alt="Close menu"
                            className={`${styles.hamburger} ${styles.logoheight}`}
                            onClick={closeMenu}
                        />
                    ) : (
                        <img
                            src={STATIC_ICONS.MENUOPEN}
                            alt="Open menu"
                            className={`${styles.hamburger} ${styles.logoheight}`}
                            onClick={toggleMenu}
                        />
                    )}
            </div>
            <div className={`${styles.logoContainer}`}>
                <NavLink to="/" >
                    <img
                        src={STATIC_IMAGES.LOGO}
                        alt="Kathiyawad Sweetes Lgoo"
                        className={`${styles.logo} ${styles.logoheight}`}
                    />
                </NavLink>
            </div>
            <ul className={`${styles.headerLinksContainer} ${isOpen ? styles.open : ""}`}>
                {links.map((link, index) => (

                    <li key={index} className={`${styles.headerLink}`}>
                        <NavLink
                            to={link.url}
                            onClick={closeMenu}
                            aria-label={`Navigate to ${link.label}`}
                            className={({ isActive }) =>
                                isActive ? ` ${styles.linkActive}` : ""}
                        >
                            {link.label}
                        </NavLink>
                    </li>



                ))}
            </ul>

            {/* <div className={`${styles.offerStripContainer}`}>
                <Link target="_blank" to="https://api.whatsapp.com/send?phone=+919990587916&text=Hi, I am interested in your products. Can you please share some details ?">
                    <img
                        src="/images/offer2.gif"
                        alt="Kathiyawad Sweetes by Vishal Interior"
                        title="Offer by Kathiyawad Sweetes by Vishal Interior"
                        className={`${styles.offerStrip} ${styles.logoheight}`}
                    />
                </Link>
            </div> */}
        </header>
    )
}

export default Header
