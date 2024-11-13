import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./ServiceCard.css";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ServiceCard = ({ image, heading, text, sectionRefs }) => {
  const cardRef = useRef(null);

  
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

  const headingTransform = heading.toLowerCase().replace(/\s+/g, "");

  return (
    <div
      className="service-card-container"
      id={headingTransform}
      ref={(el) => {
        cardRef.current = el;
        sectionRefs[`#${headingTransform}`] = el; // Register each section ref for external access
      }}
    >
      <img
        src={`/services/${image}.png`}
        alt={heading}
        className="service-card-image"
      />
      <h1 className="headingSpan mainHeading service-card-heading">{heading}</h1>
      <p className="service-card-text para">{text}</p>
    </div>
  );
};

export default ServiceCard;
