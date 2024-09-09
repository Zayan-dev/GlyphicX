
import React, { useState } from "react";
import "./contact.css";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import CustomButton from "../CustomButton";
import Alert from "../alert/alertBox";

const Contact = () => {  
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

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Detect spams by checking honeypot field
    if (data.honeypot) {
      reset();
      console.log("Spam email, discarding submission!");
      return;
    }

    // Destrcture data object
    const { fullName, email, subject, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      const templateParams = {
        fullName,
        email,
        subject,
        message,
      };

      console.log(import.meta.env.VITE_APP_SERVICE_ID);
      // await emailjs.send(
      //   import.meta.env.VITE_APP_SERVICE_ID,
      //   import.meta.env.VITE_APP_TEMPLATE_ID,
      //   templateParams,
      //   import.meta.env.VITE_APP_PUBLIC_KEY
      // );

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
    <div className="contact-page">
      <div className="box1">
        <div className="contacttext">
          <h1 className="mainHeading">
            <span className="connect">Connect</span> with our Team of ExPerts
          </h1>
          <p className="para">
            Contact our team of excellence-driven experts today to bring your
            project to life
          </p>
        </div>
      </div>
      <div className="box2">
        {/* Contact form */}
        <div className="contactContainer">
          {/* <h1 className={`contactPageHeadings mainHeading`}>Contact us</h1> */}
          <form
            className="contactForm"
            id="contact-form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            disabled={disabled}
          >
            {/* Form Row 1 */}

            <div className="formRow">
              <div className="inputField">
                <label htmlFor="fullName" className="para">
                  Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  className="para"
                  id="fullName"
                  {...register("fullName", {
                    required: {
                      value: true,
                      message: "Please enter your Full Name",
                    },
                    maxLength: {
                      value: 50,
                      message: "Please use 50 characters or less",
                    },
                  })}
                />
                {errors.fullName && (
                  <span className="para errorMessage">
                    {errors.fullName.message}
                  </span>
                )}
              </div>
              <div className="inputField">
                <label htmlFor="email" className="para">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="para"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  })}
                />
                {errors.email && (
                  <span className="para errorMessage">
                    Please enter a valid email address
                  </span>
                )}
              </div>
            </div>

            {/* Form Row 2 */}
            <div className="inputField">
              <label htmlFor="subject" className="para">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="para"
                {...register("subject", {
                  required: { value: true, message: "Please enter a subject" },
                  maxLength: {
                    value: 100,
                    message: "Subject cannot exceed 100 characters",
                  },
                })}
              />
              {errors.subject && (
                <span className="para errorMessage">
                  {errors.subject.message}
                </span>
              )}
            </div>

            {/* Form Row 3 */}
            <div className="inputField">
              <label htmlFor="message" className="para">
                Message
              </label>
              <textarea
                rows={5}
                name="message"
                id="message"
                className="para textarea"
                {...register("message", {
                  required: true,
                })}
              />
              {errors.message && (
                <span className="para errorMessage">
                  Please enter a message
                </span>
              )}
            </div>

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

            <div id="submitButton" className="para">
              <CustomButton text="Submit" type="submit" />
            </div>
          </form>
        </div>
      </div>

      <Alert
        display={alertInfo.display}
        message={alertInfo.message}
        type={alertInfo.type}
        onClose={() => setAlertInfo({ display: false, message: "", type: "" })}
      />
    </div>
  );
}


export default Contact
