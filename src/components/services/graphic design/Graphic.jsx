import React, { useEffect, useRef, useState } from 'react'
import "../graphic design/graphic.css"
import img1 from "/Portfolio/GlyphicX/Glyphicx Profile 24-06-2024-30.jpg"
import img2 from "/Portfolio/Lambda Theta/4.jpg"
import img3 from "/Portfolio/EAXEE/Brand Guideline/EAXEE-29.jpg"
// import urge from "../../../../src/assets/videos/Urge_Fragrances.mp4"
import star from "../../../assets/images/Star.png"
const Graphic = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const videoRef = useRef(null);
    const slides = [
        { type: 'image', src: img1 },
        { type: 'image', src: img2 },
        { type: 'image', src: img3 },
        // { type: 'video', src: urge }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            if (slides[currentIndex].type === 'video' && videoRef.current) {
                if (videoRef.current.ended) {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
                }
            } else {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex, slides.length]);

    useEffect(() => {
        if (slides[currentIndex].type === 'video' && videoRef.current) {
            videoRef.current.play();
        }
    }, [currentIndex, slides]);
    return (
        <div className='graphic'>
            <div className='gsapGraphicText text'>
                <h1 className='mainHeading'>Graphic Design</h1>
                <p className='para'>Extraordinary design can transform your business. Whether you need a striking logo, captivating packaging, or an eye-catching illustration, our team of skilled designers is here to bring your vision to life.</p>
                <p className='para'>Compelling brand identities that resonate with your target audience, from logo design to brand guidelines, we help you establish a strong and memorable brand presence.</p>

                <div className='para list'>
                    <li><img src={star} alt="star" style={{ height: "25px" }} />Visual identity graphic design</li>
                    <li><img src={star} alt="star" style={{ height: "25px" }} /> Marketing & advertising graphic design</li>
                    <li><img src={star} alt="star" style={{ height: "25px" }} /> Publication graphic design</li>
                    <li><img src={star} alt="star" style={{ height: "25px" }} /> Packaging graphic design</li>
                    <li><img src={star} alt="star" style={{ height: "25px" }} /> Motion graphic design</li>
                    <li><img src={star} alt="star" style={{ height: "25px" }} /> Environmental graphic design</li>
                    <li><img src={star} alt="star" style={{ height: "25px" }} /> Art and illustration for graphic design</li>
                </div>
            </div>
            <div className="gsapGraphicSlider graphic-slider">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`graphic-slide ${index === currentIndex ? 'active' : ''}`}
                    >
                        {slide.type === 'image' ? (
                            <img src={slide.src} alt={`slide-${index}`} />
                        ) : (
                            <video
                                ref={videoRef}
                                src={slide.src}
                                onEnded={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)}
                                muted
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Graphic
