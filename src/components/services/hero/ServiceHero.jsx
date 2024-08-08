import React from 'react'
import "../../services/hero/service-hero.css"
const ServiceHero = (props) => {
  return (
    <>
      <div className="service-hero">
        <h1 id='gsap-service-hero-heading'>{props.subheading}</h1>
        <div className="mainHeading heading">{props.heading}</div>
        <p className='para service-hero-para'>{props.para}</p>
      </div>
    </>
  );
}

export default ServiceHero
