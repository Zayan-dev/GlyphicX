import React, { useEffect } from 'react';
import '../benefit/benefit.css';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { CustomButton2 } from '../CustomButton';

// const splitTextIntoDivs = (selector) => {
//   const element = document.querySelector(selector);
//   const text = element.textContent;
//   const html = text.split(/\s+/).map(word => `<div class="word">${word}</div>`).join(' ');
//   element.innerHTML = html;

// };

const Benefit = () => {
  // useEffect(() => {
  //   splitTextIntoDivs("#gsapBenefitHeading");

  //   gsap.from("#gsapBenefitHeading .word", {
  //     opacity: 0,
  //     x: 800,
  //     stagger: 0.1,
  //     scrollTrigger: {
  //       trigger: "#gsapBenefitHeading",
  //       scroller: "body",
  //       markers: false,
  //       start: "top 90%",
  //       end: "top 50%",
  //       // scrub: 2,
  //     }
  //   });
  // }, []);

  return (
    <div id='gsapBenefitContainer' className="benefit">
      <div className="benefit-heading">
        <p id='gsapBenefitHeading' className="mainHeading">
          Transforming Brands Through CaPtivating Storytelling.
        </p>
      </div>
      <div className="benefit-intro">
        <p id='gsapBenefitIntro' className="para">
          Welcome to GlyphicX, where creativity meets strategy to deliver
          exceptional brand experiences. Our team of experts is passionate
          about crafting compelling narratives that resonate with your
          audience and drive results.
          {/* <div className="py-4 container">
            <a href='/' className="underline-btn">Learn More</a>
          </div> */}  
          <Link id="gsapContactBtn" to="/services" className="benefitContactBtn hidden md2:flex xl:w-[180px]">
              <CustomButton2 text="Learn More" />
            </Link>
        </p>
      </div>
    </div>
  );
}

export default Benefit;
