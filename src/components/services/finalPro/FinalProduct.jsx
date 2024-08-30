import React, { useEffect, useState } from 'react'
import "../finalPro/finalproduct.css"
import { CustomButton3 } from '../../CustomButton'
import image1 from "../../../assets/images/slider/final_1.jpg";
import image2 from "../../../assets/images/slider/final_2.jpg";
import image3 from "../../../assets/images/slider/final_3.jpg";
import image4 from "../../../assets/images/slider/final_4.jpg";
import image5 from "../../../assets/images/slider/final_5.jpg";
import image6 from "../../../assets/images/slider/final_6.jpg";
const FinalProduct = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        { type: 'image', src: image1 },
        { type: 'image', src: image2 },
        { type: 'image', src: image3 },
        { type: 'image', src: image4 },
        { type: 'image', src: image5 },
        { type: 'image', src: image6 },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className='finalpro'>
            <div className='gsapFinalProText finalpro-text'>
                <p className="subHeading font-semibold">Craft</p>
                <h1 className='mainHeading'>From Idea to Final Product</h1>
                <p className='para'>Script development is a meticulous process that involves crafting and refining scripts</p>
                <p className='para'>Our team works closely with you to bring your vision to life. We understand the importance of storytelling and ensure that every script captures the essence of the brand</p>
                <p className='para'>Whether it's for a commercial, film, or video content, we are dedicated to delivering scripts that engage and captivate audiences.</p>
                {/* <div className="buttons">
                    <CustomButton3 text="Learn More" />
                    <CustomButton3 text="Contact" />
                </div> */}
            </div>
            <div className="gsapFinalProSlider finalpro-pic">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`finalpro-slide ${index === currentIndex ? 'active' : ''}`}
                    >
                        <img src={slide.src} alt={`slide-${index}`} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FinalProduct
