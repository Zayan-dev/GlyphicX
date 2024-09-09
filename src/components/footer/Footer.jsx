import React, { useEffect, useRef, useState } from 'react';
import '../footer/footer.css';
import Modal from '../Modal'; // Import Modal component
import logo from "../../assets/logo.png"
import CustomButton, { CustomButton2, CustomButton4 } from '../CustomButton';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const footerRef = useRef(null);
  const { hash } = useLocation();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (hash === "#footerSection" && footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  const handleNavigation = () => {
    navigate("/services#graphicDesign");
  };

  const handleUi = () => {
    navigate("/services#uiDesign");
  };

  const handleWeb = () => {
    navigate("/services#webDevelopment");
  };

  const handleProAnim = () => {
    navigate("/services#proAnim");
  };

  const handleTvc = () => {
    navigate("/services#Tvc");
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div ref={footerRef} id="footerSection" className="flex footer">
      <div className="flex flex-container">
        <div className="footer-section ">
          <div className="logo-text">
            <img src={logo} alt="logo" />
          </div>
          <p className="para">
            Stay up to date on the latest features and releases by joining our
            newsletter.
          </p>
          <div className="newsletter">
            <input type="email" placeholder="Your email" className="para" />
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
            <a onClick={handleNavigation} className="para cursor-pointer">
              Graphic Design
            </a>
            <a onClick={handleUi} className="para cursor-pointer">
              UI Design
            </a>
            <a onClick={handleWeb} className="para cursor-pointer">
              Website Development
            </a>
            <a onClick={handleTvc} className="para cursor-pointer">
              Digital Video Commercial
            </a>
            <a onClick={handleProAnim} className="para cursor-pointer">
              Product Animation
            </a>
          </div>

          <div className="column-3">
            <p className="subHeading column-div-heading">Follow us</p>
            <div className="social">
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61555673464641&mibextid=kFxxJD"
              >
                <i className="fa-brands fa-facebook fa-xl"></i>
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61555673464641&mibextid=kFxxJD"
                className="para"
              >
                Facebook
              </a>
            </div>
            <div className="social">
              <a
                target="_blank"
                href="https://www.instagram.com/glyphicx_agency?igsh=MndxZzFqazRhOXpj"
              >
                <i className="fa-brands fa-square-instagram fa-xl"></i>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/glyphicx_agency?igsh=MndxZzFqazRhOXpj"
                className="para"
              >
                Instagram
              </a>
            </div>
            <div className="social">
              <a
                target="_blank"
                href="https://www.linkedin.com/company/glyphicx/"
              >
                <i className="fa-brands fa-linkedin fa-xl"></i>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/glyphicx/"
                className="para"
              >
                Linkedin
              </a>
            </div>
            <div className="social">
              <a target="_blank" href="http://">
                <i className="fa-brands fa-youtube fa-xl"></i>
              </a>
              <a target="_blank" href="http://" className="para">
                Youtube
              </a>
            </div>
            <div className="social">
              <a target="_blank" href="http://">
                <i className="fa-brands fa-x-twitter fa-xl"></i>
              </a>
              <a target="_blank" href="http://" className="para">
                X
              </a>
            </div>
          </div>
          <div className="column-2">
            <p className="subHeading column-div-heading">Contact Us</p>
            <div className="social">
              <a target="_blank" href="mailto:info@GlyphicX.com">
                <i class="fa-solid fa-envelope fa-xl"></i>
              </a>
              <a href="mailto:info@GlyphicX.com" className="para">
                info@GlyphicX.com
              </a>
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
            <a onClick={openModal} className="cursor-pointer">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Cookie Settings</a>
          </li>
        </ul>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div class="privacy-policy">
          <h2 className='mainHeading mb-3'>Privacy Policy</h2>

          <p className='para mb-3'>At GlyphicX, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website or interact with our services.</p>

          <h3 className='subHeading'>Information We Collect</h3>
          <p className='para mb-3'>We collect personal information that you voluntarily provide to us, such as your name and email address, when you sign up for our newsletter, contact us, or request information about our services.</p>

          <h3 className='subHeading'>How We Use Your Information</h3>
          <p className='para mb-3'>We use the information we collect to:</p>
          <ul className='para'>
            <li>Send you updates about our services, offers, and news.</li>
            <li>Respond to your inquiries and provide customer support.</li>
            <li>Improve our website and tailor our services to better meet your needs.</li>
          </ul>

          <h3 className='subHeading mt-3'>Sharing Your Information</h3>
          <p className='para mb-3'>We do not share, sell, or rent your personal information to third parties. However, we may share your information with trusted service providers who assist us in operating our website and conducting business, provided they agree to keep your information confidential.</p>

          <h3 className='subHeading'>Cookies</h3>
          <p className='para mb-3'>Our website uses cookies to enhance your browsing experience. Cookies are small files stored on your device that help us understand how you use our site and improve its functionality. You can choose to disable cookies through your browser settings.</p>

          <h3 className='subHeading'>Data Security</h3>
          <p className='para mb-3'>We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>

          <h3 className='subHeading'>Your Rights</h3>
          <p className='para mb-3'>You have the right to access, update, or delete your personal information. If you wish to do so or have any questions about how we handle your data, please contact us at <a href="mailto:info@GlyphicX.com">info@GlyphicX.com</a>.</p>

          <h3 className='subHeading'>Changes to This Policy</h3>
          <p className='para mb-3'>We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the date of the latest revision will be updated at the top of the page.</p>

          <h3 className='subHeading'>Contact Us</h3>
          <p className='para mb-3'>If you have any questions or concerns about our Privacy Policy, please contact us at <a href="mailto:info@GlyphicX.com">info@GlyphicX.com</a>.</p>
        </div>

      </Modal>
    </div>
  );
};

export default Footer;
