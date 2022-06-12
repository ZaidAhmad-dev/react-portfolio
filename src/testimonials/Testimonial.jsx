import React from 'react'
import './testimonial.css'
import testimonials from '../data/testimonials.json'

const Testimonial = ({title}) => {
  return (
    <div className="testimonials portfolio-section" id="testimonial">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="300" data-aos-once="true" className="section-title text-center">
            <h2 className="title">{title}</h2>
          </div>
        </div>
      </div>

      <div className="testimonial-slider" data-aos="zoom-in-down"
      data-aos-duration="800" data-aos-delay="600" data-aos-once="true">

        {testimonials.map(testimonial => (
         <div className="testimonial-item">
         <div className="testimonial-inner">
           <div className="testimonial-header">
             <div className="thumbnail">
               <img src={testimonial.avatar} alt={testimonial.avatar}/>
             </div>
             <h3 className="ts-header">
               <span className="text-color-primary">{testimonial.name}</span> {testimonial.lessons} Lessons
             </h3>
           </div>
           <div className="testimonial-body">
             <h3>{testimonial.heading}</h3>
             <p className="discription">
               {testimonial.review}
             </p>
           </div>
         </div>
        </div>
        ))}

       
        
      </div>
    </div>
  </div>
)}

export default Testimonial