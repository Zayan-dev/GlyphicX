import React, { useState, useEffect } from 'react';
import "../testimonial/testimonial.css";
import avatarImg1 from "../../assets/images/slider/Logos/Green.png";
import avatarImg2 from "../../assets/images/slider/Logos/Lambda-Theta-01.png";
import avatarImg3 from "../../assets/images/slider/Logos/Urge-01.png";
import filledStar from '../../assets/images/slider/Logos/Star fill.png';  // Filled star image
import outlineStar from '../../assets/images/slider/Logos/Star outline.png';  // Outline star image

const testimonials = [
    {
        text: "They were creative and ultimately exceeded our expectations.",
        img: avatarImg1,
    },
    {
        text: "We are working on more projects with them. They're an excellent team.",
        img: avatarImg2,
    },
    {
        text: "They made sure we were happy with the work, and they were always available to answer any questions or concerns we had.",
        img: avatarImg3,
    }
];

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically slide after 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 3000); // 3 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const { text, img } = testimonials[currentIndex];

    return (
        <div className='testimonial-slider'>
            {/* <button className="prev" onClick={prevSlide}>‹</button> */}
            <div className='testimonial'>
                <div className='test-text'>
                    <p className='para'>{text}</p>
                </div>
                <div className="avatarr">
                    <img src={img} alt="avatar" />
                </div>
            </div>
            {/* Star Indicator */}
            <div className="stars">
                {testimonials.map((_, index) => (
                    <img 
                        key={index} 
                        src={index === currentIndex ? filledStar : outlineStar} 
                        alt={index === currentIndex ? "filled star" : "outline star"} 
                        className="star-icon"
                    />
                ))}
            </div>
            {/* <button className="next" onClick={nextSlide}>›</button> */}
        </div>
    );
}

export default Testimonial;
