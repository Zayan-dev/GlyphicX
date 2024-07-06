import React from 'react'
import '../collaboration/collaboration.css'
// Todos
// Signup button in mob mode
// Pic and boxes arrangement 
const Collaboration = () => {
    return (
        <div className='collaboration'>
            <div className='coll-heading'>
                <p className='font-bold'>Innovative</p>
                <p className='coll-head-text'>Our Unique Approach to Client Collaboration</p>
                <p className='coll-head-subtext'>At GlyphicX, we believe in building strong relationships with our clients. Through open communication and a strategic approach, we work together to bring your vision to life.</p>
            </div>
            <div className="coll-outer-div">

                <div className="coll-inner-div">
                    <div className='inner-1'>
                        <div className='discover'>
                            {/* Icon */}
                            <i class="fa-brands fa-discourse fa-2xl"></i>
                            <div className='discover-text'>
                                <p className='font-bold text-2xl'>Discover</p>
                                <p className='text-base'>Understand Your Goals and Objectives</p>
                            </div>
                        </div>
                        <div className='discover'>
                            {/* Icon */}
                            <i class="fa-solid fa-plus fa-2xl"></i>
                            <div className='discover-text'>
                                <p className='font-bold text-2xl'>Create</p>
                                <p className='text-base'>Develop a Tailored Strategy for Success</p>
                            </div>
                        </div>

                    </div>
                    <div className='inner-3'>

                    </div>
                    <div className='inner-2'>
                        <div className='discover'>
                            {/* Icon */}
                            <i class="fa-solid fa-cubes fa-2xl"></i>
                            <div className='discover-text'>
                                <p className='font-bold text-2xl'>Design</p>
                                <p className='text-base'>Craft Engaging and Impactful Visuals</p>
                            </div>
                        </div>
                        <div className='discover'>
                            {/* Icon */}
                            <i class="fa-solid fa-cloud fa-2xl"></i>
                            <div className='discover-text'>
                                <p className='font-bold text-2xl'>Deliver</p>
                                <p className='text-base'>Bring Your Vision to Life with Precision and Care</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='buttons'><button className='coll-btn'>Learn More</button></div>
            </div>
        </div>
    )
}

export default Collaboration
