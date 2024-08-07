import React, { useEffect, useRef, useState } from 'react'
import "../commercial/commercial.css"
import img1 from "/Portfolio/TVC PRODUCTION/TVC PRODUCTION edited-01.jpg"
import img2 from "/Portfolio/TVC PRODUCTION/TVC PRODUCTION edited-02.jpg"
// import urge from "../../../../src/assets/videos/Urge_Fragrances.mp4"
// import star from "../../../assets/images/Star.png"
const Commercial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const videoRef = useRef(null);
    const slides = [
        { type: 'image', src: img1 },
        { type: 'image', src: img2 },
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
        <div className='commercial'>
            <div className='text'>
                <h1 className='mainHeading'>Director’s Treatment</h1>
                <h2 className='subHeading my-3' style={{ fontSize: "20px" }}>Television Commercial</h2>
                <p className='para'>The ad highlights the universal application and strength of a UHU adhesive tube and was designed to leverage the hype around the release of House of the Dragon by nostalgia baiting a popular scene from Game of Thrones. </p>
                <p className='para'>This pitch documents is the first step in the pre-production and essential to outline the perspective, vision, and story ideas for the job and explain how the TV commercial will be brought to life</p>
            </div>
            <div className="commercial-slider">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`commercial-slide ${index === currentIndex ? 'active' : ''}`}
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

export default Commercial
