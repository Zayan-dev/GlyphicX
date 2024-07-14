import React from 'react'
import "../finalPro/finalproduct.css"
import CustomButton, { CustomButton2 } from '../../CustomButton'
const FinalProduct = () => {
    return (
        <div className='finalpro'>
            <div className='finalpro-text'>
                <p className="font-semibold">Craft</p>
                <h1>From Idea to Final Product</h1>
                <p>Script development is a meticulous process that involves crafting and refining scripts</p>
                <p>Our team works closely with you to bring your vision to life. We understand the importance of storytelling and ensure that every script captures the essence of the brand</p>
                <p>Whether it's for a commercial, film, or video content, we are dedicated to delivering scripts that engage and captivate audiences.</p>

                {/* <div className='buttons'>
                    <button className='learn-more-btn'>Learn More</button>
                    <button >Contact us <i className="fa-solid fa-greater-than fa-sm" style={{ color: "#000000", marginLeft: "10px" }} /></button>
                </div> */}
                <div className="buttons">
                    <CustomButton2 text="Learn More" />
                    <CustomButton text="Contact" />
                </div>
            </div>
            <div className="finalpro-pic">

            </div>
        </div>
    )
}

export default FinalProduct
