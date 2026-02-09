import Link from "next/link";
import CourseList from "./CourseList";
import styles from "./Course.module.css";

export default function CourseSection({
    title,
    courses,
    showViewAll = false,
    viewAllHref = "/courses",
}) {
    return (
        <section
            id="courses"
            className={`${styles.courses} portfolio-section`}
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <h2 className={`title ${styles.sectionTitle}`}>{title}</h2>
                        </div>
                    </div>
                </div>

                <CourseList courses={courses} />

                {showViewAll ? (
                    <Link href={viewAllHref} className={styles.viewAll}>
                        View all courses
                    </Link>
                ) : null}
            </div>
        </section>
    );
}
