import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "../visualization/visualization.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import star from "../../../assets/images/Star.png";
import image1 from "../../../assets/images/slider/3d_1.jpg";
import image2 from "../../../assets/images/slider/3d_2.jpg";
import image3 from "../../../assets/images/slider/3d_3.jpg";

const Visualization = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        { type: 'image', src: image1 },
        { type: 'image', src: image2 },
        { type: 'image', src: image3 } 
    ];
    const transitionTimes = [2, 2, 3];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
      <div className="visualization">
        <div className="gsapVisSlider vis-pic">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`vis-slide ${index === currentIndex ? "active" : ""}`}
              style={{
                transition: `opacity ${
                  transitionTimes[index]
                }s ease-in-out`,
              }}
            >
              <img src={slide.src} alt={`slide-${index}`} />
            </div>
          ))}
        </div>
        <div className="gsapVisText vis-text">
          <h1 className="mainHeading">3D visualization</h1>
          <p className="para">
            Confidently make informed decisions and bring your creative vision
            to life with our 3D visualization services.{" "}
          </p>
          <p className="para">
            Get a clear, immersive representation of your final product, space,
            or design, enabling better understanding of scale, proportions, and
            design options
          </p>

          <div className="para vis-list">
            <li>
              <img
                src={star}
                alt="star"
                style={{ height: "25px", mixBlendMode: "difference" }}
              />{" "}
              Clear Representation
            </li>
            <li>
              <img
                src={star}
                alt="star"
                style={{ height: "25px", mixBlendMode: "difference" }}
              />{" "}
              Collaborative Design
            </li>
            <li>
              <img
                src={star}
                alt="star"
                style={{ height: "25px", mixBlendMode: "difference" }}
              />{" "}
              Competitive Advantage
            </li>
          </div>
        </div>
      </div>
    );
};

export default Visualization;
