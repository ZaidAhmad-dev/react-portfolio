import './footer.css';
import footer from '../data/banner.json';
import SocialIcons from '../SocialIcons/SocialIcons';

const Footer = () => {
	const currentYear = new Date().getFullYear(); // Get the current year
	return (
		<footer className="footer-wrapper portfolio-section">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="footer-area text-center">
								<div className="logo">
									<a href="https://zaidahmaddev.com" title={footer.title}>
										<img src={footer.banner_img} srcSet={footer.banner_img_srcset} alt={footer.title}/>
									</a>
								</div>
								<SocialIcons/>
								<p className="description">© {currentYear}. All rights reserved by <a href="https://www.zaidahmaddev.com">Zaid Ahmad.</a></p>
							</div>
						</div>
					</div>
				</div>
		</footer>
)}

export default Footer