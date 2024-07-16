import React from 'react'
import "../finalPro/finalproduct.css"
import { CustomButton3 } from '../../CustomButton'
const FinalProduct = () => {
    return (
        <div className='finalpro'>
            <div className='finalpro-text'>
                <p className="subHeading font-semibold">Craft</p>
                <h1 className='mainHeading'>From Idea to Final Product</h1>
                <p className='para'>Script development is a meticulous process that involves crafting and refining scripts</p>
                <p className='para'>Our team works closely with you to bring your vision to life. We understand the importance of storytelling and ensure that every script captures the essence of the brand</p>
                <p className='para'>Whether it's for a commercial, film, or video content, we are dedicated to delivering scripts that engage and captivate audiences.</p>
                <div className="buttons">
                    <CustomButton3 text="Learn More" />
                    <CustomButton3 text="Contact" />
                </div>
            </div>
            <div className="finalpro-pic">

            </div>
        </div>
    )
}

export default FinalProduct
