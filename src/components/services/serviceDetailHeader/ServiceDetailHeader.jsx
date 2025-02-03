import React, { useEffect, useState } from "react";
import "./ServiceDetailHeader.css";

const ServiceDetailHeader = ({ heading, content, image }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    console.log("width ", width);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <div>
      <div className="service-detail-hero">
        <div className="left-column">
          <div className="flex flex-row items-center gap-3 ">
            <h1 className="service-detail-heading">{heading}</h1>
            {width < 809 && (
              <img src={`/services/${image}.png`} alt={heading} style={{width:"75px"}} />
            )}
          </div>

          <p className="service-detail-content">{content}</p>
        </div>
        <div>
          {width >= 809 && <img src={`/services/${image}.png`} alt={heading} />}
          
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailHeader;
