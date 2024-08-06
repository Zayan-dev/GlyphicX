import React from 'react'
import "../sketch/sketch.css"
import star from "../../../assets/images/Star.png"

const Sketch = () => {
    return (
        <div className='sketch'>
            <div className="sketch-pic">
            </div>

            <div className='sketch-text'>
                <h1 className='mainHeading'>Sketch Your vision Before Production Begins</h1>
                <p className='para'>At GlyphicX, we help our clients bring their ideas to life by providing professional storyboarding services. Working closely with you, we sketch out your vision before production begins, ensuring that every detail is captured and your project is set up for success. </p>

                <div className='para sketch-list'>
                    <li><img src={star} alt="star" style={{ height: "25px", mixBlendMode: "difference" }} /> Clarity of Vision</li>
                    <li><img src={star} alt="star" style={{ height: "25px", mixBlendMode: "difference" }} /> Collaborative Feedback </li>
                    <li><img src={star} alt="star" style={{ height: "25px", mixBlendMode: "difference" }} /> Reduced Risks</li>
                </div>
            </div>

        </div>
    )
}

export default Sketch