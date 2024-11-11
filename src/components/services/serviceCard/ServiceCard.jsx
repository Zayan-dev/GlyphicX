import React from "react";
// import image from "/services/artboard1.png";
import "./ServiceCard.css"

const ServiceCard = ({image,heading,text, sectionRefs}) => {
  const headingTransform = heading.toLowerCase().replace(/\s+/g, "");
  return (
    <div className="service-card-container" id={headingTransform} ref={sectionRefs[`#${headingTransform}`]}>
      <img
        src={`/services/${image}.png`}
        alt="artboard1"
        className="service-card-image"
      />
      <h1 className="headingSpan mainHeading service-card-heading">{heading}</h1>
      <p className="service-card-text para">{text}</p>
    </div>
  );
};

export default ServiceCard;
