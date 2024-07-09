import React from 'react'
import '../hero/hero.css'
import Benefit from '../benefit/Benefit'
import Feature from '../feature/Feature'
import Working from '../working/Working'
import Collaboration from '../collaboration/Collaboration'
import Testimonial from '../testimonial/Testimonial'
import Team from '../team/Team'
import Cta from '../cta/Cta'
import ImageSlider from '../ImageSlider/ImageSlider'

const Hero = () => {

    return (
        <>
            <ImageSlider></ImageSlider>
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



