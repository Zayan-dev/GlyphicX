import React from 'react'
import "../branding/branding.css"

const Branding = () => {
    return (
        <div className='branding'>
            <div className='text'>
                <h1 className='mainHeading'>Branding: unlocking the Power of Design for Your Business</h1>
                <p className='para'>At GlyphicX, we understand the vital role that branding plays in the success of a business. </p>
                <p className='para'>Compelling brand identities that resonate with your target audience, from logo design to brand guidelines, we help you establish a strong and memorable brand presence.</p>

                <div className='para list'>
                    <li><i class="fa-solid fa-cube"></i> Cohesive understanding of the brand's visual identity and direction</li>
                    <li><i class="fa-solid fa-cube"></i> Create compelling content that communicate your brand values</li>
                    <li><i class="fa-solid fa-cube"></i> Establish a strong brand presence that sets you apart from competitors</li>
                </div>
            </div>
            <div className="brand-pic">
        
            </div>
        </div>
    )
}

export default Branding
