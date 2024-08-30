import React, { useEffect, useRef, useState } from 'react'
import "../TVC/tvc.css"
import img1 from "../../../assets/images/slider/TVC/1.jpg"
import img2 from "../../../assets/images/slider/TVC/2.jpg"
import img3 from "../../../assets/images/slider/TVC/3.jpg"
import img4 from "../../../assets/images/slider/TVC/4.jpg"
import img5 from "../../../assets/images/slider/TVC/5.jpg"
import img6 from "../../../assets/images/slider/TVC/6.jpg"
import tvcAnimation from "../../../assets/images/slider/TVC/0.mp4"
import star from "../../../assets/images/Star.png"
import { useLocation } from 'react-router-dom'
const TVC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const tvcRef = useRef(null);
    const videoRef = useRef(null);
    const { hash } = useLocation();
    useEffect(() => {
  
      if (hash === "#Tvc" && tvcRef.current) {
        tvcRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, [hash]);

    const slides = [
        { type: 'video', src: tvcAnimation },
        { type: 'image', src: img1 },
        { type: 'image', src: img2 },
        { type: 'image', src: img3 },
        { type: 'image', src: img4 },
        { type: 'image', src: img5 },
        { type: 'image', src: img6 },
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
        <div ref={tvcRef} id='Tvc' className='Tvc'>
     
            <div className="gsapTvcSlider Tvc-slider">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`Tvc-slide ${index === currentIndex ? 'active' : ''}`}
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
            <div className='gsapTvcText text'>
                <h1 className='mainHeading'>Television Commercial</h1>
                <p className='para'>In today's fiercely competitive B2C market, standing out is crucial. Experience the power of animation to elevate your brand, increase engagement, and outshine the competition.</p>
                <p>From initial concept to final frame, we handle every aspect of the animation process, delivering high-impact videos that resonate with your target audience.</p>

                {/* <div className='para list'>
                    <li><img src={star} alt="star" style={{ height: "25px" }} />Visual identity Tvc design</li>
                    <li><img src={star} alt="star" style={{ height: "25px" }} /> Marketing & advertising Tvc design</li>
                    <li><img src={star} alt="star" style={{ height: "25px" }} /> Publication Tvc design</li>
                    <li><img src={star} alt="star" style={{ height: "25px" }} /> Packaging Tvc design</li>
                    <li><img src={star} alt="star" style={{ height: "25px" }} /> Motion Tvc design</li>
                    <li><img src={star} alt="star" style={{ height: "25px" }} /> Environmental Tvc design</li>
                    <li><img src={star} alt="star" style={{ height: "25px" }} /> Art and illustration for Tvc design</li>
                </div> */}
            </div>
        </div>
    )
}

export default TVC
