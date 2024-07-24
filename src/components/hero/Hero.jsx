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
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {


    useGSAP(
        () => {
            let tl = gsap.timeline();
            gsap.from('#gsapNavItem', {
                x: -500,
                duration: 1,
            });
            gsap.from('#gsapLogo', {
                y: -90,
                duration: 1,
            });
            gsap.from('#gsapContactBtn', {
                x: 500,
                duration: 1,
            });


            gsap.from('#gsapSlider', {
                y: 100,
                opacity: 0,
                scale: 3,
                duration: 1
            });
        },

    );

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



