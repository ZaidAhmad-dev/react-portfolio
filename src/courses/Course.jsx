import React from 'react'
import './course.css'

const Course = () => {
  return (
     <div id="courses" className="courses portfolio-section"  data-aos="fade-up" data-aos-duration="1000">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true"
                  className="section-title text-center aos-init aos-animate">
                  <h2 className="title">Recommended Courses for You</h2>
                </div>
              </div>
            </div>
        
            <div className="row">
               {/* Start Single Course */}
              <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true"
                className="col-lg-6 col-xl-4 col-md-6 col-12 aos-init aos-animate course-content">
                <div className="course" data-toggle="modal" data-target="#exampleModalCenter">
                  <div className="inner">
                    <div className="thumbnail">
                      <a href="https://www.youtube.com/playlist?list=PL-MmPNMopyaJ725rQQ0GQ70IPm1cEkyfK" aria-label="Zaid YouTube Course" target="_blank" rel="noopener noreferrer">
                        <img src="images/courses/OOP-Thumbnail.png" alt="Zaid OOP Course"/>
                      </a>
                    </div>
                    <div className="content">
                      <div className="category-info">
                        <div className="category-list">
                          <button type='button'>English</button>
                        </div>
                      </div>
                      <h3 className="title"><a href="https://www.youtube.com/playlist?list=PL-MmPNMopyaJ725rQQ0GQ70IPm1cEkyfK" aria-label="Zaid YouTube Course" target="_blank" rel="noopener noreferrer">Object Oriented Programming with JavaScript</a></h3>
                    </div>
                  </div>
                </div>
              </div>
               {/* End Single Course */}
    
               {/* Start Single Course */}
              <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true"
                className="col-lg-6 col-xl-4 col-md-6 col-12 aos-init aos-animate course-content">
                <div className="course" data-toggle="modal" data-target="#exampleModalCenter">
                  <div className="inner">
                    <div className="thumbnail">
                      <a href="https://www.youtube.com/playlist?list=PL-MmPNMopyaKUXMCthMIpMt51CQhhIujo" aria-label="Vanilla JavaScript Projects by Zaid" target="_blank" rel="noopener noreferrer">
                        <img src="images/courses/vanilla-javascript-projects.png" alt="Vanilla JavaScript Project"/>
                      </a>
                    </div>
                    <div className="content">
                      <div className="category-info">
                        <div className="category-list">
                        <button type='button'>English</button>
                        </div>
                      </div>
                      <h3 className="title"><a href="https://www.youtube.com/playlist?list=PL-MmPNMopyaKUXMCthMIpMt51CQhhIujo" aria-label="Vanilla JavaScript Projects by Zaid" target="_blank" rel="noopener noreferrer">Vanilla JavaScript Projects</a></h3>
                    </div>
                  </div>
                </div>
              </div>
               {/* End Single Course */}
    
               {/* Start Single Course */}
              <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true"
                className="col-lg-6 col-xl-4 col-md-6 col-12 aos-init aos-animate course-content">
                <div className="course" data-toggle="modal" data-target="#exampleModalCenter">
                  <div className="inner">
                    <div className="thumbnail">
                      <a href="https://www.youtube.com/playlist?list=PL-MmPNMopyaKUXMCthMIpMt51CQhhIujo" aria-label="Introduction to JavaScript Course by Zaid" target="_blank" rel="noopener noreferrer">
                        <img src="images/courses/what-is-javascript.png" alt="Introduction to JavaScript"/>
                      </a>
                    </div>
                    <div className="content">
                      <div className="category-info">
                        <div className="category-list">
                          <button type='button'>Urdu</button>
                        </div>
                      </div>
                      <h3 className="title"><a href="https://www.youtube.com/playlist?list=PL-MmPNMopyaKUXMCthMIpMt51CQhhIujo" aria-label="Zaid YouTube Course" target="_blank" rel="noopener noreferrer">Introduction to JavaScript</a></h3>
                    </div>
                  </div>
                </div>
              </div>
               {/* End Single Course */}
    
               {/* Start Single Course */}
              <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true"
                className="col-lg-6 col-xl-4 col-md-6 col-12 aos-init aos-animate course-content">
                <div className="course" data-toggle="modal" data-target="#exampleModalCenter">
                  <div className="inner">
                    <div className="thumbnail">
                      <a href="https://www.youtube.com/playlist?list=PL-MmPNMopyaLVUok6SzZ9C1Gz9dsgRkmf" aria-label="Modern JavaScript ES6 by Zaid" target="_blank" rel="noopener noreferrer">
                        <img src="images/courses/ES6.png" alt="Modern Javascript ES6 by Zaid"/>
                      </a>
                    </div>
                    <div className="content">
                      <div className="category-info">
                        <div className="category-list">
                          <button type='button'>Urdu</button>
                        </div>
                      </div>
                      <h3 className="title"><a href="https://www.youtube.com/playlist?list=PL-MmPNMopyaLVUok6SzZ9C1Gz9dsgRkmf" aria-label="Modern JavaScript ES6" target="_blank" rel="noopener noreferrer">Modern JavaScript ES6</a></h3>
                    </div>
                  </div>
                </div>
              </div>
               {/* End Single Course */}
    
               {/* Start Single Course */}
              <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true"
                className="col-lg-6 col-xl-4 col-md-6 col-12 aos-init aos-animate course-content">
                <div className="course" data-toggle="modal" data-target="#exampleModalCenter">
                  <div className="inner">
                    <div className="thumbnail">
                      <a href="https://www.youtube.com/playlist?list=PL-MmPNMopyaKVZwh6DnkbX7snLwQi-Qtl" aria-label="HTML Template using Bootstrap4 by Zaid" target="_blank" rel="noopener noreferrer">
                        <img src="images/courses/bootstrap-template.png" alt="HTML Template using Bootstrap4 by Zaid"/>
                      </a>
                    </div>
                    <div className="content">
                      <div className="category-info">
                        <div className="category-list">
                          <button type='button'>Urdu</button>
                        </div>
                      </div>
                      <h3 className="title"><a href="https://www.youtube.com/playlist?list=PL-MmPNMopyaKVZwh6DnkbX7snLwQi-Qtl" aria-label="Zaid YouTube Course" target="_blank" rel="noopener noreferrer">HTML Template using Boostrap4</a></h3>
                    </div>
                  </div>
                </div>
              </div>
               {/* End Single Course */}
            </div>
          </div>
        </div>
  )
}

export default Course