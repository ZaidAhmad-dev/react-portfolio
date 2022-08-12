import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Courses from './pages/Courses/Courses';
import AOS from 'aos';
import "aos/dist/aos.css";
import './App.css';

function App() {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<>
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/courses" element={<Courses title="" />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
