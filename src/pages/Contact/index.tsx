import styles from "./Contact.module.css"
import ContactForm from "../../components/shared/Forms/Contact"
import { BulkOrder } from "../../components/shared/Forms"
// import useContactPage from "./useContactPage"

const Contact = () => {
    // const { title } = useContactPage()
    return (
        <div className={styles.container}>

            <div className={`container ${styles.headingContainer}`}>
                <h1 className={styles.heading}>{"Let's Get In Touch"}</h1>
                <p className={styles.subHeading}>{"Exploring the rich history,cultural significance, and art of the handcrafted treats"
                }
                </p>
            </div>
            <section className={`container ${styles.contactSection}`}>
                <div className={styles.contactContainer}>
                    <h2 className={styles.header}>Reach Out Directly</h2>

                    <div className={styles.contactItem}>
                        <h3 className={styles.subHeader}>Customer Support</h3>
                        <p className={styles.contactDetails}>
                            Email: <a href="mailto:support@kathiyawadtreats.in">support@kathiyawadtreats.in</a>
                        </p>
                        <p className={styles.contactDetails}>
                            Phone: <a href="tel:+919876543210">+91 98765 43210</a> (Mon-Sat, 10am - 6pm)
                        </p>
                    </div>

                    <div className={styles.contactItem}>
                        <h3 className={styles.subHeader}>Our Head Office</h3>
                        <p className={styles.contactDetails}>
                            Kathiyawad Treats Pvt. Ltd.
                        </p>
                        <p className={styles.contactDetails}>
                            101, Heritage Centre, Near Palace Road, Rajkot, Gujarat - 360001
                        </p>
                    </div>
                </div>
                <ContactForm />
            </section>
            <div className={`container ${styles.headingContainer}`}>
                <h1 className={styles.heading}>{"Book a bulk Order"}</h1>
                <p className={styles.subHeading}>{"Exploring the rich history,cultural significance, and art of the handcrafted treats"
                }
                </p>
            </div>
            <BulkOrder />
        </div>
    )
}

export default Contact
