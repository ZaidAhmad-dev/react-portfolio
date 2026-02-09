// SocialIcons.jsx
import Link from "next/link";
import { FiLinkedin, FiGithub, FiYoutube } from "react-icons/fi";
import styles from "./SocialIcons.module.css";

const ICONS = [
    { label: "LinkedIn", icon: FiLinkedin, url: "https://www.linkedin.com/in/zaidahmaddev" },
    { label: "YouTube", icon: FiYoutube, url: "https://www.youtube.com/zaidahmad" },
    { label: "Github", icon: FiGithub, url: "https://github.com/zaidahmad-dev" },
];

export default function SocialIcons({ variant = "slide" }) {
    return (
        <ul className={`${styles.list} ${styles[variant]}`}>
            {ICONS.map(({ label, icon: Icon, url }) => (
                <li key={label} className={styles.item}>
                    <Link
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        title={label}
                        className={styles.link}
                    >
                        <Icon className={styles.icon} />
                    </Link>
                </li>
            ))}
        </ul>
    );
}
