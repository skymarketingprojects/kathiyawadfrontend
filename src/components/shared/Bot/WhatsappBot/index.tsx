import styles from "./WhatsappBot.module.css"
import { CONTACTS } from "../../../../utils/constants/contact";
import { STATIC_ICONS } from "../../../../utils/constants/image";
const WhatsappBot = () => {
    const handleClick = () => {
        window.open(`https://wa.me/+91${CONTACTS.PHONE1}`);
    }
    return (
        <div
            onClick={handleClick}
            className={`${styles.oneIconContainer}`}
        >
            <img className={`${styles.oneIcon} ${styles.whatsapp}`} src={STATIC_ICONS.WHATSAPPICON} alt="facebook" />
        </div>
    );
}
export default WhatsappBot;