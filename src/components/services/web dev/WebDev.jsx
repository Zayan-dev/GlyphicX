import React, { useEffect, useRef, useState } from 'react'
import "../web dev/webDev.css"
import img1 from "../../../assets/images/slider/web_1.png"
import img2 from "../../../assets/images/slider/web_2.jpg"

// import star from "../../../assets/images/Star.png"
const WebDev = () => {
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
        <div className='webdev'>
            <div className='gsapWebDevText text'>
                <h1 className='mainHeading'>Website Development</h1>
                <p className='para'>The landscape of web development has been rapidly changing, and developing custom-built websites that take full advantage of bleeding edge technology is one in which we continue to specialize.</p>
                <p className='para'>Your website is the modern storefront. We do not just build a beautiful website, but one which your consumers would engage in before making their purchasing decisions. Intuitive, easy to use and designed to be a lead capturing website are our top priorities.</p>

                {/* <div className='para list'>
                    <li><img src={star} alt="star" style={{ height: "25px" }} />Visual identity webdev design</li>
                    <li><img src={star} alt="star" style={{ height: "25px" }} /> Marketing & advertising webdev design</li>
                    <li><img src={star} alt="star" style={{ height: "25px" }} /> Publication webdev design</li>
                    <li><img src={star} alt="star" style={{ height: "25px" }} /> Packaging webdev design</li>
                    <li><img src={star} alt="star" style={{ height: "25px" }} /> Motion webdev design</li>
                    <li><img src={star} alt="star" style={{ height: "25px" }} /> Environmental webdev design</li>
                    <li><img src={star} alt="star" style={{ height: "25px" }} /> Art and illustration for webdev design</li>
                </div> */}
            </div>
            <div className="gsapWebDevSlider webdev-slider">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`webdev-slide ${index === currentIndex ? 'active' : ''}`}
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

export default WebDev
