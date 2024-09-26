import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import '../collaboration/collaboration.css';
import video1 from "../../assets/videos/Logo_reveal.mp4";
import { CustomButton3 } from '../CustomButton';
import star from "../../../src/assets/images/Star peanut.png"

const Collaboration = () => {
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
    <div className="collaboration">
      <div id='gsapCollaborationHeading' className="coll-heading">
        <p className="subHeading font-bold" style={{ display: "none" }}>Innovative</p>
        <p className="mainHeading coll-head-text">
          our unique APProach to Client Collaboration
        </p>
        <p className="para coll-head-subtext">
          At GlyphicX, we believe in building strong relationships with our
          clients. Through open communication and a strategic approach, we
          work together to bring your vision to life.
        </p>
      </div>
      <div className="coll-outer-div">
        <div className="coll-inner-div">
          <div id='gsapInner1' className="inner-1">
            <div className="discover">
              {/* <img src={star} alt="star" style={{ height: "50px" }}/> */}
              <div className="discover-text">
                <div className='flex gap-2'>
                  <img src={star} alt="star" style={{ height: "30px" }} />
                  <p className="subHeading font-bold text-2xl">Discover</p>
                </div>
                <p className="para text-base">
                  Understand Your Goals and Objectives
                </p>
              </div>
            </div>
            <div className="discover">
              {/* <img src={star} alt="star" style={{ height: "50px" }} /> */}
              <div className="discover-text">
                <div className='flex gap-2'>
                  <img src={star} alt="star" style={{ height: "30px" }} />
                  <p className="subHeading font-bold text-2xl">Create</p>
                </div>
                <p className="para text-base">
                  Develop a Tailored Strategy for Success
                </p>
              </div>
            </div>
          </div>
          <div id='gsapInner3' ref={ref} className="inner-3">
            <video
              ref={videoRef}
              src={video1}
              alt="video"
              loop
              muted
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div id='gsapInner2' className="inner-2">
            <div className="discover">
              {/* <img src={star} alt="star" style={{ height: "50px" }} /> */}
              <div className="discover-text">
                <div className='flex gap-2'>
                  <img src={star} alt="star" style={{ height: "30px" }} />
                  <p className="subHeading font-bold text-2xl">Design</p>
                </div>
                <p className="para text-base">
                  Craft Engaging and Impactful Visuals
                </p>
              </div>
            </div>
            <div className="discover">
              {/* <img src={star} alt="star" style={{ height: "50px" }} /> */}
              <div className="discover-text">
                <div className='flex gap-2'>
                  <img src={star} alt="star" style={{ height: "30px" }} />
                  <p className="subHeading font-bold text-2xl">Deliver</p>
                </div>
                <p className="para text-base">
                  Bring Your Vision to Life with Precision and Care
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="coll-btn">
            <CustomButton3 text="Learn More"/>
          </div> */}
      </div>
    </div>
  );
}

export default Collaboration;
