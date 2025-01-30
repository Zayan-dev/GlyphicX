import React from "react";
import "./Branding.css";
import { CustomButton4 } from "../../../CustomButton";

const Branding = () => {
  const brandingDetail = [
    {
      heading: "Logo Design",
      text: "Get a custom-designed logo for your business so you can stand out and elevate your brand. A great logo encapsulates your essence and remains recognizable at first glance",
    },
    {
      heading: "Visual Identity",
      text: "People naturally connect with colors, shapes, and imagery. A solid visual identity effectively differentiates you from competitors and brings you closer to your ideal audience.",
    },
    {
      heading: "Brand Positioning",
      text: "Positioning defines your brand’s essence and purpose. Our strategists craft and articulate a unique market position, ensuring a clear, compelling value proposition.",
    },
    {
      heading: "Brand Messaging",
      text: "Communicate effectively and clearly to your ideal customers and clients. Clear branding and messaging helps people develop a relationship that drives trust and action.",
    },
  ];
  return (
    <div className="branding">
    <h1 className="pl-[20px] text-lg font-bold text-peanut">Branding Services</h1>
      <div className="detail-wrapper">
        {brandingDetail.map((d, index) => (
          <Detail detail={d} />
        ))}
      </div>
      <div className="work-wrapper">
        <img src="/services/branding-detail.png" className="branding-image" />
        <h1 className="portfolio-heading">Explore Our Portfolio</h1>
        <CustomButton4 text="Our Work" />
      </div>
    </div>
  );
};

export const Detail = ({ detail }) => {
  return (
    <div className="detail">
      <h2 className="detail-heading">{detail.heading}</h2>
      <p className="detail-text">{detail.text}</p>
    </div>
  );
};

export default Branding;
