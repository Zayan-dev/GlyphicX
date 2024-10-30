import React from 'react';
import '../benefit/benefit.css';

const Benefit = () => {
  return (
    <div className="beneath-overlay">
      <div id="gsapBenefitContainer" className="benefit">
        <div id="gsapBenefitHeading" className="mainHeading benefit-heading">
          <p className="headingSpan">Transforming Brands</p>
          <p className="headingSpan">with CaPtivating</p>
          <p className="headingSpan">Storytelling</p>
        </div>
        <div className="benefit-intro">
          <p id="gsapBenefitIntro" className="para">
            Welcome to{" "}
            <span className='subHeading'>
              GlyphicX
            </span>
            , where creativity meets strategy to deliver
            exceptional brand experiences. Our team of experts are passionate
            about crafting compelling narratives that resonate with your
            audience and drive results.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Benefit;
