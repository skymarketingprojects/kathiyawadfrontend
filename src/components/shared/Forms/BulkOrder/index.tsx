import styles from "./BulkOrder.module.css"
import useBulkOrderPage from "./useBulkOrderPage"

const BulkOrder = () => {
    const { formData, handleChange, handleSubmit } = useBulkOrderPage()
    return (
        <div className={styles.formContainer}>
            <h2 className={styles.header}>Bulk Order Inquiry Form!</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="company" className={styles.label}>
                    Company / Event Name (Optional)
                </label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="e.g., XYZ Corp. or Sharma Wedding"
                    value={formData.company}
                    onChange={handleChange}
                    className={styles.inputField}
                />

                <label htmlFor="contactPerson" className={styles.label}>
                    Contact Person Name
                </label>
                <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    placeholder="Full Name"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    className={styles.inputField}
                />

                <label htmlFor="email" className={styles.label}>
                    Email Address
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.inputField}
                />

                <label htmlFor="phone" className={styles.label}>
                    Phone Number
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+91"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.inputField}
                />

                <label htmlFor="eventType" className={styles.label}>
                    Type of Event / Occasion
                </label>
                <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className={styles.inputField}
                >
                    <option value="">Select One</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate</option>
                    <option value="birthday">Birthday</option>
                </select>

                <label htmlFor="quantity" className={styles.label}>
                    Estimated Quantity / Number of Boxes
                </label>
                <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    placeholder="Minimum 50"
                    value={formData.quantity}
                    onChange={handleChange}
                    className={styles.inputField}
                />

                <label htmlFor="deliveryDate" className={styles.label}>
                    Required Delivery Date
                </label>
                <input
                    type="date"
                    id="deliveryDate"
                    name="deliveryDate"
                    value={formData.deliveryDate}
                    onChange={handleChange}
                    className={styles.inputField}
                />

                <label htmlFor="requirements" className={styles.label}>
                    Specific Product & Packaging Requirements
                </label>
                <textarea
                    id="requirements"
                    name="requirements"
                    placeholder="e.g., We need 100 boxes of Assorted Fruit Bites with custom logo stickers..."
                    value={formData.requirements}
                    onChange={handleChange}
                    className={styles.textarea}
                ></textarea>

                <button type="submit" className={styles.submitButton}>
                    Submit Bulk Inquiry
                </button>
            </form>
        </div>
    )
}

export default BulkOrder
