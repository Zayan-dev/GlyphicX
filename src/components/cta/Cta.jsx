import React from 'react'
import "../cta/cta.css"
import { CustomButton3 } from '../CustomButton'

const Cta = () => {
  return (
    <div className="cta">
      <div className="cta-outer">
        <div id='gsapCta' className="cta-inner">
          <p className="mainHeading cta-text">Transforming Ideas into reality</p>
          <p className="para">
            Contact GlyphicX today for innovative solutions and exceptional
            design services.
          </p>
        </div>
        <div id='gsapCtaBtn' className="cta-btn-div">
          <CustomButton3 text="Contact" />
          <CustomButton3 text="Learn More" />
        </div>
      </div>
    </div>
  );
}

export default Cta
