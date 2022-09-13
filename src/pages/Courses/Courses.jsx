import axios from "axios";
import { useState, useEffect, createContext } from 'react';
import CourseList from '../../components/courses/CourseList';
import Search from "../../components/search/Search";
import './courses.css';

// export const CourseContext = createContext();

const Courses = () => {

    const [searchValue, setSearchValue] = useState('');
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		const options = {
			method: 'GET',
			url: 'https://youtube.googleapis.com/youtube/v3/playlists',
			params: {
				part: 'snippet',
				maxResults: 50,
				channelId: import.meta.env.VITE_CHANNEL_ID,
				key: import.meta.env.VITE_YOUTUBE_API_KEY
			}
		};

		axios.request(options).then(function (response) {
			setCourses(response.data.items);
		}).catch(function (error) {
			console.error(error);
		});
	}, []);

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