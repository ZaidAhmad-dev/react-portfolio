import { useState, useEffect, useRef } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import Findme from "../Findme/Findme";

const Header = () => {
	const ref = useRef();

	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 250) {
				ref.current.classList.add("sticky");
			} else {
				ref.current.classList.remove("sticky");
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		}
	}, []);

	return (
		<>
			<div className={isOpen? "header-area header-area-mobile" : "header-area"}>
				<header className="header-sticky" ref={ref}>
					<div className="container">
						<div className="row">
							<div className={isOpen? "header-wrapper row align-items-center header-wrapper-mobile" : "header-wrapper row align-items-center"}>
								<div className={isOpen ? "d-none" : "col-lg-2 col-6"}>
									<div className="header-left">
										<div className="logo">
											<a href="https://zaidahmaddev.com"><img src="images/logo_transparent.png" alt="logo" /></a>
										</div>
									</div>
								</div>
								<div className={isOpen ? "col-12 px-0 pr-0 mobile-header-wrapper": "col-lg-10 col-6 pr-0"}>
									<div className={isOpen? "header-center header-center-mobile justify-content-between align-items-baseline": "header-center justify-content-end"}>
										<nav id="sideNav" className={isOpen ? "d-flex flex-column" : "mainmenu-nav navbar-example2 d-none d-md-block"}>
											<ul className={isOpen? "primary-menu primary-menu-mobile nav nav-pills flex-column" : "primary-menu nav nav-pills" }>
												<li className="nav-item"><a className="nav-link smoth-animation active" href="#home">Home</a></li>
												<li className="nav-item"><a className="nav-link smoth-animation" href="#courses">Courses</a></li>
												<li className="nav-item"><a className="nav-link smoth-animation" href="#testimonial">Clients</a></li>
												<li className="nav-item"><a className="nav-link smoth-animation" href="#projects">Projects</a></li>
											</ul>
											<div className="col-12 px-0">
												{isOpen ? <Findme/> : null}
											</div>
										</nav>
										<div className="header-right">
											<div className="hamburger-menu d-block d-md-none" onClick={() => {
												setIsOpen(!isOpen)
												document.querySelector("html").classList.toggle("overflow-hidden");
											}}>
												{isOpen ? <MdClose /> : <MdMenu />}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>
			</div>
		</>
	);
};

export default Header;
