import React from "react";
import ServiceCard from "../serviceCard/ServiceCard";
import "./ServiceIntro.css";
import dots from "../../../assets/images/Patterns/dots.png";
const ServiceIntro = () => {
  const cardData = [
    {
      image: "artboard1",
      heading: "BRANDING",
      text: "At GlyphicX, we understand the vital role that branding plays in the success of a business. From logo design to brand guidelines, we help you establish a strong and memorable brand presence.",
    },
    {
      image: "artboard2",
      heading: "3D VISUALIZATION",
      text: "Bring your creative vision to life. Get a clear, immersive representation of your final product, interior space, or design, enabling better understanding of scale, proportions, and design options.",
    },
    {
      image: "artboard3",
      heading: "3D ANIMATION",
      text: "Experience the power of animation. From initial concept to final frame, we handle every aspect of the animation process, delivering high impact videos that resonate with your audience",
    },
    {
      image: "artboard4",
      heading: "UI DESIGN",
      text: "Thoughtful design that is user focused. Let us help you launch or overhaul your product with the right design strategy & user requirements, allowing for a better user experience!",
    },
    {
      image: "graphic",
      heading: "GRAPHIC DESIGN",
      text: "We help you establish a strong and memorable brand presence. Whether you need a striking logo, captivating packaging, or an eye-catching illustration, our team of skilled designers is here to bring your vision to life. ",
    },
    {
      image: "webdev",
      heading: "WEB DEVELOPMENT",
      text: "The landscape of web development has been rapidly changing. Developing custom built websites that take full advantage of bleeding edge technology is one in which we continue to specialize. ",
    },
    {
      image: "stopmotion",
      heading: "STOP MOTION ANIMATION",
      text: "Add a touch of authenticity and charm to your brand with stop motion animation. Perfect for brands seeking a unique, handcrafted feel, stop motion allows for creative storytelling and a memorable experience",
    },
    {
      image: "dvc",
      heading: "DIGITAL VIDEO COMMERCIAL",
      text: "Your brand has a story to tell, and we’re here to help you tell it. By partnering with you, we listen to your vision, create a strategic plan, and deliver video content that not only meets your goals but exceeds your expectations.",
    },
  ];
  return (
    <div className="service-intro-container overflow-hidden">
      <div>
        <img
          height="10%"
          width="10%"
          src="/services/arrowDots.png"
          alt="Arrow with dots"
          className="dot-arrow-image intro-side-images"
        />
      </div>
      <div >
        <img
          height="10%"
          width="10%"
          src={dots}
          alt="Dots"
          className="dot-image intro-side-images"
        />
      </div>
      <div >
        <img
          height="30%"
          width="30%"
          src="/services/dotCircle-image.png"
          alt="Dots"
          className="dot-circle-image intro-side-images"
          
        />
      </div>

      <div className="service-intro">
        {cardData.map((d, index) => (
          <ServiceCard
            key={index}
            image={d.image}
            heading={d.heading}
            text={d.text}
          />
        ))}
      </div>
      <div className="service-intro-image">
        <img src="/services/services-mobile.png" className="service-image" />
      </div>
    </div>
  );
};

export default ServiceIntro;
