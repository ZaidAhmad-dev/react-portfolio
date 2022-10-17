import CourseList from '../../components/courses/CourseList';
import Search from "../../components/search/Search";
import './courses.css';

const Courses = () => {

	return (
		<>
			<div className="courses portfolio-section position-relative"  data-aos="fade-up" data-aos-duration="1000">
				<div className="container">
					<div className="row">
						<Search/>
						<CourseList/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Courses;