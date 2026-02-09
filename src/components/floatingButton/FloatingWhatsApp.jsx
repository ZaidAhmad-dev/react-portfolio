import { FaWhatsapp } from "react-icons/fa";
import styles from "./FloatingWhatsApp.module.css";

const phoneNumber = "19104180395";
const defaultMessage =
    "Hi Zaid, I’d like to discuss hiring you for a Shopify/WordPress/MERN project. Can we chat?";

export default function FloatingWhatsApp() {
    const href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

    return (
        <a
            href={href}
            className={styles.button}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp"
        >
            <FaWhatsapp className={styles.icon} />
        </a>
    );
}
