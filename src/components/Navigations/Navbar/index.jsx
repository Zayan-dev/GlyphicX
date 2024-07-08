import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Logo";
import CustomButton from "../../CustomButton";

const Navbar = ({toggle}) => {
  const listItemStyles =
    "relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-navyBlue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center";
  return (
    <>
      <div className="w-full h-16 min-h-[68px] bg-offWhite fixed top-0 z-10 border-navyBlue border-b-2">
        <div className="w-full px-[6%] md:px-10 lg:px-12 xl:px-16 2xl:px-20 h-full">
          <div className="h-full relative flex justify-between items-center ">
            <ul className="hidden md:flex justify-between gap-4 lg:gap-12 text-navyBlue">
              <li>
                <Link to="/portfolio" className={listItemStyles}>
                  <p>Our Work</p>
                </Link>
              </li>
              <li>
                <Link to="/services" className={listItemStyles}>
                  <p>Services</p>
                </Link>
              </li>
              <li>
                <Link to="/resources" className={listItemStyles}>
                  <p>Resources</p>
                </Link>
              </li>
            </ul>
            <div className="static md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
              <Logo />
            </div>
            <Link to="/contact" className="hidden md:flex">
              <CustomButton text="Contact" />
            </Link>

            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              {/* Menu icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                color="var(--foreground-color)"
              >
                <path
                  fill="#071C40"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
