import React from 'react'
import '../benefit/benefit.css'
import { CustomButton2 } from '../CustomButton'

const Benefit = () => {
  return (
    <div className="benefit">
      <div className="benefit-heading">
        <p className="mainHeading">
          Transforming Brands Through CaPtivating Storytelling.
        </p>
      </div>
      <div className="benefit-intro">
        <p className="para">
          Welcome to GlyphicX, where creativity meets strategy to deliver
          exceptional brand experiences. Our team of experts is passionate
          about crafting compelling narratives that resonate with your
          audience and drive results.  
          <div class="py-4 container">
            <a href='/' class="underline-btn">Learn More</a>
          </div>
        </p>
        {/* <div className="benefit-intro-button">
            <CustomButton2 text="Learn More" />
          </div> */}
      </div>
    </div>
  );
}

export default Benefit
