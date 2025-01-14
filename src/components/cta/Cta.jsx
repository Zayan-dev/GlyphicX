import React from 'react'
import "../cta/cta.css"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { Link } from 'react-router-dom'
import CustomButton from "../CustomButton";

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
        // scrub: 1,
      }
    });
    gsap.from("#gsapCtaBtn ", {
      opacity: 0,
      y: 100,
      scrollTrigger: {
        trigger: "#gsapCtaBtn",
        scroller: "body",
        markers: false,
        start: "top 80%",
        end: "top 40%",
        // scrub: 1,
      }
    });
  })
  return (
    <div className="cta">
      <div className="cta-outer">
        <div id="gsapCta" className="cta-inner">
          <p className="headingSpan mainHeading cta-text">
            Transforming Ideas into reality
          </p>
          <p className="para">
            Contact GlyphicX today for innovative solutions and exceptional
            design services.
          </p>
        </div>
        <div id="gsapCtaBtn" className="cta-btn-div">
          <Link to="/services">
            <CustomButton text="Learn More"></CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cta
