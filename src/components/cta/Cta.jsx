import React from 'react'
import "../cta/cta.css"

const Cta = () => {
  return (
    <div className='cta'>
        <div className="cta-outer">
      <div className="cta-inner">
        <p className='subHeading cta-text'>Transforming Ideas into Reality</p>
        <p className='para'>Contact GlyphicX today for innovative solutions and exceptional design services.</p>
      </div>
      <div className="cta-btn-div">
        <button className='subHeading contact'>Contact</button>
        <button className='subHeading learn'>Learn More</button>
      </div>
      </div>
    </div>
  )
}

export default Cta
