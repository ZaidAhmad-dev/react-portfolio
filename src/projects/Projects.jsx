import React from 'react'
import './projects.css'
import projects from '../data/projects.json';

const Projects = ({title}) => {
  return (
    <div id="projects" className="projects portfolio-section" data-aos="fade-up" data-aos-duration="1000">
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

      {projects.map(project => (
         <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true"
         className="col-lg-6 col-xl-4 col-md-6 col-12 aos-init aos-animate project-content">
         <div className="project" data-toggle="modal" data-target="#exampleModalCenter">
           <div className="inner">
             <div className="thumbnail">
               <a href={project.url} aria-label={project.alt} target="_blank" rel="noopener noreferrer">
                 <img src={project.image} alt={project.alt}/>
               </a>
             </div>
             <div className="content">
               <h4 className="title">{project.title}</h4>
               <a href={project.url} className="btn btn-primary">{project.button_label}</a>
             </div>
           </div>
         </div>
       </div>
      ))}
        
      </div>
    </div>
</div>
)}

export default Projects