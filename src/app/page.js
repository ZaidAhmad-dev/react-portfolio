import Banner from "@/components/banner/Banner";
import CourseSection from "@/components/courses/CourseSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import Testimonial from "@/components/testimonials/Testimonial";
import { getChannelPlaylists } from "@/lib/youtube";
// import Projects from "@/components/projects/Projects";
// import Testimonial from "@/components/testimonials/Testimonial";

export const metadata = {
  alternates: { canonical: "https://zaidahmaddev.com/" },
};

export default async function Page() {

  const courses = await getChannelPlaylists();

  // show a preview on homepage (e.g. 6)
  const preview = courses.slice(0, 6);

  return (
    <main className="main-page-wrapper">
      <Banner />
      <CourseSection
        title="Recommended Courses for You"
        courses={preview}
        showViewAll
        viewAllHref="/courses"
      />
      <Testimonial title="What people are saying?" />
      <ProjectsSection title="Latest Projects" limit={6} showViewAll />
    </main>
  );
}
