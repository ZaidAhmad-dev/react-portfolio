import Banner from '../../components/banner/Banner';
import Course from '../../components/courses/Course';
import Projects from '../../components/projects/Projects';
import Testimonial from '../../components/testimonials/Testimonial';

const Home = () => {
  return (
	<>
		<main className="main-page-wrapper">
			<Banner />       
			<Course title="Recommended Courses for You"/>
			<Testimonial title="Testimonials"/>
			<Projects title="Latest Projects"/>
		</main>
	</>
  )
}

export default Home