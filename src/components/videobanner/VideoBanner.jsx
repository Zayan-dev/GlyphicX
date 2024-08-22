import React from 'react'
import "../videobanner/videoBanner.css"
import banner from "../../assets/videos/banner_video.mp4"
const VideoBanner = () => {
    return (
        <div className='video-banner'>
            <video className='hero-video'
                src={banner}
                muted
                autoPlay
                playsInline
                loop
            />
        </div>
    )
}

export default VideoBanner
