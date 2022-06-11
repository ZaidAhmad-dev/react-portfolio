import React from 'react'
import './footer.css'

const Footer = () => {
  return (
<footer className="footer-wrapper portfolio-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-area text-center">
                <div className="logo">
                  <a href="index.html">
                    <img src="images/slider/zaid-banner.png" alt="logo"/>
                  </a>
                </div>
                <ul className="social-share d-flex liststyle justify-content-center">
                  <li className="facebook"><a href="https://www.facebook.com/ZaidAhmad.Codes/"
                      aria-label="Zaid Facebook Link" target="_blank" rel="noopener noreferrer"><i data-feather="facebook"></i></a></li>
                  <li className="linkedin"><a href="https://www.linkedin.com/in/zaidahmaddev/"
                      aria-label="Zaid Linkedin Link" target="_blank" rel="noopener noreferrer"><i data-feather="linkedin"></i></a></li>
                  <li className="youtube"> <a href="https://www.youtube.com/zaidahmad"
                      aria-label="Zaid YouTube Link" target="_blank" rel="noopener noreferrer"><i data-feather="youtube"></i></a></li>
                  <li className="github"> <a href="https://github.com/zaidahmad-dev"
                      aria-label="Zaid GitHub Link" target="_blank" rel="noopener noreferrer"><i data-feather="github"></i></a></li>
                </ul>
                <p className="description">© 2022. All rights reserved by <a href="https://www.zaidahmaddev.com">Zaid Ahmad.</a></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
)}

export default Footer