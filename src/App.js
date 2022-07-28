import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home/Home';
import './App.css';
import NotFound from './pages/NotFound/NotFound';

function App() {
	return (
		<>
			<Header />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="*" element={<NotFound/>} />
				</Routes>
			<Footer/>			
		</>
	);
}

export default App;
