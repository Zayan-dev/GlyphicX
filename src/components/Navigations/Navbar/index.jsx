import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../Logo"; // Original bluish logo
import { CustomButton2 } from "../../CustomButton";
import WhiteLogo from "../../Logo/whiteLogo"; // White logo

const Navbar = ({ toggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Get the current location
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Only add the scroll event listener if on the homepage
    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const handleNavigation = (path) => {
    navigate(path); // Use navigate to change the route
  };

  // Define styles based on location
  const isHomePage = location.pathname === "/";
  const navbarStyles = isHomePage
    ? `fixed top-0 z-10 transition-colors duration-300 ${isScrolled ? 'bg-offWhite text-navyBlue opacity-100' : 'bg-transparent text-white opacity-100'}`
    : 'fixed top-0 z-10 text-navyBlue opacity-100 border-b-2 bg-offWhite'; // Default styles for other pages

    const listItemStyles = `${isHomePage && !isScrolled ? 'text-white' : ''} subHeading relative text-lg lg:text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 hover:text-royalBlue`;

  const activeLinkStyles = "after:w-full after:scale-x-0 after:scale-x-100 text-royalBlue ";

  return (
    <div id="gsapNavDiv" className={`${navbarStyles} w-full h-16 lg:h-[74px] min-h-[68px] transition-all duration-700`}>
      <div className="w-full px-[6%] md:px-10 lg:px-12 xl:px-16 xl3:px-20 h-full">
        <div className="h-full relative flex justify-between items-center">
          <ul className="hidden md2:flex justify-between gap-6 lg1:gap-12 xl3:gap-20">
            <li>
              <NavLink
                to="/"
                onClick={() => handleNavigation("/")}
                className={({ isActive }) =>
                  `${listItemStyles} ${isActive ? activeLinkStyles : ""} ${isHomePage ? (isScrolled ? 'after:bg-royalBlue' : 'after:bg-white') : 'after:bg-royalBlue'}`
                }
                id="gsapNavItem"
              >
                <p>Home</p>
              </NavLink>

            </li>
            <li>
              <NavLink
                to="/portfolio"
                onClick={() => handleNavigation("/portfolio")}
                className={({ isActive }) =>
                  `${listItemStyles} ${isActive ? activeLinkStyles : ""} ${isHomePage ? (isScrolled ? 'after:bg-royalBlue' : 'after:bg-white') : 'after:bg-royalBlue'}`
                }
                id="gsapNavItem"
              >
                <p>Our Work</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                onClick={() => handleNavigation("/services")}
                className={({ isActive }) =>
                  `${listItemStyles} ${isActive ? activeLinkStyles : ""} ${isHomePage ? (isScrolled ? 'after:bg-royalBlue' : 'after:bg-white') : 'after:bg-royalBlue'}`
                }
                id="gsapNavItem"
              >
                <p>Services</p>
              </NavLink>
            </li>
          </ul>
          <div id="gsapLogo" className="static md2:absolute md2:left-1/2 md2:transform md2:-translate-x-1/2">
            {isHomePage ? (isScrolled ? <Logo /> : <WhiteLogo />) : <Logo />} {/* Toggle logos based on page */}
          </div>

          <NavLink to="/contact" id="gsapContactBtn" className="hidden md2:flex xl:w-[180px]">
            <CustomButton2 text="Contact" />
          </NavLink>

          <button
            type="button"
            className="inline-flex items-center md2:hidden"
            onClick={toggle}
          >
            {/* Menu icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              color={isHomePage ? (isScrolled ? "#071C40" : "#FFFFFF") : "#071C40"}
            >
              <path
                fill={isHomePage ? (isScrolled ? "#071C40" : "#FFFFFF") : "#071C40"}
                d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
