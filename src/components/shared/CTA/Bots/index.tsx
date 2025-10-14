import MessageBot from "../../Bot/Messages"
import WhatsappBot from "../../Bot/WhatsappBot"
import EmailBot from "../../Bot/EmailBot"
import styles from "./Bots.module.css"
const Bots = () => {
    return (
        <div className={styles.botsContainer}>
            <MessageBot />
            <WhatsappBot />
            <EmailBot />
        </div>
    )
}
export default Bots;