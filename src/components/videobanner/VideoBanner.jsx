import React, { useState, useRef } from "react";
import "../videobanner/videoBanner.css";
import banner from "../../assets/videos/banner_video.mp4";

const VideoBanner = () => {
  return (
    <div className="video-banner">
      <video
        className="hero-video"
        src={banner}
        muted // Initially muted for autoplay
        autoPlay
        playsInline
        loop
        controls
      />
    </div>
  );
};

export default VideoBanner;

