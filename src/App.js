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
         <Course title="Recommended Courses for You"/>
    
         {/* Testimonials Component */}
		   <Testimonial title="Testimonials"/>
    
         {/* Projects Component */}
		   <Projects title="Latest Projects"/>
      </main>
    
       {/* Start Footer Area */}
      <Footer/>
   </div>
    
    
  );
}

export default App;
