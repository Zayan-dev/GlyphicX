import React from 'react'
import Branding from './branding/Branding'
import { useGSAP } from "@gsap/react";
import dots from "../../../assets/images/Patterns/dots.png";
import circleDotPattern from "../../../assets/images/Patterns/Dots-01.png";
import arrowDots from "../../../assets/images/Patterns/arrowWithDotsPattern.png";
import "./ServiceDetailIntro.css"
import circleDotWithDoodlePattern from "../../../assets/images/Patterns/secondDotPattern.png";
import gsap from "gsap";
import "./ServiceDetailIntro.css"
import UiDesign from './uidesign/UiDesign';
import Grapic from './graphic/Grapic';
// import "../serviceIntro/ServiceIntro.css"


const ServiceDetailIntro = ({detail}) => {
    console.log("detail",detail)
    useGSAP(() => {
      gsap.to("#pattern1", {
        opacity: 0.2,
        duration: 1,
        repeat: -1,
        ease: "none",
        yoyo: true
      })
      gsap.to("#pattern2", {
        repeat: -1,
        y: -30,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true
      })
      gsap.to("#pattern3", {
        x: 10,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      })
    })
  return (
    <div className='relative'>
     <img
            id="pattern2"
            height="10%"
            width="10%"
            src={arrowDots}
            alt="Arrow with dots"
            className="dot-arrow-image intro-side-images"
          />
          <img
            id="pattern3"
            height="10%"
            width="10%"
            src={dots}
            alt="Dots"
            className="dot-image intro-side-images"
          />
          <img
            height="30%"
            width="30%"
            src={circleDotPattern}
            alt="Dots"
            className="dot-circle-image"
          />
          <img
            id="pattern2"
            height="10%"
            width="10%"
            src={arrowDots}
            alt="Dots"
            className="dot-arrow-image2"
          />
          {detail == "design" && <UiDesign/>}
          {detail == "branding" && <Branding/>}
          {detail == "graphic" && <Grapic/>}
         
           {/* <Branding/> */}
    </div>
   
  )
}

export default ServiceDetailIntro