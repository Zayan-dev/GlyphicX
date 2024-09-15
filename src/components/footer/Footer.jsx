import React, { useEffect, useRef, useState } from 'react';
import '../footer/footer.css';
import Modal from '../Modal'; // Import Modal component
import logo from "../../assets/logo.png"
import CustomButton, { CustomButton2, CustomButton3, CustomButton4, CustomButton5 } from '../CustomButton';
import { useForm } from 'react-hook-form';
import emailjs from "emailjs-com";
import Alert from "../alert/alertBox";
import { useNavigate } from 'react-router-dom';


const Footer = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: "",
    type: "",
  });

  // Shows alert message for form submission feedback
  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: "", type: "" });
    }, 3000);
  };
  // const footerRef = useRef(null);
  // const { hash } = useLocation();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalTosOpen, setIsModalTosOpen] = useState(false);
  const [isModalCookieOpen, setIsModalCookieOpen] = useState(false);

  // useEffect(() => {
  //   if (hash === "#footerSection" && footerRef.current) {
  //     footerRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [hash]);

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

  const openTosModal = () => setIsModalTosOpen(true);
  const closeTosModal = () => setIsModalTosOpen(false);

  const openCookieModal = () => setIsModalCookieOpen(true);
  const closeCookieModal = () => setIsModalCookieOpen(false);

  const onSubmit = async (data) => {
    // Detect spams by checking honeypot field
    if (data.honeypot) {
      reset();
      console.log("Spam email, discarding submission!");
      return;
    }

    // Destrcture data object
    const { email } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      const templateParams = {
        email,
      };

      // console.log(import.meta.env.VITE_APP_SERVICE_ID);
      await emailjs.send(
        import.meta.env.VITE_APP_SERVICE_ID2,
        import.meta.env.VITE_APP_TEMPLATE_ID2,
        templateParams,
        import.meta.env.VITE_APP_PUBLIC_KEY
      );

      // TODO:Receiver Email ID set krni hai, email js ki website pr ja kr template bhi set krni hai

      toggleAlert("Email sent successfully!", "success");
    } catch (e) {
      console.error(e);
      toggleAlert("Uh oh. Something went wrong.", "danger");
    } finally {
      // Re-enable form submission
      setDisabled(false);
      // Reset contact form fields after submission
      reset();
    }
  };


  return (
    <div id="footerSection" className="flex footer">
      <div className="flex flex-container">
        <div className="footer-section ">
          <div className="logo-text">
            <img src={logo} alt="logo" />
          </div>
          <p className="para">
            Stay up to date with our offers and services
          </p>
          <div className="newsletter">
            <form onSubmit={handleSubmit(onSubmit)}
              noValidate
              disabled={disabled}>
              <input type="email"
                placeholder='your email'
                name="email"
                id="email"
                className="para"
                {...register("email", {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })} />

              {/* Honeypot for spam detection */}
              <label htmlFor="honeypot" style={{ display: "none" }}>
                Enter First Name:
              </label>
              <input
                type="text"
                name="honeypot"
                id="honeypot"
                className="para"
                style={{ display: "none" }}
                {...register("honeypot")}
              />

              <div className="subscribe-btn">
                <CustomButton5 text="Subscribe" type="submit" />
              </div>

            </form>
            {errors.email && (
              <span className="para errorMessage">
                Please enter a valid email address
              </span>
            )}

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
           <i class="fa-brands fa-square-facebook fa-xl"></i>
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
            {/* <div className="social">
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
            </div> */}
          </div>
          <div className="column-2">
            <p className="subHeading column-div-heading">Contact Us</p>
            <div className="social">
              <a target="_blank" href="mailto:info@GlyphicX.com">
                {" "}
                <i className="fa-solid fa-envelope fa-xl"></i>
              </a>
              <a href="mailto:info@GlyphicX.com" className="para">
                info@glyphicx.com
              </a>

            </div>
            <div className="social">
              {/* <a target="_blank" href="mailto:info@GlyphicX.com"> */}
              <i class="fa-solid fa-phone fa-xl"></i>
              {/* </a> */}
              <p className="para">
                +92 319 2001014
              </p>
            </div>
            <div className="social">
              {/* <a target="_blank" href="mailto:info@GlyphicX.com"> */}
              <i class="fa-solid fa-location-dot fa-xl"></i>
              {/* </a> */}
              <p className="para">
                C 93 Zaibunnisa Blvd, Block 13 Gulistan-e-Johar, Karachi, Karachi, Pakistan
              </p>
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
            <a onClick={openTosModal} className="cursor-pointer">Terms of Service</a>
          </li>
          <li>
            <a onClick={openCookieModal} className="cursor-pointer">Cookie Settings</a>
          </li>
        </ul>
      </div>

      <Alert
        display={alertInfo.display}
        message={alertInfo.message}
        type={alertInfo.type}
        onClose={() => setAlertInfo({ display: false, message: "", type: "" })}
      />
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

      <Modal isOpen={isModalTosOpen} onClose={closeTosModal}>
        <h1 className='mainHeading mb-3'>Terms of Service</h1>
        <p><strong>Effective Date: September 9 2024</strong></p>

        <p className='para mb-3'>Welcome to GlyphicX! These Terms of Service govern your use of our website and services. By accessing or using our services, you agree to comply with these terms. If you do not agree, please do not use our services.</p>

        <h2 className='subHeading'>1. Acceptance of Terms</h2>
        <p className='para mb-3'>By using our website, you acknowledge that you have read and agree to these Terms of Service. We may update these terms from time to time, and your continued use signifies acceptance of those changes.</p>

        <h2 className='subHeading'>2. Services Offered</h2>
        <p className='para mb-3'>GlyphicX provides graphic design, branding, and related services. Details about our offerings can be found on our website.</p>

        <h2 className='subHeading'>3. Intellectual Property</h2>
        <p className='para mb-3'>All content on our website, including designs, graphics, and text, is the property of GlyphicX and protected by intellectual property laws. User-generated content may grant us rights to use it as described in our policies.</p>

        <h2 className='subHeading'>4. Payment Terms</h2>
        <p className='para mb-3'>All payments for services are due as specified at the time of purchase. We reserve the right to change our fees, and users will be notified accordingly.</p>

        <h2 className='subHeading'>5. Changes to the Terms</h2>
        <p className='para mb-3'>We may update these Terms of Service at any time. Changes will be posted on this page, and the effective date will be updated.</p>

        <h2 className='subHeading'>6. Contact Information</h2>
        <p className='para mb-3'>For any questions regarding these Terms of Service, please contact us at <a href="mailto:info@GlyphicX.com">info@GlyphicX.com</a>.</p>
      </Modal>
      <Modal isOpen={isModalCookieOpen} onClose={closeCookieModal}>
        <h3 className='mainHeading mb-3'>Cookies</h3>
        <p className='para mb-3'>Our website uses cookies to enhance your browsing experience and improve our services. Cookies are small files that are stored on your device when you visit a website. They help us understand how you use our site and enable us to provide a more personalized experience.</p>

        <h4 className='subHeading'>Types of Cookies We Use:</h4>
        <ul className='para mb-3'>
          <li><strong>Session Cookies:</strong> These cookies are temporary and expire once you close your browser. They help us manage your session while you navigate our site.</li>
          {/* <li><strong>Persistent Cookies:</strong> These cookies remain on your device for a specified period or until you delete them. They help us remember your preferences for future visits.</li>
          <li><strong>Third-Party Cookies:</strong> We may also use cookies from third-party services for analytics and advertising purposes.</li> */}
        </ul>

        <h4 className='subHeading'>User Consent:</h4>
        <p className='para mb-3'>By using our website, you consent to our use of cookies.</p>

        <h4 className='subHeading'>Managing Cookies:</h4>
        <p className='para mb-3'>You can control how cookies are managed on your device by adjusting your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent. For more information on how to manage cookies, please visit the help section of your browser:</p>
        <ul className='para mb-3'>
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank">Chrome</a></li>
          <li><a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" target="_blank">Firefox</a></li>
          <li><a href="https://support.apple.com/en-us/HT201265" target="_blank">Safari</a></li>
        </ul>

        <p className='para'>If you have any questions or concerns about our use of cookies, please contact us at <a href="mailto:info@GlyphicX.com">info@GlyphicX.com</a>.</p>

      </Modal>
    </div>
  );
};

export default Footer;
