import React from 'react'
import '../hero/hero.css'
import Benefit from '../benefit/Benefit'
import Feature from '../feature/Feature'
import Working from '../working/Working'
import Collaboration from '../collaboration/Collaboration'
import Testimonial from '../testimonial/Testimonial'
import Team from '../team/Team'
import Cta from '../cta/Cta'
import image1 from "../../assets/images/working1.png"
import image2 from "../../assets/images/working2.png"

// Todos
// add scroll animation in Feature

const Hero = () => {

    return (
        <>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={image1}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={image2}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={image1}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src={image2}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
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



