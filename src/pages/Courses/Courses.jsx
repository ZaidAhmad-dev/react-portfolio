import axios from 'axios';
import { useEffect } from 'react';
import CourseList from '../../components/courses/CourseList';
import Search from "../../components/search/Search";
import { useContext } from 'react';
import './courses.css';
import { CourseContext } from '../../Contexts/CourseContext';

const Courses = () => {

	useEffect(() => {
		// https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLB03EA9545DD188C3&key=AIzaSyCCe49ArBE3ZDLgQJeQOnYZgbOQigeadFc
		const options = {
			method: 'GET',
			url: 'https://youtube.googleapis.com/youtube/v3/playlistItems',
			params: {
				part: 'snippet',
				maxResults: 50,
				playlistId: 'PLB03EA9545DD188C3',
				key: import.meta.env.VITE_YOUTUBE_API_KEY
			}
		};

		axios.request(options).then(function (response) {
			console.log(response.data);
		}
		).catch(function (error) {
			console.error(error);
		}
		);

	}, []);

	return (
		<>
			<div className="courses portfolio-section position-relative" data-aos="fade-up" data-aos-duration="1000">
				<div className="container">
					<div className="row">
						<Search />
						<CourseList />
					</div>
				</div>
			</div>
		</>
	)
}

export default Courses;