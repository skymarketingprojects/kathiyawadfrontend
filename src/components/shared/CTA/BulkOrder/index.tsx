import styles from "./BulkOrder.module.css"


const BulkOrder = () => {

    return (
        <div className={`container ${styles.mainContainer}`}>
            <div className={styles.content}>
                <h2 className={styles.heading}>Planning a Grand Celebration?</h2>
                <p className={styles.subheading}>
                    We specialize in fulfilling <strong>Large and Bulk Orders</strong> for:
                </p>
                <div className={styles.tags}>
                    <span className={styles.tag}>Corporate Gifting</span>
                    <span className={styles.tag}>Weddings & Events</span>
                    <span className={styles.tag}>Festive Hampers</span>
                </div>
                <p className={styles.description}>
                    Get custom packaging, special pricing, and nationwide delivery for your gifting needs.
                </p>
                <button className={styles.button}>Book a bulk order</button>
            </div>
        </div>
    )
}

export default BulkOrder
