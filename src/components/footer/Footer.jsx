import React from 'react';
import '../footer/footer.css';
import logo from "../../assets/logo.png"
import CustomButton from '../CustomButton';

const Footer = () => {
  return (
    <div className="flex footer">
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
            <input type="email" placeholder="Your email" className='para'/>
            <div className="subscribe-btn">
              <CustomButton text="Subscribe" />
            </div>
          </div>
          <p className="para">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </p>
        </div>
        <div className="column-div">
          <div className="column-1">
            <p className="subHeading column-div-heading">Column One</p>
            <a href="http://" className='para'>link one</a>
            <a href="http://" className='para'>link two</a>
            <a href="http://" className='para'>link three</a>
            <a href="http://" className='para'>link four</a>
            <a href="http://" className='para'>link five</a>
          </div>
          <div className="column-2">
            <p className="subHeading column-div-heading">Column Two</p>
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
