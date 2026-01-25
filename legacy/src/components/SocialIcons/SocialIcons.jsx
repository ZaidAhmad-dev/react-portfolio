import { FiLinkedin, FiGithub, FiYoutube } from "react-icons/fi";
import './SocialIcons.css'

const SocialIcons = () => {
    const socialIcons = [
        {
            label: "LinkedIn",
            icon: <FiLinkedin />,
            url: "https://www.linkedin.com/in/zaidahmaddev",
        },
        {
            label: "YouTube",
            icon: <FiYoutube />,
            url: "https://www.youtube.com/zaidahmad",
        },
        {
            label: "Github",
            icon: <FiGithub />,
            url: "https://github.com/zaidahmad-dev",
        }
    ];

    return (
        <ul className="social-share d-flex liststyle">
            {socialIcons.map((social, index) => (
                <li key={index} className="social-icon"><a rel="noopener noreferrer" aria-label={social.label} href={social.url}
                    target="_blank">
                    {social.icon}
                </a></li>
            ))}
        </ul>
    )
}

export default SocialIcons