import React, { useState, useRef } from "react";
import "../videobanner/videoBanner.css";
import banner from "../../assets/videos/banner_video.mp4";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

const VideoBanner = () => {
  const [isMuted, setIsMuted] = useState(true); // Track mute state
  const videoRef = useRef(null);

  // Toggle mute/unmute and update icon
  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted); // Toggle mute state
    }
  };

  return (
    <div className="video-banner">
      <video
        className="hero-video"
        ref={videoRef}
        src={banner}
        muted // Initially muted for autoplay
        autoPlay
        playsInline
        loop
      />
      {/* Mute/Unmute Icon */}
      <button onClick={handleMuteToggle} className="sound-icon-btn">
        {isMuted ? <HiSpeakerXMark size={24} /> : <HiSpeakerWave size={24} />}
      </button>
    </div>
  );
};

export default VideoBanner;

