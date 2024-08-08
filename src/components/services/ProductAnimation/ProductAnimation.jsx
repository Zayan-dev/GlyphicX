import React, { useEffect, useRef, useState } from 'react'
import "../ProductAnimation/productAnimation.css"
import img1 from "/Portfolio/Shoe Animation/1.jpg"
import img2 from "/Portfolio/Shoe Animation/2.jpg"
import img3 from "/Portfolio/Shoe Animation/3.jpg"
// import urge from "../../../../src/assets/videos/Urge_Fragrances.mp4"
import star from "../../../assets/images/Star.png"
const ProductAnimation = () => {
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
        <div className='proAnimation'>
            <div className='gsapProAnimText text'>
                <h1 className='mainHeading'>Product Animation</h1>
                <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit harum eveniet fugit, cumque dignissimos illum quis vitae saepe excepturi at? Atque, impedit molestiae.</p>

                {/* <div className='para list'>
                    <li><img src={star} alt="star" style={{ height: "25px" }} />Visual identity proAnimation design</li>
                    <li><img src={star} alt="star" style={{ height: "25px" }} /> Marketing & advertising proAnimation design</li>
                    <li><img src={star} alt="star" style={{ height: "25px" }} /> Publication proAnimation design</li>
                    <li><img src={star} alt="star" style={{ height: "25px" }} /> Packaging proAnimation design</li>
                    <li><img src={star} alt="star" style={{ height: "25px" }} /> Motion proAnimation design</li>
                    <li><img src={star} alt="star" style={{ height: "25px" }} /> Environmental proAnimation design</li>
                    <li><img src={star} alt="star" style={{ height: "25px" }} /> Art and illustration for proAnimation design</li>
                </div> */}
            </div>
            <div className="gsapProAnimSlider proAnimation-slider">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`proAnimation-slide ${index === currentIndex ? 'active' : ''}`}
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

export default ProductAnimation
