import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from 'react-router-dom';
import { MdMenu, MdClose } from "react-icons/md";
import Findme from "../Findme/Findme";

const Header = () => {
	const ref = useRef();
	const location = useLocation();
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

	// Close menu when navigating to a different page
	useEffect(() => {
		if (isOpen) {
			setIsOpen(false);
			document.querySelector("html").classList.remove("overflow-hidden");
		}
	}, [location]);

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
											<Link to="/"><img src="images/logo_transparent.png" alt="logo" /></Link>
										</div>
									</div>
								</div>
								<div className={isOpen ? "col-12 px-0 pr-0 mobile-header-wrapper": "col-lg-10 col-6 pr-0"}>
									<div className={isOpen? "header-center header-center-mobile justify-content-between align-items-baseline": "header-center justify-content-end"}>
										<nav id="sideNav" className={isOpen ? "d-flex flex-column" : "mainmenu-nav navbar-example2 d-none d-md-block"}>
											<ul className={isOpen? "primary-menu primary-menu-mobile nav nav-pills flex-column" : "primary-menu nav nav-pills" }>
												<li className="nav-item"><Link className={location.pathname === "/" ? "nav-link active" : "nav-link"} to="/">Home</Link></li>
												<li className="nav-item"><Link className={location.pathname === "/Courses" ? "nav-link active": "nav-link"} to="/Courses">Courses</Link></li>
												<li className="nav-item"><Link className={location.pathname === "/Clients" ? "nav-link active": "nav-link"} to="/Clients">Clients</Link></li>
												<li className="nav-item"><Link className={location.pathname === "/Projects" ? "nav-link active": "nav-link"} to="/Projects">Projects</Link></li>
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
