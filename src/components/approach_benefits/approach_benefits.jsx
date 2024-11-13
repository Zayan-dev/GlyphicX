import React from 'react'
import "./approach_benefits.css"
import arrowWithDots from "../../assets/images/Patterns/arrowWithDotsPattern.png";
import dots from "../../assets/images/Patterns/dots.png";
import whyUs from "../../assets/images/TextImages/whyUs.png"
import whyUsMobile from "../../assets/images/TextImages/whyUsMobile.png"
import transparent from "../../assets/images/WhyUsLogos/transparentCommunication.png"
import competitive from "../../assets/images/WhyUsLogos/competitiveAnalysis.png";
import audience from "../../assets/images/WhyUsLogos/audienceEngagement.png";
import stunning from "../../assets/images/WhyUsLogos/stunningDesigns.png";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ApproachAndBenefits = () => {
  useGSAP(() => {
    gsap.to("#pattern2", {
      y: -30,
      duration: 1,
      repeat: -1,
      ease:"none",
      yoyo: true
    })
    gsap.to("#pattern3", {
      duration: 1,
      ease: "none",
      repeat: -1,
      yoyo:true,
      x:60
    })
  })
  return (
    <div className="mainContainer">
      {/* Arrow with dots pattern */}
      <div id="pattern2" className="arrowWithDotsDiv">
        <img
          id="pattern2"
          height="100%"
          width="100%"
          src={arrowWithDots}
          alt="Arrow with dots"
        />
      </div>
      {/* Dots pattern */}
      <div id="pattern3" className="dotsDiv">
        <img
          id="gsapWorking"
          height="100%"
          width="100%"
          src={dots}
          alt="Dots"
        />
      </div>

      {/* Approach */}
      <div className="approach">
        <div id="gsapBenefitHeading" className="mainHeading approach-heading">
          <p className="headingSpan">Our approach to</p>
          <p className="headingSpan">client collaboration</p>
        </div>
        <div className="outerDiv">
          <div id="gsapWorkingTextDiv" className="approachStep">
            <h3 className="subHeading">Discover</h3>
            <p className="para">
              Understanding objectives to ensure both the parties are in sync
              and striving towards a shared vision.
            </p>
          </div>
          <div id="gsapWorkingTextDiv" className="approachStep">
            <h3 className="subHeading">Design</h3>
            <p className="para">
              Create captivating and powerful, cutting-edge visuals to leave an
              impact
            </p>
          </div>
          <div id="gsapWorkingTextDiv" className="approachStep">
            <h3 className="subHeading">Create</h3>
            <p className="para">
              Tailoring customized strategy aimed at achieving triumph
            </p>
          </div>
          <div id="gsapWorkingTextDiv" className="approachStep">
            <h3 className="subHeading">Deliver</h3>
            <p className="para">
              Transforming ideas into reality with precision and utmost level of
              satisfaction
            </p>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="benefits">
        <div id="gsapFeatureVideo" className="WhyUsDiv">
          <img className="whyUsImg" id="gsapWorking" src={whyUs} alt="Why Us" />
        </div>
        <div id="gsapFeatureVideo" className="whyUsImgMobileDiv">
          <img
            className="whyUsImgMobile"
            id="gsapWorking"
            src={whyUsMobile}
            alt="Why Us"
          />
        </div>
        <div id="gsapFeatureText" className="whyUsReasons">
          <div id="gsapWorkingTextDiv" className="reasonPointer">
            <img id="gsapWorking" src={transparent} alt="Transparent" />
            <h3 className="subHeading">
              Transparent <br></br> Communication
            </h3>
          </div>
          <div id="gsapWorkingTextDiv" className="reasonPointer">
            <img id="gsapWorking" src={competitive} alt="Competitive" />
            <h3 className="subHeading">
              Competitive <br></br> Analysis
            </h3>
          </div>
          <div id="gsapWorkingTextDiv" className="reasonPointer">
            <img id="gsapWorking" src={audience} alt="Audience" />
            <h3 className="subHeading">
              Audience <br></br> Engagement
            </h3>
          </div>
          <div id="gsapWorkingTextDiv" className="reasonPointer">
            <img id="gsapWorking" src={stunning} alt="Stunning" />
            <h3 className="subHeading">
              Stunning <br></br> designs
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApproachAndBenefits
