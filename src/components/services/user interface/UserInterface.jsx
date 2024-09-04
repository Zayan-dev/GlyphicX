import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import "../user interface/userInterface.css"
import img1 from "../../../assets/images/figmass.png"
import img2 from "../../../assets/images/figma_2_ss.png"
import { useLocation } from 'react-router-dom'
// import star from "../../../assets/images/Star.png"

const UserInterface = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);
  const uiRef = useRef(null);
  const { hash } = useLocation();
  const [sliderVisible, setSliderVisible] = useState(false);

  useEffect(() => {
    if (hash === "#uiDesign" && uiRef.current) {
      uiRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

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
    <div ref={uiRef} id="uiDesign" className='userinterface'>
      
      <div className='gsapUiText text'>
        <h1 className='mainHeading'>uI Design</h1>
        <p className='para'>Elevate your product above expectations through our expertise in modern design and our commitment to the art of UI/UX</p>
        <p className='para'>Let us help you launch or overhaul your product with the right design strategy & user requirements, allowing for a better user experience!</p>
      </div>
      <div ref={ref} className="gsapUiSlider userinterface-slider">
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
  );
};

export default UserInterface;