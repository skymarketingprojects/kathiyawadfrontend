import styles from "./Contact.module.css"
import useContactPage from "./useContactPage"

const Contact = () => {
    const { formData, handleChange, handleSubmit } = useContactPage()
    return (
        <div className={styles.formContainer}>
            <h2 className={styles.header}>General Inquiry / Feedback</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name" className={styles.label}>
                    Your Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="e.g., Akshay Sharma"
                    value={formData.name}
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

                <label htmlFor="subject" className={styles.label}>
                    Subject
                </label>
                <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={styles.inputField}
                >
                    <option value="">Select Inquiry Type</option>
                    <option value="general">General Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="support">Support</option>
                </select>

                <label htmlFor="message" className={styles.label}>
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.textarea}
                ></textarea>

                <button type="submit" className={styles.submitButton}>
                    Send Message
                </button>
            </form>
        </div>

    )
}

export default Contact
