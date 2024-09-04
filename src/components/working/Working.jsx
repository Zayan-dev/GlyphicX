import React from 'react';
import '../working/working.css';
import communication from "../../assets/images/working1.png"
import storytelling from "../../assets/images/working2.png"
import impact from "../../assets/images/working3.png"
import stars from "../../assets/images/stars.png"

const Working = () => {

  return (
    <div className="working">
      <div id="gsapHeadingContainer">
        <p
          id="gsapWorkingHeading"
          className="mainHeading font-bold working-heading"
        >
          Why us ?
        </p>
      </div>

      {/* <div className='working-outer-div'>

        <div id="gsapWorking" className='working-inner-div'>
          <img id='gsapWorkingImg' src={communication} alt="Description of image" />
          <div className=' flex flex-col gap-4'>
            <p className='subHeading inner-div-heading'>Transparent Communication for Effective Collaboration</p>
            <p className="para">At GlyphicX, we prioritize honesty and open communication to build strong partnerships with our clients.</p>
          </div>
        </div>

        <div id="gsapWorking" className='working-inner-div'>
          <img id='gsapWorkingImg' src={storytelling} alt="Description of image" />
          <div className=' flex flex-col gap-4'>
            <p className='subHeading inner-div-heading'>Compelling Storytelling to Engage Your Audience</p>
            <p className="para">Captivating narratives that resonate with your target market.</p>
          </div>
        </div>

        <div id="gsapWorking" className='working-inner-div'>
          <img id='gsapWorkingImg' src={impact} alt="Description of image" />
          <div className=' flex flex-col gap-4'>
            <p className='subHeading inner-div-heading'>Visually Stunning Designs that Make an Impact</p>
            <p className="para">Designs that leave a lasting impression on your audience.</p>
          </div>
        </div>

      </div> */}
      <div className="outerContainer">
        <div className="imageDiv">
          <img id="gsapWorking" src={stars} alt="Why us stars" />
        </div>
        <div id="gsapWorking" className="textDiv">
          <div className="pointerDiv">
            <h3 className="subHeading">Transparent Communication</h3>
            <p className="para">
              At GlyphicX, we prioritize honesty and open communication to build
              strong partnerships with our clients.
            </p>
          </div>
          <div id="gsapWorking" className="pointerDiv">
            <h3 className="subHeading">Competitive Analysis</h3>
            <p className="para">
              We dive deep into your market landscape, empowering you to make
              informed decisions and stay ahead
            </p>
          </div>
          <div id="gsapWorking" className="pointerDiv">
            <h3 className="subHeading">Audience Engagement</h3>
            <p className="para">
              Captivating narratives resonate with your target market
            </p>
          </div>
          <div id="gsapWorking" className="pointerDiv">
            <h3 className="subHeading">Stunning designs</h3>
            <p className="para">
              Visuals that make an impact. Leave a lasting impression on your
              audience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Working;
