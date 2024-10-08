import React from 'react'
import "./approach_benefits.css"
import wavePattern from "../../assets/images/wavePattern.png"

const ApproachAndBenefits = () => {
  return (
    <div className="mainContainer">
      {/* Wave pattern */}
      <div id="gsapWorkingStar" className="wavePatternDiv">
        <img id="gsapWorking" src={wavePattern} alt="Wave pattern" />
      </div>

      {/* Approach */}
      <div className="approach">
        <div id="gsapCollaborationHeading">
          <p className="mainHeading col-head-text">our APProach</p>
        </div>
        <div className="outerDiv">
          <div id="gsapWorking" className="innerDiv">
            <div id="gsapWorkingTextDiv" className="approachStep">
              <h3 className="subHeading">Discover</h3>
              <p className="para text-base">
                Understanding objectives to ensure both the parties are in sync
                and striving towards a shared vision.
              </p>
            </div>
            <div id="gsapWorkingTextDiv" className="approachStep">
              <h3 className="subHeading">Design</h3>
              <p className="para text-base">
                Create captivating and powerful, cutting-edge visuals to leave
                an impact
              </p>
            </div>
          </div>
          <div id="gsapWorking" className="innerDiv">
            <div id="gsapWorkingTextDiv" className="approachStep">
              <h3 className="subHeading">Create</h3>
              <p className="para text-base">
                Tailoring customized strategy aimed at achieving triumph
              </p>
            </div>
            <div id="gsapWorkingTextDiv" className="approachStep">
              <h3 className="subHeading">Deliver</h3>
              <p className="para text-base">
                Transforming ideas into reality with precision and utmost level
                of satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="benefits">
        <div id="gsapHeadingContainer">
          <p id="gsapWorkingHeading" className="mainHeading col-head-text">
            Why us ?
          </p>
        </div>
        <div className="outerDiv">
          <div id="gsapWorking" className="innerDiv">
            <div id="gsapWorkingTextDiv" className="benefitPointer">
              <h3 className="subHeading">Transparent Communication</h3>
              <p className="para text-base">
                At GlyphicX, we prioritize honesty and open communication to
                build strong partnerships with our clients.
              </p>
            </div>
            <div id="gsapWorkingTextDiv" className="benefitPointer">
              <h3 className="subHeading">Competitive Analysis</h3>
              <p className="para text-base">
                We dive deep into your market landscape, empowering you to make
                informed decisions and stay ahead
              </p>
            </div>
          </div>
          <div id="gsapWorking" className="innerDiv">
            <div id="gsapWorkingTextDiv" className="benefitPointer">
              <h3 className="subHeading">Audience Engagement</h3>
              <p className="para text-base">
                Captivating narratives resonate with your target market
              </p>
            </div>
            <div id="gsapWorkingTextDiv" className="benefitPointer">
              <h3 className="subHeading">Stunning designs</h3>
              <p className="para text-base">
                Visuals that make an impact. Leave a lasting impression on your
                audience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApproachAndBenefits
