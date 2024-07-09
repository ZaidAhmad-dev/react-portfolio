import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Courses from './pages/Courses/Courses';
// import AOS from 'aos';
// import "aos/dist/aos.css";
import './App.css';
import { CourseContext } from './Contexts/CourseContext';
import axios from 'axios';
import Clients from './pages/Clients/Clients';
import Projects from './components/projects/Projects';

function App() {
	const [searchValue, setSearchValue] = useState('');
	const [courses, setCourses] = useState([]);

	// useEffect(() => {
	// 	AOS.init();
	// 	AOS.refresh();
	// }, []);

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
		<CourseContext.Provider value={{ searchValue, setSearchValue, courses }}>
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/courses" element={<Courses title="" />} />
				<Route path="/clients" element={<Clients/>} />
				<Route path="/projects" element={<Projects title="Latest Projects"/>} />
				<Route path="*" element={<NotFound />} ></Route>
			</Routes>
			<Footer />
		</CourseContext.Provider>
	);
}

export default App;
