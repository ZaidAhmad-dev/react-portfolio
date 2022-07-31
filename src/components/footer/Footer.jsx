import './footer.css';
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from "react-icons/fi";
import footer from '../data/banner.json';

const Footer = () => {
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
								<ul className="social-share d-flex liststyle justify-content-center">
										{footer.social_media.map(social => (
												<li className={social.name}><a rel="noopener noreferrer" aria-label={social.label} href={social.url}
												target="_blank">{social.data_feather}</a></li>
										 ))}
								</ul>
								<p className="description">© 2022. All rights reserved by <a href="https://www.zaidahmaddev.com">Zaid Ahmad.</a></p>
							</div>
						</div>
					</div>
				</div>
		</footer>
)}

export default Footer