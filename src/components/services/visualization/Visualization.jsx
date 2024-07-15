import React from 'react'
import "../visualization/visualization.css"
const Visualization = () => {
    return (
        <div className='visualization'>
            <div className="vis-pic">
            </div>

            <div className='vis-text'>
                <h1 className='mainHeading'>3D visualization</h1>
                <p className='para'>Confidently make informed decisions and bring your creative vision to life with our 3D visualization services. </p>
                <p className='para'>Get a clear, immersive representation of your final product, space, or design, enabling better understanding of scale, proportions, and design options</p>

                <div className='para vis-list'>
                    <li><i class="fa-solid fa-cube"></i> Clear Representation</li>
                    <li><i class="fa-solid fa-cube"></i> Collaborative Design</li>
                    <li><i class="fa-solid fa-cube"></i> Competitive Advantage</li>
                </div>
            </div>

        </div>
    )
}

export default Visualization
