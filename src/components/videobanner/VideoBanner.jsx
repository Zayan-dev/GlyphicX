import React from 'react'
import "../videobanner/videoBanner.css"
import banner from "../../assets/videos/banner_video.mp4"
const VideoBanner = () => {
    return (
        <div className='video-banner'>
            <video
                src={banner}
                muted
                autoPlay
                playsInline
            />
        </div>
    )
}

export default VideoBanner
