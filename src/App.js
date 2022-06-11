import './App.css';
import Banner from './banner/Banner';
import Course from './courses/Course';
import Footer from './footer/Footer';
import Header from './header/Header';
import Projects from './projects/Projects';
import Testimonial from './testimonials/Testimonial';

function App() {
  return (
   <div>
      {/* Header Component */}
      <Header />
    
      <main className="main-page-wrapper">
         {/* Banner Component */}
        <Banner />       
    
        {/* Courses Component */}
        <Course />
    
        {/* Testimonials Component */}
		<Testimonial />
    
        {/* Projects Component */}
		<Projects />
      </main>
    
       {/* Start Footer Area */}
      <Footer/>
   </div>
    
    
  );
}

export default App;
