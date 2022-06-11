import React from "react";

const Header = () => {
  return (
	<div>
    <div className="header-area">
      <header className="header-sticky">
        <div className="container">
          <div className="row">
            <div className="header-wrapper row align-items-center">
              {/* Start Header Left */}
              <div className="col-lg-2 col-6">
                <div className="header-left">
                  <div className="logo">
                    <a href="https://zaidahmaddev.com"><img src="images/logo_transparent.png" alt="logo" /></a>
                  </div>
                </div>
              </div>
              {/* End Header Left */}
              {/* Start Header Center */}
              <div className="col-lg-10 col-6">
                <div className="header-center">
                  <nav id="sideNav" className="mainmenu-nav navbar-example2 d-none d-xl-block">
                    {/* Start Mainmanu Nav */}
                    <ul className="primary-menu nav nav-pills">
                      <li className="nav-item"><a className="nav-link smoth-animation active" href="#home">Home</a></li>
                      <li className="nav-item"><a className="nav-link smoth-animation" href="#courses">Courses</a></li>
					  <li className="nav-item"><a className="nav-link smoth-animation" href="#testimonial">Clients</a></li>
                      <li className="nav-item"><a className="nav-link smoth-animation" href="#projects">Projects</a></li>
                    
                    </ul>
                    {/* End Mainmanu Nav */}
                  </nav>
                  {/* Start Header Right  */}
                  <div className="header-right">
                    <div className="hamberger-menu d-block d-xl-none">
                      <i id="menuBtn" className="feather-menu humberger-menu"></i>
                    </div>
                    <div className="close-menu d-block">
                      <span className="closeTrigger"><i data-feather="x"></i></span>
                    </div>
                  </div>
                  {/* End Header Right  */}
                </div>
              </div>
              {/* End Header Center */}
            </div>
          </div>
        </div>
      </header>
    </div>
	 {/* Start Popup Mobile Menu  */}
	 <div className="popup-mobile-menu">
	 <div className="inner">
	   <div className="menu-top">
		 <div className="menu-header">
		   <div className="close-button">
			 <button className="close-menu-activation close"><i data-feather="x"></i></button>
		   </div>
		 </div>
	   </div>
	   <div className="content">
		 <ul className="primary-menu nav nav-pills">
		   <li className="nav-item"><a className="nav-link smoth-animation active" href="#home">Home</a></li>
		   <li className="nav-item"><a className="nav-link smoth-animation" href="#courses">Courses</a></li>
		   <li className="nav-item"><a className="nav-link smoth-animation" href="#clients">Clients</a></li>
		   <li className="nav-item"><a className="nav-link smoth-animation" href="#projects">Projects</a></li>
		 </ul>
		  {/* social sharea area */}
		 <div className="social-share-wrapper">
		   <span className="title">find me at</span>
		   <ul className="social-share d-flex liststyle">
			 <li className="youtube"><a href="https://www.youtube.com/zaidahmad" aria-label="Zaid YouTube Link" target="_blank" rel="noopener noreferrer"><svg
				   xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
				   fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
				   strokeLinejoin="round" className="feather feather-youtube">
				   <path
					 d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z">
				   </path>
				   <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
				 </svg></a>
			 </li>
			 <li className="linkedin"><a href="https://www.linkedin.com/in/zaidahmaddev/" aria-label="Zaid LinkedIn Link" target="_blank" rel="noopener noreferrer"><svg
				   xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
				   fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
				   strokeLinejoin="round" className="feather feather-linkedin">
				   <path
					 d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
				   </path>
				   <rect x="2" y="9" width="4" height="12"></rect>
				   <circle cx="4" cy="4" r="2"></circle>
				 </svg></a>
			 </li>
			 <li className="facebook"><a href="https://www.facebook.com/ZaidAhmad.Codes/" aria-label="Zaid Facebook Link" target="_blank" rel="noopener noreferrer"><svg
				   xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
				   fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
				   strokeLinejoin="round" className="feather feather-facebook">
				   <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
				 </svg></a>
			 </li>
			 <li className="github"><a href="https://github.com/zaidahmad-dev" aria-label="Zaid GitHub Link" target="_blank" rel="noopener noreferrer"><svg
				   xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
				   fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
				   strokeLinejoin="round" className="feather feather-github">
				   <path
					 d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
				   </path>
				 </svg></a>
			 </li>
		   </ul>
		 </div>
		  {/* end */}
	   </div>
	 </div>
   </div>
   </div>
  );
};

export default Header;
