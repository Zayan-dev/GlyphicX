import React from 'react'
import '../hero/hero.css'
import Benefit from '../benefit/Benefit'
import Feature from '../feature/Feature'
import Working from '../working/Working'
import Collaboration from '../collaboration/Collaboration'
import Testimonial from '../testimonial/Testimonial'
import Team from '../team/Team'
import Cta from '../cta/Cta'

// Todos
// Adding a Slider in replace of div whose classname is hero
// Adding video in Collaboration as till now video is not provided 
// replacing icons in Collaboration 
// add scroll animation in Feature

const Hero = () => {
    return (
        <>
            <div className="hero">
            </div>
            <Benefit></Benefit>
            <Feature></Feature>
            <Collaboration></Collaboration>
            <Working></Working>
            <Testimonial></Testimonial>
            <Team></Team>
            <Cta></Cta>
        </>
    )
}

export default Hero



