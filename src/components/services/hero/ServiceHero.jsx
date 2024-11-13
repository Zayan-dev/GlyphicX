import React from 'react'
import "../../services/hero/service-hero.css"
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const ServiceHero = (props) => {
  useGSAP(() => {

    gsap.from(".service-hero", {
      x: -400,
      opacity: 0,
      // duration: 1,
      scrollTrigger: {
        trigger: ".service-hero",
        scroller: "body",
        markers: false,
        start: "top 80%",
        end: "top 30%",
      }
    })
  }
  )
  return (
    <>
      <div className="service-hero">
        <h1 id='gsap-service-hero-heading'>{props.subheading}</h1>
        <div className="para service-hero-custom-subHeading">{props.heading}</div>
        <h1 className='headingSpan mainHeading'>{props.para}</h1>
      </div>
    </>
  );
}

export default ServiceHero
