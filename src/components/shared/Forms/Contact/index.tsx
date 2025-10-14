import styles from "./Contact.module.css"
import useContactPage from "./useContactPage"

const Contact = () => {
    const { title } = useContactPage()
    return (
        <div className={styles.mainContainer}>
            <h1>{title}</h1>
        </div>
    )
}

export default Contact
