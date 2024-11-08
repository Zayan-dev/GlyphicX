import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../CustomButton";
import logo from "../../../assets/images/sidebarLogo2.png"
import bg from "../../../assets/bg.png"

//TODO: Ask for Sidebar changes according to design
const Sidebar = ({ isOpen, toggle }) => {

  const listItemStyles = "h-[60px] rounded hover:bg-offWhite mb-4 hover:text-navyBlue";
  const linkStyles = "h-full w-full flex items-center justify-center gap-8 font-medium px-[4%]";
  return (
    <div className="relative">
      {/* Background Blur Overlay */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/5 bg-opacity-35 backdrop-blur-sm z-40"
          onClick={toggle} // Closes sidebar when the background is clicked
        />
      )}

      {/* Sidebar */}
      <div
        className={`sidebar-container shadow-sm bg-navyBlue shadow-offWhite pr-14 fixed w-full h-full bg-cover bg-center overflow-hidden justify-start transition-transform duration-[400ms] pt-[110px] left-0 z-50`}
        style={{
          transform: `${isOpen ? "translateX(15%)" : "translateX(110%)"}`,
          boxShadow: "-5px 0px 18px -10px #fffaf0",
        }}
      >
        <button
          className="absolute right-14 top-0 py-8 px-[8%]"
          onClick={toggle}
        >
          {/* Close icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            color="var(--foreground-color)"
          >
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            />
          </svg>
        </button>

        <ul className="subHeading w-full px-[8%] text-left text-peanut text-xl">
          <li className="w-full mb-10 flex justify-center items-center">
            <Link to="/" className="" onClick={toggle}>
              <img src={logo} alt="logo" style={{ height: "39px" }} />
              {/* for second image apply these inline styles to the img tag style={{ height: "100px" }} */}
            </Link>
          </li>
          <hr
            className="border-0 rounded-full h-[6px] w-4/5 block m-auto mb-6"
            style={{
              background: "linear-gradient(275deg, #6D3C7D, #E58C10)",
            }}
          />
          <li className={listItemStyles}>
            <Link to="/" className={linkStyles} onClick={toggle}>
              {/* <IoHome /> */}
              <p>Home</p>
            </Link>
          </li>
          <li className={listItemStyles}>
            <Link to="/portfolio" className={linkStyles} onClick={toggle}>
              {/* <GrProjects /> */}
              <p>Our Work</p>
            </Link>
          </li>
          <li className={listItemStyles}>
            <Link to="/services" className={linkStyles} onClick={toggle}>
              {/* <MdDesignServices /> */}
              <p>Services</p>
            </Link>
          </li>
          {/* <li className={listItemStyles}>
            <Link to="/resources" className={linkStyles} onClick={toggle}>
              <GrResources />
              <p>Resources</p>
            </Link>
          </li> */}
        </ul>
        <div className="flex justify-center">
          <Link
            to="/contact"
            className="subHeading px-[12%] block mt-8 w-4/5"
            onClick={toggle}
          >
            <CustomButton text="Contact" />
          </Link>
        </div>

        <div className="w-full px-[8%] text-left text-peanut">
          <hr
            className="border-0 h-[6px] m-auto w-4/5 rounded-full block mt-12"
            style={{
              background: "linear-gradient(275deg, #6D3C7D, #E58C10)",
            }}
          />
        </div>

        <div
          className="subHeading flex px-[12%] gap-8 justify-center mt-12 w-full"
          onClick={toggle}
        >
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=61555673464641&mibextid=kFxxJD"
          >
            {" "}
            <i
              className="fa-brands fa-square-facebook"
              style={{ color: "#E58C10", fontSize: "30px" }}
            ></i>
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/glyphicx_agency?igsh=MndxZzFqazRhOXpj"
          >
            {" "}
            <i
              className="fa-brands fa-square-instagram"
              style={{ color: "#E58C10", fontSize: "30px" }}
            ></i>
          </a>
          <a target="_blank" href="https://www.linkedin.com/company/glyphicx/">
            {" "}
            <i
              className="fa-brands fa-linkedin"
              style={{ color: "#E58C10", fontSize: "30px" }}
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;