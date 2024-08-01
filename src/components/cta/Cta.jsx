import React from 'react'
import "../cta/cta.css"
import { CustomButton3 } from '../CustomButton'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'

const Cta = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from("#gsapCta p", {
      opacity: 0,
      y: -200,
      scrollTrigger: {
        trigger: "#gsapCta",
        scroller: "body",
        markers: false,
        start: "top 70%",
        end: "top 30%",
        scrub: 2,
      }
    });
    gsap.from("#gsapCtaBtn ", {
      opacity: 0,
      y: 100,
      scrollTrigger: {
        trigger: "#gsapCtaBtn",
        scroller: "body",
        markers: false,
        start: "top 140%",
        end: "top 40%",
        scrub: 2,
      }
    });
  })
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
