import React from 'react';
import '../footer/footer.css';
import logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <div className="flex footer">
            <div className="flex flex-container">
                <div className="footer-section ">
                    <h2 className='logo-text'><img src={logo} alt="logo" /></h2>
                    <p>Stay up to date on the latest features and releases by joining our newsletter.</p>
                    <div className="newsletter">
                        <input type="email" placeholder="Your email" />
                        <button>Subscribe</button>
                    </div>
                    <p>By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
                </div>
                <div className="column-div">
                    <div className="column-1">
                        <p className='column-div-heading'>Column One</p>
                        <a href="http://">link one</a>
                        <a href="http://">link two</a>
                        <a href="http://">link three</a>
                        <a href="http://">link four</a>
                        <a href="http://">link five</a>
                    </div>
                    <div className="column-2">
                        <p className='column-div-heading'>Column Two</p>
                        <a href="http://">link one</a>
                        <a href="http://">link two</a>
                        <a href="http://">link three</a>
                        <a href="http://">link four</a>
                        <a href="http://">link five</a>
                    </div>
                    <div className="column-3">
                        <p className='column-div-heading'>Follow us</p>
                        <div className="social">
                            <a href="http://"><i class="fa-brands fa-facebook fa-xl"></i></a>
                            <a href="http://">Facebook</a>
                        </div>
                        <div className="social">
                            <a href="http://"><i class="fa-brands fa-square-instagram fa-xl"></i></a>
                            <a href="http://">Instagram</a>
                        </div>
                        <div className="social">
                            <a href="http://"><i class="fa-brands fa-x-twitter fa-xl"></i></a>
                            <a href="http://">X</a>
                        </div>
                        <div className="social">
                            <a href="http://"><i class="fa-brands fa-linkedin fa-xl"></i></a>
                            <a href="http://">Linkein</a>
                        </div>
                        <div className="social">
                            <a href="http://"><i class="fa-brands fa-youtube fa-xl"></i></a>
                            <a href="http://">Youtube</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex footer-bottom">
                <div className="copyright">
                    <p>&copy; 2024 Relume. All rights reserved.</p>
                </div>
                <ul className="footer-links">
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Cookie Settings</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
