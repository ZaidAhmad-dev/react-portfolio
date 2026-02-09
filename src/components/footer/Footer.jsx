import footer from "@/data/banner.json";
import SocialIcons from "../socialIcons/SocialIcons";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`${styles.footerWrapper} portfolio-section`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className={styles.footerArea}>
                            <div className={styles.logo}>
                                <a
                                    className={styles.logoLink}
                                    href="https://zaidahmaddev.com"
                                    title={footer.title}
                                >
                                    <Image
                                        src={footer.banner_img}
                                        alt={footer.title}
                                        width={100}
                                        height={100}
                                        className={styles.logoImg}
                                    />
                                </a>
                            </div>

                            <div className={styles.socialWrap}>
                                {/* use footer variant so your SocialIcons footer styles apply */}
                                <SocialIcons variant="footer" />
                            </div>

                            <p className={styles.description}>
                                © {currentYear}. All rights reserved by{" "}
                                <a href="https://www.zaidahmaddev.com">Zaid Ahmad.</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
