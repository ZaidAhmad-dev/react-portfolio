"use client";

import { useEffect, useRef } from "react";
import Slider from "react-slick";
import testimonials from "@/data/testimonials.json";
import styles from "./Testimonial.module.css";

function NextArrow(props) {
    const { className, style, onClick } = props;
    return <button className={className} style={{ ...style, display: "block" }} onClick={onClick} />;
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return <button className={className} style={{ ...style, display: "block" }} onClick={onClick} />;
}

export default function Testimonial({ title = "What people are saying?" }) {
    const sliderRef = useRef(null);

    // If you REALLY need equal heights, keep this.
    // Better option is CSS with flex, but slick makes it tricky.
    useEffect(() => {
        const handleResize = () => {
            const track = document.querySelector(".slick-track");
            if (!track) return;
            const h = track.offsetHeight;

            document.querySelectorAll(".slick-slide").forEach((slide) => {
                slide.style.height = `${h}px`;
                const inner = slide.querySelector("div");
                if (inner) inner.style.height = "100%";
            });
        };

        window.addEventListener("resize", handleResize);
        const t = setTimeout(handleResize, 500);

        return () => {
            clearTimeout(t);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true, dots: true } },
            { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false } },
        ],
    };

    return (
        <section
            id="testimonial"
            className={`${styles.testimonials} portfolio-section`}
            data-aos="zoom-in-down"
            data-aos-duration="800"
            data-aos-delay="600"
            data-aos-once="true"
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <h2 className="title">{title}</h2>
                        </div>
                    </div>
                </div>

                <div className={styles.sliderWrap}>
                    <Slider ref={sliderRef} {...settings}>
                        {testimonials.map((t, index) => (
                            <div className={styles.slide} key={index}>
                                <div className={styles.card}>
                                    <div className={styles.header}>
                                        <h3 className={styles.name}>
                                            <span className={styles.primary}>{t.name}</span>
                                        </h3>
                                    </div>

                                    <div className={styles.body}>
                                        <h3 className={styles.heading}>{t.heading}</h3>
                                        <p className={styles.review}>{t.review}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}
