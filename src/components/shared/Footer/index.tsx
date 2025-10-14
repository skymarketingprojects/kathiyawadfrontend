import styles from "./Footer.module.css"
import useFooterPage from "./useFooterPage"

const Footer = () => {
    const { title } = useFooterPage()
    return (
        <div className={styles.mainContainer}>
            <h1>{title}</h1>
        </div>
    )
}

export default Footer
