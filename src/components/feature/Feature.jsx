import React, { useEffect, useRef} from 'react'
import '../feature/feature.css'
import { useInView } from "react-intersection-observer";
import animatedvideo from "../../assets/videos/Unlock the Power of Storytelling.mp4";
// import ImageSequenceScroll from '../imagesequence/ImageSequenceScroll'

// TODOS
// adding a scroll Animation
const Feature = () => {

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (inView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [inView]);

  return (
    <div className="feature">
      <div className="feature-img">
        {/* <ImageSequenceScroll></ImageSequenceScroll> */}
        <div ref={ref}>
          <video ref={videoRef} src={animatedvideo} alt="video" muted playsInline>
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="feature-text">
        <p className="mainHeading bold-text">
          Unlock the Power of Storytelling
        </p>
        <p className="para">
          At GlyphicX, we believe in the transformative power of storytelling.
          Our strategic approach, combined with captivating visual language,
          helps our clients create meaningful connections with their audience.
        </p>
        <div className="feature-inner-div">
          <div>
            <h5 className="subHeading font-bold">Engage</h5>
            <p className="para">
              Capture your audience's attention with compelling narratives and
              stunning visuals.
            </p>
          </div>
          <div>
            <h5 className="subHeading font-bold">Differentiate</h5>
            <p className="para">
              Stand out from the competition by telling your unique brand story.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature
