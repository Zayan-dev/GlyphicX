import React, { useEffect, useRef, useState } from 'react'
import "../branding/branding.css"
import img1 from "../../../../src/assets/images/slider/1.png"
import img2 from "../../../../src/assets/images/slider/2.png"
import urge from "../../../../src/assets/videos/Urge_Fragrances.mp4"
import star from "../../../assets/images/Star.png"
const Branding = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const videoRef = useRef(null);
    const slides = [
        { type: 'image', src: img1 },
        { type: 'image', src: img2 },
        { type: 'video', src: urge }
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
        <div className='branding'>
            <div className='text'>
                <h1 className='mainHeading'>Branding: unlocking the Power of Design for Your Business</h1>
                <p className='para'>At GlyphicX, we understand the vital role that branding plays in the success of a business. </p>
                <p className='para'>Compelling brand identities that resonate with your target audience, from logo design to brand guidelines, we help you establish a strong and memorable brand presence.</p>

                <div className='para list'>
                    <li><img src={star} alt="star" style={{ height: "25px" }} />Cohesive understanding of the brand's visual identity and direction</li>
                    <li><img src={star} alt="star" style={{ height: "25px" }} /> Create compelling content that communicate your brand values</li>
                    <li><img src={star} alt="star" style={{ height: "25px" }} /> Establish a strong brand presence that sets you apart from competitors</li>
                </div>
            </div>
            <div className="branding-slider">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`branding-slide ${index === currentIndex ? 'active' : ''}`}
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

export default Branding
