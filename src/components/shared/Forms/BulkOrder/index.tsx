import styles from "./BulkOrder.module.css"
import useBulkOrderPage from "./useBulkOrderPage"

const BulkOrder = () => {
    const { title } = useBulkOrderPage()
    return (
        <div className={styles.mainContainer}>
            <h1>{title}</h1>
        </div>
    )
}

export default BulkOrder
