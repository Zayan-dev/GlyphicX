import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import img1 from "../../../assets/images/slider/interior design/1.jpg"
import img2 from "../../../assets/images/slider/interior design/2.jpg"
import img3 from "../../../assets/images/slider/interior design/3.jpg"
import img4 from "../../../assets/images/slider/interior design/4.jpg"
import img5 from "../../../assets/images/slider/interior design/5.jpg"
import img6 from "../../../assets/images/slider/interior design/6.jpg"
import "../InteriorDesign/Interiordesign.css"

const InteriorDesign = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const videoRef = useRef(null);
    const [sliderVisible, setSliderVisible] = useState(false);

    const { ref, inView } = useInView({
        threshold: 1.0, // adjust the threshold to your liking
    });

    useEffect(() => {
        if (inView) {
            setSliderVisible(true);
        }
    }, [inView]);

    const slides = [
        { type: 'image', src: img1 },
        { type: 'image', src: img2 },
        { type: 'image', src: img3 },
        { type: 'image', src: img4 },
        { type: 'image', src: img5 },
        { type: 'image', src: img6 },
        // { type: 'video', src: urge }
    ];

    useEffect(() => {
        if (sliderVisible) {
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
        }
    }, [sliderVisible, currentIndex, slides.length]);

    useEffect(() => {
        if (slides[currentIndex].type === 'video' && videoRef.current) {
            videoRef.current.play();
        }
    }, [currentIndex, slides]);
    return (
      <div className="interiordesign">
        <div className="gsapinteriordesignText text">
          <h1 className="mainHeading">3D Interior Design</h1>
          <p className="para">
            At GlyphicX, we empower interior designers, real estate developers,
            and marketers to showcase their projects with unparalleled clarity
            and impact. Our advanced 3D rendering services bring your design
            concepts to life, delivering photorealistic visuals that captivate
            and persuade.{" "}
          </p>
          <p className="para">
            Whether you're working on a cozy residential space or a sprawling
            commercial development, our state-of-the-art renderings provide a
            detailed, lifelike preview that goes far beyond traditional methods.
          </p>

          {/* <div className='para list'>
                    <li><img src={star} alt="star" style={{ height: "25px" }} />Visual identity interiordesign design</li>
                    <li><img src={star} alt="star" style={{ height: "25px" }} /> Marketing & advertising interiordesign design</li>
                    <li><img src={star} alt="star" style={{ height: "25px" }} /> Publication interiordesign design</li>
                    <li><img src={star} alt="star" style={{ height: "25px" }} /> Packaging interiordesign design</li>
                    <li><img src={star} alt="star" style={{ height: "25px" }} /> Motion interiordesign design</li>
                    <li><img src={star} alt="star" style={{ height: "25px" }} /> Environmental interiordesign design</li>
                    <li><img src={star} alt="star" style={{ height: "25px" }} /> Art and illustration for interiordesign design</li>
                </div> */}
        </div>
        <div
          ref={ref}
          className="gsapinteriordesignSlider interiordesign-slider"
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`interiordesign-slide ${
                index === currentIndex ? "active" : ""
              }`}
            >
              {slide.type === "image" ? (
                <img src={slide.src} alt={`slide-${index}`} />
              ) : (
                <video
                  ref={videoRef}
                  src={slide.src}
                  onEnded={() =>
                    setCurrentIndex(
                      (prevIndex) => (prevIndex + 1) % slides.length
                    )
                  }
                  muted
                />
              )}
            </div>
          ))}
        </div>
      </div>
    );
}

export default InteriorDesign
