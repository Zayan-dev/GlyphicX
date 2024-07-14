import React from 'react'
import '../benefit/benefit.css'
import CustomButton from '../CustomButton'

const Benefit = () => {
    return (
      <div className="benefit">
        <div className="benefit-heading">
          <p className="mainHeading">
            Transforming brands through captivating storytelling.
          </p>
        </div>
        <div className="benefit-intro">
          <p className="para">
            Welcome to GlyphicX, where creativity meets strategy to deliver
            exceptional brand experiences. Our team of experts is passionate
            about crafting compelling narratives that resonate with your
            audience and drive results.
          </p>
          <div className="benefit-intro-button">
            <CustomButton text="Learn More" />
          </div>
        </div>
      </div>
    );
}

export default Benefit
