import React from 'react'
import "../testimonial/testimonial.css"
import avatarImg from "../../pics/ss.jpg"
const Testimonial = () => {
    return (
        <div className='testimonial'>
            <div className='test-text'>
                <p className='para'>GlyphicX has been a game-changer for our business. Their creative approach and attention to detail have helped us reach new heights.</p>
            </div>
            <div className="avatarr">
                <img src={avatarImg}></img>
                <div className="avatarr-content">
                    <p className='subHeading font-bold'>John Doe</p>
                    <p className='para'>CEO, ABC Company</p>
                </div>
                <div className="ruler"></div>
                <div className="logo">
                    <i className="fa-brands fa-webflow fa-2xl"></i>
                    <p className='font-bold'>Webflow</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
