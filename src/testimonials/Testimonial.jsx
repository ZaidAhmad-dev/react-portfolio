import React from 'react'
import './testimonial.css'

const Testimonial = () => {
  return (
    <div className="testimonials portfolio-section" id="testimonial">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="300" data-aos-once="true" className="section-title text-center">
            <h2 className="title">Testimonial</h2>
          </div>
        </div>
      </div>

      <div className="testimonial-slider" data-aos="zoom-in-down"
      data-aos-duration="800" data-aos-delay="600" data-aos-once="true">

         {/* Start single Testimonial */}
        <div className="testimonial-item">
          <div className="testimonial-inner">
            <div className="testimonial-header">
              <div className="thumbnail">
                <img src="images/client/png/girl-avatar.png" alt="client"/>
              </div>
              <h3 className="ts-header">
                <span className="text-color-primary">Thara Messeroux</span> 14 Lessons
              </h3>
            </div>
            <div className="testimonial-body">
              <h3>Highly Recommended!!</h3>
              <p className="discription">
                I highly recommend Zaid!! He is such a talented software engineer with amazing web dev skills!! He is also patient with a great sense of humor! He has helped me a lot in my web dev class and I am learning so much from him. I am hoping to keep taking lessons with him until the end of my semester. I couldn't recommend him enough!!
              </p>
            </div>
          </div>
        </div>
         {/* End single Testimonial */}
        
         {/* Start single Testimonial */}
        <div className="testimonial-item">
          <div className="testimonial-inner">
            <div className="testimonial-header">
              <div className="thumbnail">
                <img src="images/client/png/girl-avatar.png" alt="client"/>
              </div>
              <h3 className="ts-header">
                <span className="text-color-primary">Elaizha</span> 10 Lessons
              </h3>
            </div>
            <div className="testimonial-body">
              <h3>Knowledgeable and patient tutor</h3>
              <p className="discription">
                Zaid is teaching me HTML and CSS coding. This is my first time working with this type of coding and Zaid has been more than patient with me. He also goes over any problems I may have trouble with and explains step by step. He’s a great tutor and would recommend him!
              </p>
            </div>
          </div>
        </div>
         {/* End single Testimonial */}

         {/* Start single Testimonial */}
        <div className="testimonial-item">
          <div className="testimonial-inner">
            <div className="testimonial-header">
              <div className="thumbnail">
                <img src="images/client/png/girl-avatar.png" alt="client"/>
              </div>
              <h3 className="ts-header">
                <span className="text-color-primary">Karen</span> 2 Lessons
              </h3>
            </div>
            <div className="testimonial-body">
              <h3>Extremely knowledgeable and helpful </h3>
              <p className="discription">
                Zaid is so knowledgeable and really went above and beyond to help me with the JavaScript concepts that I did not understand. I highly recommend Zaid as your next tutor! 
              </p>
            </div>
          </div>
        </div>
         {/* End single Testimonial */}
        
         {/* Start single Testimonial */}
        <div className="testimonial-item">
          <div className="testimonial-inner">
            <div className="testimonial-header">
              <div className="thumbnail">
                <img src="images/client/png/girl-avatar.png" alt="client"/>
              </div>
              <h3 className="ts-header">
                <span className="text-color-primary">Julianne</span> 10 Lessons
              </h3>
            </div>
            <div className="testimonial-body">
              <h3>Very thorough and knowledgable!</h3>
              <p className="discription">
                Zaid basically can teach you anything that has to do with coding in CSS, HTML, JavaScript, and beyond.
                He is willing to work with my availability and prepared for the tutoring session.
              </p>
            </div>
          </div>
        </div>
         {/* End single Testimonial */}

         {/* Start single Testimonial */}
        <div className="testimonial-item">
          <div className="testimonial-inner">
            <div className="testimonial-header">
              <div className="thumbnail">
                <img src="images/client/png/girl-avatar.png" alt="client"/>
              </div>
              <h3 className="ts-header">
                <span className="text-color-primary">Alexandrea</span> 5 Lessons
              </h3>
            </div>
            <div className="testimonial-body">
              <h3>Quick, Knowledgeable, and efficient</h3>
              <p className="discription">
                Zaid helped me tremendously with my HTML and CSS projects! He gave clear and helpful instructions and explained things in a way that was easy to understand. I highly recommend Zaid for any help you may need with CSS or HTML. He's the best!
              </p>
            </div>
          </div>
        </div>
         {/* End single Testimonial */}

         {/* Start single Testimonial */}
        <div className="testimonial-item">
          <div className="testimonial-inner">
            <div className="testimonial-header">
              <div className="thumbnail">
                <img src="images/client/png/boy-avatar.png" alt="client"/>
              </div>
              <h3 className="ts-header">
                <span className="text-color-primary">Gabriel</span> 3 Lessons
              </h3>
            </div>
            <div className="testimonial-body">
              <h3>Great Tutor!</h3>
              <p className="discription">
                He is very quick and to the point with all of the questions that you have. Answers them correctly, and knew everything that was needed in order to help me with my questions. I recommend this tutor!
              </p>
            </div>
          </div>
        </div>
         {/* End single Testimonial */}

         {/* Start single Testimonial */}
        <div className="testimonial-item">
          <div className="testimonial-inner">
            <div className="testimonial-header">
              <div className="thumbnail">
                <img src="images/client/png/girl-avatar.png" alt="client"/>
              </div>
              <h3 className="ts-header">
                <span className="text-color-primary">Elena</span> 3 Lessons
              </h3>
            </div>
            <div className="testimonial-body">
              <h3>Zaid is a great tutor! </h3>
              <p className="discription">
                Zaid is super patient, very knowledgeable with CSS and Bootstrap. Had a few classes with him already, every time I had different problems solved which I got stuck for hours and days. He’s also very nice and encouraging! Great experience, will continue to work with him moving forward. 
              </p>
            </div>
          </div>
        </div>
         {/* End single Testimonial */}
      </div>
    </div>
  </div>
)}

export default Testimonial