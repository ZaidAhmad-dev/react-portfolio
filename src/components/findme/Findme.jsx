import styles from "./Findme.module.css";
import SocialIcons from "../socialIcons/SocialIcons";
import banner from "@/data/banner.json";

export default function Findme({ variant = "slide" }) {
    return (
        <div className={styles.wrapper}>
            <span className={styles.title}>{banner.social_media_title || "Find me at"}</span>
            <SocialIcons variant={variant} />
        </div>
    );
}
