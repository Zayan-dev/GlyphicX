import React from 'react'
import "../visualization/visualization.css"
// Todos
// 1- list icons to be change
const Visualization = () => {
    return (
        <div className='visualization'>
            <div className="vis-pic">
            </div>

            <div className='vis-text'>
                <h1>3D Visualization</h1>
                <p>Confidently make informed decisions and bring your creative vision to life with our 3D visualization services. </p>
                <p>Get a clear, immersive representation of your final product, space, or design, enabling better understanding of scale, proportions, and design options</p>

                <div className='vis-list'>
                    <li><i class="fa-solid fa-box"></i> Clear Representation</li>
                    <li><i class="fa-solid fa-box"></i> Collaborative Design</li>
                    <li><i class="fa-solid fa-box"></i> Competitive Advantage</li>
                </div>
            </div>

        </div>
    )
}

export default Visualization
