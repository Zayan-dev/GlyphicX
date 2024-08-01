import React, { useEffect } from 'react';
import '../working/working.css';
import communication from "../../assets/images/working1.png"
import storytelling from "../../assets/images/working2.png"
import impact from "../../assets/images/working3.png"
import gsap from 'gsap';

// Todos
// Learn more button in mobile mode


const splitTextIntoDivs = (selector) => {
  const element = document.querySelector(selector);
  const text = element.textContent;
  const html = text.split(/\s+/).map(word => `<div class="word">${word}</div>`).join(' ');
  element.innerHTML = html;

};
const Working = () => {

  // useEffect(() => {
  //   splitTextIntoDivs("#gsapWorkingHeading");
  //   gsap.from("#gsapWorkingHeading .word", {
  //     opacity: 0,
  //     x: 800, 
  //     stagger: 0.1,
  //     duration:2,
  //     scrollTrigger: {
  //       trigger: "#gsapWorkingHeading",
  //       scroller: "body",
  //       markers: false,
  //       start: "top 90%",
  //       end: "top 50%",
  //       scrub: 2,
  //     }
  //   });
  // }, []);
  
  return (
    <div className='working'>
      <div id='gsapHeadingContainer'>
      <p id='gsapWorkingHeading' className='mainHeading font-bold working-heading'>Stand out with our Strategic and Creative APProach</p>
      </div>
      <div className='working-outer-div'>

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

      </div>
    </div>
  );
}

export default Working;
