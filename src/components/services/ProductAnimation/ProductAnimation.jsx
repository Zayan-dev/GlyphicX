import React, { useEffect, useRef, useState } from 'react'
import "../ProductAnimation/productAnimation.css"
// import img1 from "/Portfolio/Shoe Animation/1.jpg"
// import img2 from "/Portfolio/Shoe Animation/2.jpg"
// import img3 from "/Portfolio/Shoe Animation/3.jpg"
import shoeAnimation from "../../../../public/Portfolio/Shoe Animation/Animation.mp4"
import star from "../../../assets/images/Star.png"
import { useLocation } from 'react-router-dom'
const ProductAnimation = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const proAnimRef = useRef(null);
    const videoRef = useRef(null);
    const { hash } = useLocation();
    useEffect(() => {
  
      if (hash === "#proAnim" && proAnimRef.current) {
        proAnimRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, [hash]);
    const slides = [
        // { type: 'image', src: img1 },
        // { type: 'image', src: img2 },
        // { type: 'image', src: img3 },
        { type: 'video', src: shoeAnimation }
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
        <div ref={proAnimRef} id='proAnim' className='proAnimation'>
     
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
                                loop
                            />
                        )}
                    </div>
                ))}
            </div>
            <div className='gsapProAnimText text'>
                <h1 className='mainHeading'>Product Animation</h1>
                <p className='para'>In today's fiercely competitive B2C market, standing out is crucial. Experience the power of animation to elevate your brand, increase engagement, and outshine the competition.</p>
                <p>From initial concept to final frame, we handle every aspect of the animation process, delivering high-impact videos that resonate with your target audience.</p>

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
        </div>
    )
}

export default ProductAnimation
