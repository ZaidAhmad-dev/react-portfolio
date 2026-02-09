"use client";

import { useEffect } from "react";
import Typed from "typed.js";
import banner from "@/data/banner.json";
import Image from "next/image";
import Findme from "../findme/Findme";
import styles from "./Banner.module.css";

export default function Banner() {
    useEffect(() => {
        const typed = new Typed(`.${styles.titleHeadline}`, {
            strings: ["Developer", "Instructor", "Mentor", "Content Creator"],
            typeSpeed: 120,
            backSpeed: 20,
            backDelay: 2000,
            startDelay: 1000,
            loop: true,
            showCursor: false,
        });

        return () => typed.destroy();
    }, []);

    return (
        <section id="home" className={styles.mainBanner}>
            <div className={styles.slide}>
                <div className="container">
                    <div className="row row--30 align-items-center">
                        <div
                            className="order-2 order-lg-1 col-lg-7"
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="300"
                        >
                            <div className={styles.content}>
                                <div className={styles.inner}>
                                    <h1 className={styles.title}>
                                        Hi, I’m <span className={styles.titleName}>{banner.title}</span>
                                        <br />
                                        <span>a </span>
                                        <span className={styles.titleHeadline} />
                                    </h1>

                                    <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
                                        <p className={styles.description}>
                                            I am a Full stack Developer, Instructor and Content Creator with 5+years of experience in modern technologies and framweworks like HTML, CSS, JavaScript, ReactJs, ReduxJS, Typescript, Nodejs, Expressjs, MySQL, MongoDB, Postgresql, Shopify, Wordpress and Webflow. I love teaching code and help others become better developers and there are <strong>200+</strong> happy clients and students. I also build Custom Shopify Themes, Setup Shopify E-Commerce Stores.</p>
                                    </div>
                                </div>

                                <div className="row" data-aos="fade-up" data-aos-duration="700" data-aos-delay="900">
                                    <div className="col-12">
                                        <Findme />
                                    </div>

                                    <div className={`col-12 ${styles.mtMobile30}`}>
                                        <div className={styles.skillShareInner}>
                                            <span className={styles.sectionLabel}>best skilled in</span>

                                            <ul className={styles.skillShare}>
                                                {banner?.technology_icons?.map((t, i) => (
                                                    <li key={i} className={styles.skillItem} aria-label={t.alt} title={t.alt}>
                                                        {t.url ? (
                                                            <Image src={t.url} alt={t.alt} width={32} height={32} />
                                                        ) : null}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="order-1 order-lg-2 col-lg-5">
                            <div className={styles.thumbnail}>
                                <div className={styles.thumbnailInner}>
                                    <Image
                                        src={banner.banner_img}
                                        alt="Zaid Ahmad"
                                        width={600}
                                        height={600}
                                        priority
                                        className={styles.heroImage}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
