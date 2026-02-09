import CourseList from "./CourseList";
import styles from "./Course.module.css";

export default function CoursesPage({ title, courses }) {
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
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="100"
                            data-aos-once="true"
                            className="section-title text-center"
                        >
                            <h2 className={styles.sectionTitle}>{title}</h2>
                        </div>
                    </div>
                </div>

                {/* Search removed */}
                <CourseList courses={courses} />
            </div>
        </section>
    );
}
