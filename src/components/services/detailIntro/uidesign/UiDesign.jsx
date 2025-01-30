import React from "react";
import { Detail } from "../branding/Branding";
import "../branding/Branding.css"

const UiDesign = () => {
  const designDetail = [
    {
      heading: "Wireframes",
      text: "Mock-ups of the interface to demonstrate and refine various layouts and ideal interactions, streamlining feedback and iteration processes.",
    },
    {
      heading: "Visuals",
      text: "Designs that incorporate your creative vision and functional requirements with consistent visual identity",
    },
    {
      heading: "Prototypes",
      text: "Interactive models to see and feel exactly how the product functions before it’s built—perfect for identifying gaps",
    },
    {
      heading: "Usablity Testing",
      text: "User testing conducted on prototypes to improve your product. Uncover pain points in the user journey and highlights barriers to good usability.",
    },
  ];

  return (
   
        
      <div className="branding">
      <h1 className="pl-[20px] text-lg font-bold text-peanut">UI Services</h1>
        <div className="detail-wrapper">
          {designDetail.map((d, index) => (
            <Detail detail={d} />
          ))}
        </div>
        <div className="work-wrapper">
          <img src="/services/ui-detail.png" className="branding-image" style={{width:"100%"}} />
        
        </div>
      </div>

  );
};

export default UiDesign;
