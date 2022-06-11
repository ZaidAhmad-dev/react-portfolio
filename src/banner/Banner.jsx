import React from 'react'
import './banner.css'

const Banner = () => {
  return (
    <div id="home" className="main-banner">
    <div className="slide">
      <div className="container">
        <div className="row row--30 align-items-center">
          <div className="order-2 order-lg-1 col-lg-7" data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
            <div className="content">
              <div className="inner">
                <h1 className="title">Hi, I’m <span className="title-name">Zaid Ahmad</span><br/>
                  <span className="header-caption" id="page-top">
                     {/* type headline star */}
                    <span className="cd-headline clip is-full-width">
                      <span className="title-a">a </span>
                       {/* ROTATING TEXT */}
                      <span className="cd-words-wrapper">
                        <b className="is-visible">Developer.</b>
                        <b className="is-hidden">Instructor.</b>
                        <b className="is-hidden">Mentor.</b>
                        <b className="is-hidden">Content Creator.</b>
                      </span>
                    </span>
                     {/* type headline end */}
                  </span>
                </h1>
                <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
                  <p className="description">I am a Front-end Developer, Instructor and Content
                    Creator with 4+years of experience in modern technologies and framweworks
                    like HTML, CSS, JavaScript, ReactJs, jQuery, Bootstrap, Shopify Liquid. I love teaching code and help others become better developers and there are <strong>100+</strong> happy Students. I also build Custom Shopify Themes, Setup Shopify E-Commerce Stores.</p>
                </div>
              </div>
              <div className="row" data-aos="fade-up" data-aos-duration="700" data-aos-delay="900">
                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12">
                  <div className="social-share-inner-left">
                    <span className="title">find me at</span>
                    <ul className="social-share d-flex liststyle">
                      <li className="facebook"><a rel="noopener noreferrer" aria-label="Zaid Facebook Link" href="https://www.facebook.com/ZaidAhmad.Codes/"
                          target="_blank"><i data-feather="facebook"></i></a></li>
                      <li className="linkedin"><a rel="noopener noreferrer" aria-label="Zaid Linkedin Link" href="https://www.linkedin.com/in/zaidahmaddev/"
                          target="_blank"><i data-feather="linkedin"></i></a></li>
                      <li className="youtube"> <a rel="noopener noreferrer" href="https://www.youtube.com/zaidahmad"
                          target="_blank" aria-label="Zaid YouTube Link"><i data-feather="youtube"></i></a></li>
                      <li className="github" aria-label="Zaid GitHub Link"> <a rel="noopener noreferrer" href="https://github.com/zaidahmad-dev"
                          target="_blank"><i data-feather="github"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12 mt_mobile--30">
                  <div className="skill-share-inner">
                    <span className="title">best skilled in</span>
                    <ul className="skill-share d-flex liststyle">
                      <li><img src="images/icons/html-5.png" alt="ICON"/></li>
                      <li><img src="images/icons/css-3.png" alt="ICON"/></li>
                      <li><img src="images/icons/js.png" alt="ICON"/></li>
                      <li><img src="images/icons/icons-16.png" alt="ICON"/></li>
                      <li><img src="images/icons/shopify.png" alt="ICON"/></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 order-lg-2 col-lg-5">
            <div className="thumbnail">
              <div className="inner">
                <img src="images/slider/zaid-banner.png" alt="course"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Banner