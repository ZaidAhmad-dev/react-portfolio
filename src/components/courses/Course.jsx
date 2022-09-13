import CourseList from './CourseList';
import './course.css'

const Course = ({ title }) => {

	return (
		<div id="courses" className="courses portfolio-section" data-aos="fade-up" data-aos-duration="1000">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true"
							className="section-title text-center aos-init aos-animate">
							<h2 className="title">{title}</h2>
						</div>
					</div>
				</div>
				<CourseList/>
			</div>
		</div>
	)
}

export default Course;