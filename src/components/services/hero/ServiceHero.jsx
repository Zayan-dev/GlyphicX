import React from 'react'
import "../../services/hero/service-hero.css"
const ServiceHero = (props) => {
  return (
    <>
      <div className="service-hero">
        <h1>{props.subheading}</h1>
        <div className="mainHeading heading">{props.heading}</div>
        <p className='para'>{props.para}</p>
      </div>
    </>
  );
}

export default ServiceHero
