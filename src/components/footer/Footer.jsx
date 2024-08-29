import React, { useEffect, useRef } from 'react';
import '../footer/footer.css';
import logo from "../../assets/logo.png"
import CustomButton, { CustomButton2, CustomButton4 } from '../CustomButton';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const footerRef = useRef(null);
  const { hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash === "#footerSection" && footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  const openMail = () => {
    window.location.href = "mailto:zayanirfan8@gmail.com";
  };

  const handleNavigation = () => {
    navigate("/services#graphicDesign");
  };

  const handleUi=()=>{
    navigate("/services#uiDesign");
  }
  const handleWeb=()=>{
    navigate("/services#webDevelopment");
  }
  const handleProAnim=()=>{
    navigate("/services#proAnim")
  }

  return (
    <div ref={footerRef} id="footerSection" className="flex footer">
      <div className="flex flex-container">
        <div className="footer-section ">
          <h2 className="logo-text">
            <img src={logo} alt="logo" />
          </h2>
          <p className="para">
            Stay up to date on the latest features and releases by joining our
            newsletter.
          </p>
          <div className="newsletter">
            <input type="email" placeholder="Your email" className='para' />
            <div className="subscribe-btn">
              <CustomButton4 text="Submit" />
            </div>
          </div>
          <p className="para">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </p>
        </div>
        <div className="column-div">
          <div className="column-1">
            <p className="subHeading column-div-heading">Services</p>
            <a onClick={handleNavigation} className='para cursor-pointer'>
              Graphic Design
            </a>
            <a onClick={handleUi} className='para cursor-pointer'>UI Design</a>
            <a onClick={handleWeb} className='para cursor-pointer'>Website Development</a>
            <a className='para'>Television Commercial</a>
            <a onClick={handleProAnim} className='para cursor-pointer'>Product Animation</a>
          </div>

          <div className="column-3">
            <p className="subHeading column-div-heading">Follow us</p>
            <div className="social">
              <a href="https://www.facebook.com/profile.php?id=61555673464641&mibextid=kFxxJD">
                {" "}
                <i className="fa-brands fa-facebook fa-xl"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61555673464641&mibextid=kFxxJD" className='para'>Facebook</a>
            </div>
            <div className="social">
              <a href="https://www.instagram.com/glyphicx_agency?igsh=MndxZzFqazRhOXpj">
                {" "}
                <i className="fa-brands fa-square-instagram fa-xl"></i>
              </a>
              <a href="https://www.instagram.com/glyphicx_agency?igsh=MndxZzFqazRhOXpj" className='para'>Instagram</a>
            </div>
            <div className="social">
              <a href="https://www.linkedin.com/company/glyphicx/">
                {" "}
                <i className="fa-brands fa-linkedin fa-xl"></i>
              </a>
              <a href="https://www.linkedin.com/company/glyphicx/" className='para'>Linkedin</a>
            </div>
            <div className="social">
              <a href="http://">
                {" "}
                <i className="fa-brands fa-youtube fa-xl"></i>
              </a>
              <a href="http://" className='para'>Youtube</a>
            </div>
            <div className="social">
              <a href="http://">
                {" "}
                <i className="fa-brands fa-x-twitter fa-xl"></i>
              </a>
              <a href="http://" className='para'>X</a>
            </div>
          </div>
          <div className="column-2">
            <p className="subHeading column-div-heading">Contact Us</p>
            <a href='mailto:info@GlyphicX.com' className='para'>info@GlyphicX.com</a>
          </div>
        </div>
      </div>
      <div className="flex footer-bottom">
        <div className="copyright">
          <p className="para">&copy; 2024 All rights reserved.</p>
        </div>
        <ul className="para footer-links">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Cookie Settings</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
