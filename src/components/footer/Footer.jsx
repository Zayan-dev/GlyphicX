import React, { useEffect, useRef } from 'react';
import '../footer/footer.css';
import logo from "../../assets/logo.png"
import CustomButton, { CustomButton2 } from '../CustomButton';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const footerRef = useRef(null);

  const { hash } = useLocation();
  useEffect(() => {

    if (hash === "#footerSection" && footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

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
              <CustomButton2 text="Subscribe" />
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
            <a className='para'>Graphic Design</a>
            <a className='para'>UI Design</a>
            <a className='para'>Website Development</a>
            <a className='para'>Television Commercial</a>
            <a className='para'>Product Animation</a>
          </div>
          <div className="column-2">
            <p className="subHeading column-div-heading">Contact</p>
            <a href="http://" className='para'>link one</a>
            <a href="http://" className='para'>link two</a>
            <a href="http://" className='para'>link three</a>
            <a href="http://" className='para'>link four</a>
            <a href="http://" className='para'>link five</a>
          </div>
          <div className="column-3">
            <p className="subHeading column-div-heading">Follow us</p>
            <div className="social">
              <a href="http://" >
                {" "}
                <i className="fa-brands fa-facebook fa-xl"></i>
              </a>
              <a href="http://" className='para'>Facebook</a>
            </div>
            <div className="social">
              <a href="http://">
                {" "}
                <i className="fa-brands fa-square-instagram fa-xl"></i>
              </a>
              <a href="http://" className='para'>Instagram</a>
            </div>
            <div className="social">
              <a href="http://">
                {" "}
                <i className="fa-brands fa-x-twitter fa-xl"></i>
              </a>
              <a href="http://" className='para'>X</a>
            </div>
            <div className="social">
              <a href="http://">
                {" "}
                <i className="fa-brands fa-linkedin fa-xl"></i>
              </a>
              <a href="http://" className='para'>Linkedin</a>
            </div>
            <div className="social">
              <a href="http://">
                {" "}
                <i className="fa-brands fa-youtube fa-xl"></i>
              </a>
              <a href="http://" className='para'>Youtube</a>
            </div>
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
