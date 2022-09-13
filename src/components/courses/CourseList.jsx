import { useContext } from 'react';
import { CourseContext } from '../../Contexts/CourseContext';
import './course.css';

const CourseList = () => {
	const { searchValue, setSearchValue, courses } = useContext(CourseContext);
	const youtubeUrl = "https://www.youtube.com/playlist?list=";

	return (
		<div className="row w-100">
			{courses.length > 0 && courses.filter((course) => {
				if (searchValue === "") {
					return course;
				} else if (course?.snippet?.title.toLowerCase().includes(searchValue.toLowerCase())) {
					return course;
				}
			}).map((course, index) => (
				<div key={index} data-aos="fade-up" data-aos-delay="100" data-aos-once="true"
					className="col-lg-6 col-xl-4 col-md-6 col-12 aos-init aos-animate course-content">
					<div className="course" data-toggle="modal" data-target="#exampleModalCenter">
						<div className="inner">
							<div className="thumbnail">
								<a href={`${youtubeUrl}${course?.id}`} title={course?.snippet?.title} aria-label={course?.snippet?.title} target="_blank" rel="noopener noreferrer">
									<img src={course?.snippet?.thumbnails?.medium?.url} alt={course?.snippet?.title} />
								</a>
								</div>
							<div className="content">
								<div className="category-info">
									<div className="category-list">
										<span className='course-date'>{course?.snippet?.publishedAt.split("T")[0]}</span>
									</div>
								</div>
								<h3 className="title"><a href={`${youtubeUrl}${course?.id}`} title={course?.snippet?.title} aria-label={course?.snippet?.title} target="_blank" rel="noopener noreferrer">{course?.snippet?.title}</a></h3>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default CourseList