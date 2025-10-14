import styles from "./Header.module.css"
import useHeaderPage from "./useHeaderPage"

const Header = () => {
    const { title } = useHeaderPage()
    return (
        <div className={styles.mainContainer}>
            <h1>{title}</h1>
        </div>
    )
}

export default Header
