import React from 'react'
import '../feature/feature.css'
// Todos
// Learn more and getstarted button in mobile mode
// Ask form obaid bhai about Engage and Differentiate divs appearence in mobile mode
const Feature = () => {
  return (
    <div className='feature'>
      <div className='feature-text'>
        <p className='bold-text'>Unlock the Power of Storytelling</p>
        <p>At GlyphicX, we believe in the transformative power of storytelling. Our strategic approach, combined with captivating visual language, helps our clients create meaningful connections with their audience.</p>
        <div className='feature-inner-div'>
            <div>
                <h5 className='font-bold'>Engage</h5>
                <p>Capture your audience's attention with compelling narratives and stunning visuals.</p>
            </div>
            <div>
                <h5 className='font-bold'>Differentiate</h5>
                <p>Stand out from the competition by telling your unique brand story.</p>
            </div>
        </div>
      </div>
      <div className='feature-img'>
      </div>
    </div>
  )
}

export default Feature
