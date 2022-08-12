import { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';
import Course from '../../components/courses/Course';
import './courses.css';

const Courses = ({title}) => {
	return (
		<>
			<div id="courses" className="courses portfolio-section"  data-aos="fade-up" data-aos-duration="1000">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							{['Primary'].map(
      						  	(variant) => (
      						  	  <SplitButton
      						  	    key={variant}
      						  	    id={`dropdown-split-variants-${variant}`}
      						  	    variant={variant.toLowerCase()}
									toggleLabel="All"
      						  	    title="Category">
      						  	    <Dropdown.Item eventKey="1" active>Action</Dropdown.Item>
      						  	    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
      						  	    <Dropdown.Item eventKey="3">Active Item</Dropdown.Item>
      						  	    <Dropdown.Item eventKey="3">Active Item</Dropdown.Item>
      						  	    <Dropdown.Item eventKey="3">Active Item</Dropdown.Item>
      						  	    <Dropdown.Item eventKey="3">Active Item</Dropdown.Item>
								  </SplitButton>
      						  	),
      						)}
						</div>
					</div>
				</div>
			</div>
			<Course/>
		</>
	)
}

export default Courses;