import { useEffect } from 'react';
import Slider from 'react-slick';
import testimonials from '../data/testimonials.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './testimonial.css'


function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<button
			className={className}
			style={{ ...style, display: "block" }}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<button
			className={className}
			style={{ ...style, display: "block" }}
			onClick={onClick}
		/>
	);
}

const Testimonial = ({ title }) => {

	useEffect(() => {
		const handleResize = () => {
			let slickTrackHeight = document.querySelector('.slick-track').offsetHeight;
			document.querySelectorAll('.slick-slide').forEach(slide => {
				slide.style.height = `${slickTrackHeight}px`;
				slide.querySelector('div').style.height = `100%`;
			});
		}

		window.addEventListener('resize', handleResize);

		setTimeout(() => {
			handleResize();
		}, 2000);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		arrows: true,
		prevArrow: <SamplePrevArrow />,
		nextArrow: <SampleNextArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 2,
					arrows: false
				}
			},
		]
	}
	return (
		<div className="testimonials portfolio-section" id="testimonial" data-aos="zoom-in-down" data-aos-duration="800" data-aos-delay="600" data-aos-once="true">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title text-center">
							<h2 className="title">{title}</h2>
						</div>
					</div>
				</div>

				<Slider {...settings}>
					{testimonials.map((testimonial, index) => (
						<div className="testimonial-item" key={index}>
							<div className="testimonial-inner">
								<div className="testimonial-header">
									{/* <div className="thumbnail">
										<img src={testimonial.avatar} alt={testimonial.avatar} />
									</div> */}
									<h3 className="ts-header">
										<span className="text-color-primary">{testimonial.name}</span>
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
				</Slider>
			</div>
		</div>
	)
}

export default Testimonial