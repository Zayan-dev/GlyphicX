import React from "react";
import "./ServiceDetailHeader.css"

const ServiceDetailHeader = ({ heading, content, image }) => {
  return (
    <div>
      <div className="service-detail-hero">
        <div className="left-column">
          <h1 className="service-detail-heading">{heading}</h1>
          <p className="service-detail-content">{content}</p>
        </div>
        <div>
          <img
            src={`/services/${image}.png`}
            alt={heading}
           
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailHeader;
