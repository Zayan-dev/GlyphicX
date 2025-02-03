import React from "react";
import "./Visualisation.css";
import { CustomButton4, CustomButton5 } from "../../../CustomButton";

const Visualisation = () => {
  return (
    <div className="visualisation">
      <h1 className="text-lg font-bold text-peanut">3D Services</h1>

      <div className="product-container">
        <div className="left-column">
          <h3 className="service-title">Product Visualization</h3>
          <p>
            Clear, detailed renderings of your products to emphasize their
            design, features, and usability. Ideal for marketing materials.
          </p>
        </div>
        <div className="right-column">
          <img
            src="/services/3D-detail/product1.png"
            alt="Product Visualization"
            className="product-media"
          />
        </div>
      </div>

      <div className="product-container">
        <div className="right-column">
          <iframe
            src="https://www.youtube.com/embed/6nd3_BvBJzs?si=pVbZU9lkzowQRJ_m&amp;controls=0"
            title="3D Animation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="product-media"
          ></iframe>
        </div>
        <div className="left-column">
          <h3 className="service-title">3D Animation</h3>
          <p>
            Show the story behind your products. Our goal is to turn your ideas
            into eye-catching visuals that your audience will love.
          </p>
          <CustomButton5 text="Explore more videos" onClick="https://www.youtube.com/@Glyphic-X"/>
        </div>
      </div>

      <div className="product-container">
        <div className="left-column">
          <h3 className="service-title">Interior Rendering</h3>
          <p>
            3D renders of interior spaces, highlighting accurate layouts to help
            you envision the final design.
          </p>
        </div>
        <div className="right-column">
          <img
            src="/services/3D-detail/product2.png"
            alt="Interior Rendering"
            className="product-media"
          />
        </div>
      </div>
    </div>
  );
};

export default Visualisation;
