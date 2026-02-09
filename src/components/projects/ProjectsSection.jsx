import Link from "next/link";
import Image from "next/image";
import projects from "@/data/projects.json";
import styles from "./Projects.module.css";

export default function ProjectsSection({
    title = "Latest Projects",
    limit,
    showViewAll = false,
    viewAllHref = "/projects",
}) {
    const items = Array.isArray(projects) ? projects : [];
    const list = typeof limit === "number" ? items.slice(0, limit) : items;

    return (
        <section id="projects" className={`${styles.projects} portfolio-section`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <h2 className="title">{title}</h2>
                        </div>
                    </div>
                </div>

                <div className={styles.grid}>
                    {list.map((project, index) => (
                        <article
                            key={project?.id ?? index}
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay="200"
                            data-aos-once="true"
                            className={styles.card}
                        >
                            <div className={styles.inner}>
                                <div className={styles.thumbnail}>
                                    <a
                                        href={project.url}
                                        aria-label={project.alt || project.title}
                                        title={project.alt || project.title}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {project.image ? (
                                            <Image
                                                src={project.image}
                                                alt={project.alt || project.title}
                                                width={900}
                                                height={540}
                                                className={styles.image}
                                            />
                                        ) : null}
                                    </a>
                                </div>

                                <div className={styles.content}>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>

                                    <a
                                        href={project.url}
                                        title={project.alt || project.title}
                                        className={`btn btn-primary ${styles.button}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {project.button_label}
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {showViewAll ? (
                    <Link href={viewAllHref} className={styles.viewAll}>
                        View all projects
                    </Link>
                ) : null}
            </div>
        </section>
    );
}
