import React from 'react'
import '../feature/feature.css'

const Feature = () => {
  return (
    <div className='feature'>
      <div className='feature-img'>

      </div>
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
    </div>
  )
}

export default Feature
