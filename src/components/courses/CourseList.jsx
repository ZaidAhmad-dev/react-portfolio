import Image from "next/image";
import styles from "./Course.module.css";

export default function CourseList({ courses }) {
    const youtubeUrl = "https://www.youtube.com/playlist?list=";

    return (
        <div className={styles.grid}>
            {courses?.map((course, index) => {
                const title = course?.snippet?.title ?? "Course";
                const href = `${youtubeUrl}${course?.id}`;
                const img = course?.snippet?.thumbnails?.medium?.url;
                const date = course?.snippet?.publishedAt?.split("T")?.[0];

                return (
                    <article
                        key={course?.id ?? index}
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-once="true"
                        className={styles.course}
                    >
                        <div className={styles.inner}>
                            <div className={styles.thumbnail}>
                                <a
                                    href={href}
                                    title={title}
                                    aria-label={title}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {img ? (
                                        <Image
                                            src={img}
                                            alt={title}
                                            width={480}
                                            height={270}
                                            className={styles.thumbImg}
                                        />
                                    ) : null}
                                </a>
                            </div>

                            <div className={styles.content}>
                                {date ? <span className={styles.courseDate}>{date}</span> : null}

                                <h3 className={styles.title}>
                                    <a
                                        href={href}
                                        title={title}
                                        aria-label={title}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.titleLink}
                                    >
                                        {title}
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </article>
                );
            })}
        </div>
    );
}
