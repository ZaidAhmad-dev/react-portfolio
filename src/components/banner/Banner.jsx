import React, { useEffect } from 'react'
import Typed from 'typed.js';
import './banner.css'
import banner from '../data/banner.json'
import SocialIcons from '../SocialIcons/SocialIcons'

const Banner = () => {

  useEffect(() => {

    var options = {
      strings: ['Developer', 'Instructor', 'Mentor', 'Content Creator'],
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 2000,
      startDelay: 1000,
      loop: true,
      showCursor: false,
    };

    var typed = new Typed('.title-headline', options);

  }, [])
  return (
    <div id="home" className="main-banner">
    <div className="slide">
      <div className="container">
        <div className="row row--30 align-items-center">
          <div className="order-2 order-lg-1 col-lg-7" data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
            <div className="content">
              <div className="inner">
                <h1 className="title">Hi, I’m <span className="title-name">{banner.title}</span><br/>
                    <span>a </span> <span className="title-headline"></span>
                </h1>
                <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">
                  <p className="description">I am a Front-end Developer, Instructor and Content Creator with 4+years of experience in modern technologies and framweworks like HTML, CSS, JavaScript, ReactJs, jQuery, Bootstrap, Shopify Liquid. I love teaching code and help others become better developers and there are <strong>100+</strong> happy Students. I also build Custom Shopify Themes, Setup Shopify E-Commerce Stores.</p>
                </div>
              </div>
              <div className="row" data-aos="fade-up" data-aos-duration="700" data-aos-delay="900">
                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12">
                  <div className="social-share-inner-left">
                    <span className="title">{banner.social_media_title}</span>
                    <ul className="social-share d-flex liststyle">
                      <SocialIcons/>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12 mt_mobile--30">
                  <div className="skill-share-inner">
                    <span className="title">best skilled in</span>
                    <ul className="skill-share d-flex liststyle">
                      {banner.technology_icons.map((technology, index) => (
                        <li key={index} aria-label={technology.alt}><img src={technology.url} alt={technology.alt}/></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 order-lg-2 col-lg-5">
            <div className="thumbnail">
              <div className="inner">
                <img src={banner.banner_img} srcSet={banner.banner_img_srcset} alt={banner.banner_img}/>
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