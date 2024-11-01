import React from 'react';
import '../feature/feature.css';
import unlockText from "../../assets/images/TextImages/unlockText.png";
import unlockMobileText from "../../assets/images/TextImages/unlockMobile.png";

const Feature = () => {
  return (
    <div className="feature">
      <div id="gsapFeatureVideo" className="unlockTextDiv">
        <img
          className="unlockTextImg"
          id="gsapWorking"
          src={unlockText}
          alt="Unlock"
        />
      </div>
      <div id="gsapFeatureText" className="feature-text">
        <div>
          <div id="gsapFeatureVideo">
            <img
              className="unlockMobileDiv"
              id="gsapWorking"
              src={unlockMobileText}
              alt="Unlock"
            />
          </div>
          <p className="mainHeading bold-text">the Power of storytelling</p>
        </div>
        <p className="para">
          At GlyphicX, we believe in the transformative power of storytelling.
          Our strategic approach, combined with captivating visual language,
          helps our clients create meaningful connections with their audience.
        </p>
        <div className="feature-inner-div">
          <p className="para">
            <span className="subHeading">Engage - </span>
            Capture your audience's attention with compelling narratives and
            stunning visuals.
          </p>
          <p className="para">
            <span className="subHeading">Differentiate - </span>
            Stand out from the competition by telling your unique brand story.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Feature;
