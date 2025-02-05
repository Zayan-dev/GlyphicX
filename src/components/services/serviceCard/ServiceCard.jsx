import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./ServiceCard.css";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ServiceCard = ({ image, heading, text, sectionRefs ,enlarge,click}) => {
  const cardRef = useRef(null);
  const navigate = useNavigate()
  useEffect(() => {
    const element = cardRef.current;
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: "top 80%", // Triggers when the top of the element is 80% from the top of the viewport
          toggleActions: "play none none reverse", // Play animation on enter, reset on exit
        },
      }
    );
  }, []);
  const clickHandler = ()=>{
    navigate(`/services/${click}`)

  }

  const headingTransform = heading.toLowerCase().replace(/\s+/g, "");

  return (
    <div
      className="service-card-container cursor-pointer"
      id={headingTransform}
      // ref={sectionRefs[`#${headingTransform}`]}
      ref={(el) => {
        if (el) {
          cardRef.current = el;
          if (sectionRefs[`#${headingTransform}`]) {
            sectionRefs[`#${headingTransform}`].current = el; // Set the `.current` property
          }
        }
      }}
      onClick={clickHandler}
    >
      <div className="serviceeHeadingDiv">
        <img
          src={`/services/${image}.png`}
          alt={heading}
          className={`${enlarge ? " service-card-enlarge-image" :"service-card-image"  } `}
        />
        <h1 className="headingSpan mainHeading service-card-heading">
          {heading}
        </h1>
      </div>
      <p className="service-card-text para">{text}</p>
    </div>
  );
};

export default ServiceCard;
