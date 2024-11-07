import React from "react";
// import image from "/services/artboard1.png";
import "./ServiceCard.css"

const ServiceCard = () => {
  return (
    <div className="service-card-container" >
      <img src="/services/artboard1.png" alt="artboard1" className="service-card-image" />
      <h1 className="headingSpan service-card-heading">BRANDING</h1>
      <p className="service-card-text">
        At GlyphicX, we understand the vital role that branding plays in the
        <b> success of a business</b>. From logo design to brand guidelines, we help you
        establish a strong and memorable brand presence.
      </p>
    </div>
  );
};

export default ServiceCard;
