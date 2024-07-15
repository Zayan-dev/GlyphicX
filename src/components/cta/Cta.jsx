import React from 'react'
import "../cta/cta.css"
import { CustomButton2 } from '../CustomButton'

const Cta = () => {
  return (
    <div className="cta">
      <div className="cta-outer">
        <div className="cta-inner">
          <p className="mainHeading cta-text">Transforming Ideas into reality</p>
          <p className="para">
            Contact GlyphicX today for innovative solutions and exceptional
            design services.
          </p>
        </div>
        <div className="cta-btn-div">
          <CustomButton2 text="Contact" />
          <CustomButton2 text="Learn More" />
        </div>
      </div>
    </div>
  );
}

export default Cta
