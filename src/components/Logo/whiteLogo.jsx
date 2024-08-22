import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoImg from './../../assets/images/white.png'

const WhiteLogo = () => {
  // update the size of the logo when the size of the screen changes
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  // change between the logo and the button when the user scrolls
  const [showButton, setShowButton] = useState(false);

  const changeNavButton = () => {
    if (window.scrollY >= 400 && window.innerWidth < 768) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavButton);
  }, []);

  return (
    <>
      <Link to="/" style={{ display: "block" }}>
        {/* <Image
          src="/assets/images/glyphicX.png"
          alt="Logo"
          width={width < 641 ? "35" : "50"}
          height={width < 641 ? "35" : "50"}
          className="relative"
        /> */}
        <img
          src={logoImg}
          alt="Logo"
          width={width < 641 ? "35" : "70"}
          height={width < 641 ? "35" : "50"}
          className="relative"
        />
      </Link>
    </>
  );
};

export default WhiteLogo;
