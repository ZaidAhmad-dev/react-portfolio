import React from 'react'
import './projects.css'
import projects from '../data/projects.json';
import { useEffect } from 'react';

const Projects = ({title}) => {


  useEffect(() => {
    const height = document.querySelector('.projects .project-content .project .inner .content .title').offsetHeight
    // setting this height to all the other ".projects .project-content .project .inner .content"
    document.querySelectorAll('.projects .project-content .project .inner .content .title').forEach(function(item) {
      item.style.height = height + 'px';
    })
  }, [])

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

      {projects.map((project, index) => (
         <div key={index} data-aos="fade-up" data-aos-delay="100" data-aos-once="true"
         className="col-lg-6 col-xl-4 col-md-6 col-12 aos-init aos-animate project-content">
         <div className="project" data-toggle="modal" data-target="#exampleModalCenter">
           <div className="inner">
             <div className="thumbnail">
               <a href={project.url} aria-label={project.alt} title={project.alt} target="_blank" rel="noopener noreferrer">
                 <img src={project.image} alt={project.alt}/>
               </a>
             </div>
             <div className="content">
               <h3 className="title">{project.title}</h3>
               <a href={project.url} title={project.alt} className="btn btn-primary">{project.button_label}</a>
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