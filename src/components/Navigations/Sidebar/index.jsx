import React from "react";
import { IoHome } from "react-icons/io5";
import { GrResources } from "react-icons/gr";
import { MdDesignServices } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { Link } from "react-router-dom";
import CustomButton from "../../CustomButton";

const Sidebar = ({ isOpen, toggle }) => {
  const listItemStyles = "h-[60px] rounded hover:bg-royalBlue mb-4";
  const linkStyles = "h-full flex items-center gap-8 font-medium px-[4%]";
  return (
    <>
      <div
        className={`sidebar-container fixed w-full h-full bg-navyBlue bg-cover bg-center overflow-hidden justify-start transition-transform duration-[400ms] pt-[110px] left-0 z-50`}
        style={{
          transform: `${isOpen ? "translateX(0)" : "translateX(100%)"}`,
          backgroundImage: "url('/theblueBg.svg')",
        }}
      >
        <button
          className="absolute right-0 top-0 py-8 px-[8%]"
          onClick={toggle}
        >
          {/* Close icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            color="var(--background-color)"
          >
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            />
          </svg>
        </button>

        <ul className="subHeading w-full px-[8%] text-left text-offWhite text-xl">
          <li className={listItemStyles}>
            <Link to="/" className={linkStyles} onClick={toggle}>
              <IoHome />
              <p>Home</p>
            </Link>
          </li>
          <li className={listItemStyles}>
            <Link to="/portfolio" className={linkStyles} onClick={toggle}>
              <GrProjects />
              <p>Our Work</p>
            </Link>
          </li>
          <li className={listItemStyles}>
            <Link to="/services" className={linkStyles} onClick={toggle}>
              <MdDesignServices />
              <p>Services</p>
            </Link>
          </li>
          <li className={listItemStyles}>
            <Link to="/resources" className={linkStyles} onClick={toggle}>
              <GrResources />
              <p>Resources</p>
            </Link>
          </li>
        </ul>
        <Link to="/contact" className="subHeading px-[12%] block mt-12 w-full" onClick={toggle}>
          <CustomButton text="Contact" />
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
