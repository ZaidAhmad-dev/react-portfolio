import React from 'react'
import './projects.css'

const Projects = () => {
  return (
    <div id="projects" className="projects portfolio-section" data-aos="fade-up" data-aos-duration="1000">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true"
            className="section-title text-center aos-init aos-animate">
            <h2 className="title">Latest Projects</h2>
          </div>
        </div>
      </div>
  
      <div className="row">
         {/* Start Single Project */}
        <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true"
          className="col-lg-6 col-xl-4 col-md-6 col-12 aos-init aos-animate project-content">
          <div className="project" data-toggle="modal" data-target="#exampleModalCenter">
            <div className="inner">
              <div className="thumbnail">
                <a href="https://netflix-clone-532dd.web.app/" aria-label="NETFLIX project with React by Zaid" target="_blank" rel="noopener noreferrer">
                  <img src="images/projects/netflix.jpg" alt="project"/>
                </a>
              </div>
              <div className="content">
                <h4 className="title">NETFLIX CLONE using ReactJS with MoviesDB API</h4>
                <a href="https://netflix-clone-532dd.web.app/" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>
        </div>
         {/* End Single Project */}

         {/* Start Single Project */}
        <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true"
          className="col-lg-6 col-xl-4 col-md-6 col-12 aos-init aos-animate project-content">
          <div className="project" data-toggle="modal" data-target="#exampleModalCenter">
            <div className="inner">
              <div className="thumbnail">
                <a href="https://covid-19-tracker-f43cc.web.app/" aria-label="COVID-19 Tracker App by" target="_blank" rel="noopener noreferrer">
                  <img src="images/projects/covid.jpg" alt="project"/>
                </a>
              </div>
              <div className="content">
                <h4 className="title">COVID-19 Live Tracker</h4>
                <a href="https://covid-19-tracker-f43cc.web.app/" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>
        </div>
         {/* End Single Project */}

         {/* Start Single Project */}
        <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true"
          className="col-lg-6 col-xl-4 col-md-6 col-12 aos-init aos-animate project-content">
          <div className="project" data-toggle="modal" data-target="#exampleModalCenter">
            <div className="inner">
              <div className="thumbnail">
                <a href="https://gpt3-responsive-landing-page.netlify.app/" aria-label="GPT3 responsive page by Zaid" target="_blank" rel="noopener noreferrer">
                  <img src="images/projects/gpt3.jpg" alt="project"/>
                </a>
              </div>
              <div className="content">
                <h4 className="title">GPT3 Landing Page</h4>
                <a href="https://gpt3-responsive-landing-page.netlify.app/" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>
        </div>
         {/* End Single Project */}
      </div>
    </div>
</div>
)}

export default Projects