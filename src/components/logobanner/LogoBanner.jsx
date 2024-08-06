import React from 'react'
import "../logobanner/logobanner.css"
import Slider from 'react-infinite-logo-slider'
import logo1 from "../../assets/images/slider/Logos/Eaxee-01.png"
import logo2 from "../../assets/images/slider/Logos/Lambda-Theta-01.png"
import logo3 from "../../assets/images/slider/Logos/Urge-01.png"

const LogoBanner = () => {
    return (
        <div className='logobanner'>
            <Slider
                width="300px"
                duration={25}
                pauseOnHover={true}
                blurBorders={false}
                blurBoderColor={`var(--background-color)`}
            >
                <Slider.Slide>
                    <img src={logo1} alt="any" className='w-36' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={logo2} alt="any2" className='w-36' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={logo3} alt="any3" className='w-36' />
                </Slider.Slide>
            </Slider>
        </div>
    )
}

export default LogoBanner
