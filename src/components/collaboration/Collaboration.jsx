import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import '../collaboration/collaboration.css';
import video1 from "../../assets/videos/Logo_reveal.mp4";
import {CustomButton3} from '../CustomButton';

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
        <div className="coll-heading">
          <p className="subHeading font-bold">Innovative</p>
          <p className="mainHeading coll-head-text">
            Our Unique Approach to Client Collaboration
          </p>
          <p className="para coll-head-subtext">
            At GlyphicX, we believe in building strong relationships with our
            clients. Through open communication and a strategic approach, we
            work together to bring your vision to life.
          </p>
        </div>
        <div className="coll-outer-div">
          <div className="coll-inner-div">
            <div className="inner-1">
              <div className="discover">
                <i className="fa-solid fa-diamond fa-2xl"></i>
                <div className="discover-text">
                  <p className="subHeading font-bold text-2xl">Discover</p>
                  <p className="para text-base">
                    Understand Your Goals and Objectives
                  </p>
                </div>
              </div>
              <div className="discover">
                <i className="fa-solid fa-diamond fa-2xl"></i>
                <div className="discover-text">
                  <p className="subHeading font-bold text-2xl">Create</p>
                  <p className="para text-base">
                    Develop a Tailored Strategy for Success
                  </p>
                </div>
              </div>
            </div>
            <div ref={ref} className="inner-3">
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
            <div className="inner-2">
              <div className="discover">
                <i className="fa-solid fa-diamond fa-2xl"></i>
                <div className="discover-text">
                  <p className="subHeading font-bold text-2xl">Design</p>
                  <p className="para text-base">
                    Craft Engaging and Impactful Visuals
                  </p>
                </div>
              </div>
              <div className="discover">
                <i className="fa-solid fa-diamond fa-2xl"></i>
                <div className="discover-text">
                  <p className="subHeading font-bold text-2xl">Deliver</p>
                  <p className="para text-base">
                    Bring Your Vision to Life with Precision and Care
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="coll-btn">
            <CustomButton3 text="Learn More"/>
          </div>
        </div>
      </div>
    );
}

export default Collaboration;
