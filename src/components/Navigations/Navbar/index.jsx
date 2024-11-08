import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../Logo"; // Original bluish logo
import CustomButton from "../../CustomButton";
import WhiteLogo from "../../Logo/whiteLogo"; // White logo

const Navbar = ({ toggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Get the current location
  const navigate = useNavigate(); // Initialize the navigate function

  //TODO: if no hover effects are required for the navbar links, just remove complex calculations 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname, isScrolled]);
  console.log(isScrolled)

  const handleNavigation = (path) => {
    navigate(path); // Use navigate to change the route
  };

  const navbarStyles = `fixed top-0 z-10 transition-colors duration-300 ${isScrolled ? 'bg-offWhite text-peanut opacity-100' : 'bg-transparent text-peanut opacity-100'}` // Default styles for other pages

    const listItemStyles = `${!isScrolled ? 'text-peanut' : ''} subHeading relative text-lg lg:text-xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300`;

  const activeLinkStyles = "after:w-full after:scale-x-0 after:scale-x-100 text-peanut ";


  // When resources navlink had to be added change all md: to md2
  return (
    <div
      id="gsapNavDiv"
      className={`${navbarStyles} w-full h-16 lg:h-[74px] min-h-[68px] transition-all duration-700`}
    >
      <div className="w-full px-[6%] md:px-10 lg:px-12 xl:px-16 xl3:px-20 h-full">
        <div className="h-full relative flex justify-between items-center">
          <ul className="hidden md:flex justify-between gap-6 lg1:gap-12 xl3:gap-20">
            <li>
              <NavLink
                to="/"
                onClick={() => handleNavigation("/")}
                className={({ isActive }) =>
                  `${listItemStyles} ${isActive ? activeLinkStyles : ""} ${isScrolled
                        ? "after:bg-peanut"
                        : "after:bg-peanut"
                  }`
                }
                id="gsapNavItem"
              >
                <p className="xl3:text-[1.375rem]">Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                onClick={() => handleNavigation("/portfolio")}
                className={({ isActive }) =>
                  `${listItemStyles} ${isActive ? activeLinkStyles : ""} ${
                    isScrolled
                        ? "after:bg-peanut"
                        : "after:bg-peanut"
                  }`
                }
                id="gsapNavItem"
              >
                <p className="xl3:text-[1.375rem]">Our Work</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                onClick={() => handleNavigation("/services")}
                className={({ isActive }) =>
                  `${listItemStyles} ${isActive ? activeLinkStyles : ""} ${
                    isScrolled
                        ? "after:bg-peanut"
                        : "after:bg-peanut"
                  }`
                }
                id="gsapNavItem"
              >
                <p className="xl3:text-[1.375rem]">Services</p>
              </NavLink>
            </li>
          </ul>
          <div
            id="gsapLogo"
            className="static md:absolute md:left-1/2 md:transform md:-translate-x-1/2"
          >
            {isScrolled ? <Logo /> : <WhiteLogo />}{" "}
            {/* Toggle logos based on page */}
          </div>

          <NavLink
            to="/contact"
            id="gsapContactBtn"
            className="hidden md:flex xl:w-[180px]"
          >
            <CustomButton text="Contact" />
          </NavLink>

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
              color={isScrolled ? "#071C40" : "#FFFFFF"}
            >
              <path
                fill={isScrolled ? "#071C40" : "#FFFFFF"}
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
