import React, { useEffect, useRef, useState } from 'react'
import "../user interface/userInterface.css"
import img1 from "../../../assets/images/figmass.png"
import img2 from "../../../assets/images/figma_2_ss.png"
// import star from "../../../assets/images/Star.png"
const UserInterface = () => {
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
        <div className='userinterface'>
         
        
            <div className='gsapUiText text'>
                <h1 className='mainHeading'>uI Design</h1>
                <p className='para'>Elevate your product above expectations through our expertise in modern design and our commitment to the art of UI/UX
                </p>
                <p className='para'>Let us help you launch or overhaul your product with the right design strategy & user requirements, allowing for a better user experience!</p>
            </div>
            <div className="gsapUiSlider userinterface-slider">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`userinterface-slide ${index === currentIndex ? 'active' : ''}`}
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

export default UserInterface
