import React, { useState } from 'react';
import '../footer/footer.css';
import Modal from '../Modal'; // Import Modal component
import logo from "../../assets/logo.png"
import { CustomButton2 } from '../CustomButton';
import { useForm } from 'react-hook-form';
import emailjs from "emailjs-com";
import Alert from "../alert/alertBox";
import { Link, useNavigate } from 'react-router-dom';


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
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalTosOpen, setIsModalTosOpen] = useState(false);
  const [isModalCookieOpen, setIsModalCookieOpen] = useState(false);


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
    <div id="footerSection" className="footerDiv">
      <div className="flex-container">
        <div className="footer-section ">
          <div className="logo-text">
            <img src={logo} alt="logo" />
          </div>
          <p className="para">Stay up to date with our offers and services</p>
          <div className="newsletter">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              disabled={disabled}
            >
              <input
                type="email"
                placeholder="your email"
                name="email"
                id="email"
                className="para"
                {...register("email", {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
              />

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
                <CustomButton2 text="Subscribe" type="submit" />
              </div>
            </form>
            {errors.email && (
              <span className="para errorMessage text-offWhite">
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
            <h3 className="subHeading column-div-heading">Services</h3>
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
            <h3 className="subHeading column-div-heading">Follow us</h3>
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61555673464641&mibextid=kFxxJD"
            >
              <div className="social">
                <div>
                  <i className="fa-brands fa-square-facebook fa-xl"></i>
                </div>
                <p className="para">Facebook</p>
              </div>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/glyphicx_agency?igsh=MndxZzFqazRhOXpj"
            >
              <div className="social">
                <div>
                  <i className="fa-brands fa-square-instagram fa-xl"></i>
                </div>
                <p className="para">Instagram</p>
              </div>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/glyphicx/"
            >
              <div className="social">
                <div>
                  <i className="fa-brands fa-linkedin fa-xl"></i>
                </div>
                <p className="para">Linkedin</p>
              </div>
            </a>
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
            <h3 className="subHeading column-div-heading">Contact Us</h3>
            <a target="_blank" href="mailto:info@GlyphicX.com">
              <div className="social">
                <div>
                  <i className="fa-solid fa-envelope fa-xl"></i>
                </div>
                <p className="para">info@glyphicx.com</p>
              </div>
            </a>
            <a
              href="https://wa.me/923192001014"
              target="_blank"
              className="para"
            >
              <div className="social">
                <div>
                  <i className="fa-brands fa-square-whatsapp fa-xl"></i>
                </div>
                <p className="para">+92 319 2001014</p>
              </div>
            </a>
            <a
              href="https://www.google.com/maps?q=24.91054099503488,67.13492330610099"
              target="_blank"
              className="para"
            >
              <div className="social">
                <div>
                  <i className="fa-solid fa-location-dot fa-xl"></i>
                </div>
                <p className="para">
                  C 93 Zaibunnisa Blvd, Block 13 Gulistan-e-Johar,
                  Karachi, Pakistan
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="flex footer-bottom">
        <div className="copyright">
          <p className="para">&copy; 2024 All rights reserved.</p>
        </div>
        <ul className="para footer-links">
          <li>
            <Link to="/privacypolicy" className="cursor-pointer">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/termsofservices" className="cursor-pointer">
              Terms of Service
            </Link>
          </li>
          <li>
            <a onClick={openCookieModal} className="cursor-pointer">
              Cookie Settings
            </a>
          </li>
        </ul>
      </div>

      <Alert
        display={alertInfo.display}
        message={alertInfo.message}
        type={alertInfo.type}
        onClose={() => setAlertInfo({ display: false, message: "", type: "" })}
      />

      <Modal isOpen={isModalCookieOpen} onClose={closeCookieModal}>
        <div className="text-navyBlue">
          <div className="flex justify-between items-center">
            <h3 className="mainHeading mb-3 uppercase">Cookies</h3>

            <button
              className="text-4xl fixed left-2/3 font-semibold mb-6 rotate-45"
              onClick={closeCookieModal}
            >
              +
            </button>
          </div>
          <p className="para mb-4">
            Our website uses cookies to enhance your browsing experience and
            improve our services. Cookies are small files that are stored on
            your device when you visit a website. They help us understand how
            you use our site and enable us to provide a more personalized
            experience.
          </p>

          <h4 className="subHeading mb-2">Types of Cookies We Use:</h4>
          <ul className="para mb-4">
            <p>
              <strong>Session Cookies:</strong> These cookies are temporary and
              expire once you close your browser. They help us manage your
              session while you navigate our site.
            </p>
          </ul>

          <h4 className="subHeading mb-2">User Consent:</h4>
          <p className="para mb-4">
            By using our website, you consent to our use of cookies.
          </p>

          <h4 className="subHeading mb-2">Managing Cookies:</h4>
          <p className="para">
            You can control how cookies are managed on your device by adjusting
            your browser settings. Most browsers allow you to refuse cookies or
            alert you when cookies are being sent. For more information on how
            to manage cookies, please visit the help section of your browser:
          </p>
          <ul className="para text-peanut">
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
              >
                Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored"
                target="_blank"
              >
                Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/en-us/HT201265"
                target="_blank"
              >
                Safari
              </a>
            </li>
          </ul>

          <p className="para">
            If you have any questions or concerns about our use of cookies,
            please contact us at{" "}
            <a
              href="mailto:info@GlyphicX.com"
              className="text-peanut font-semibold"
            >
              info@GlyphicX.com
            </a>
            .
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default Footer;
