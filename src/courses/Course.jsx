import React from 'react'
import './course.css'
import courses from '../data/courses.json';

const Course = ({title}) => {


	return (
		 <div id="courses" className="courses portfolio-section"  data-aos="fade-up" data-aos-duration="1000">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true"
									className="section-title text-center aos-init aos-animate">
									<h2 className="title">{title}</h2>
								</div>
							</div>
						</div>
				
						<div className="row">
							{courses.map(course => (
								<div data-aos="fade-up" data-aos-delay="100" data-aos-once="true"
								className="col-lg-6 col-xl-4 col-md-6 col-12 aos-init aos-animate course-content">
								<div className="course" data-toggle="modal" data-target="#exampleModalCenter">
									<div className="inner">
										<div className="thumbnail">
											<a href={course.url} aria-label={course.alt} target="_blank" rel="noopener noreferrer">
												<img src={course.image} alt={course.alt}/>
											</a>
										</div>
										<div className="content">
											<div className="category-info">
												<div className="category-list">
													<button type='button'>{course.language}</button>
												</div>
											</div>
											<h3 className="title"><a href={course.url} aria-label={course.alt} target="_blank" rel="noopener noreferrer">{course.title}</a></h3>
										</div>
									</div>
								</div>
							</div>	
							))}
						</div>
					</div>
				</div>
	)
}

export default Course;