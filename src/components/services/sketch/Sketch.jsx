import React from 'react'
import "../sketch/sketch.css"

const Sketch = () => {
    return (
        <div className='sketch'>
            <div className="sketch-pic">
            </div>

            <div className='sketch-text'>
                <h1 className='mainHeading'>Sketch Your vision Before Production Begins</h1>
                <p className='para'>At GlyphicX, we help our clients bring their ideas to life by providing professional storyboarding services. Working closely with you, we sketch out your vision before production begins, ensuring that every detail is captured and your project is set up for success. </p>

                <div className='para sketch-list'>
                    <li><i class="fa-solid fa-cube"></i> Clarity of Vision</li>
                    <li><i class="fa-solid fa-cube"></i> Collaborative Feedback </li>
                    <li><i class="fa-solid fa-cube"></i> Reduced Risks</li>
                </div>
            </div>

        </div>
    )
}

export default Sketch
