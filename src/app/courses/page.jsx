import { getChannelPlaylists } from "@/lib/youtube";
import CoursesPage from "@/components/courses/CoursesPage";

export const metadata = {
    title: "Courses",
    alternates: { canonical: "https://zaidahmaddev.com/courses" },
};

export default async function Page() {
    const courses = await getChannelPlaylists();

    return <CoursesPage title="All Courses" courses={courses} />;
}
