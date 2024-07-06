import React from 'react'
import "../team/team.css"
import image from "../../pics/ss.jpg"
const Team = () => {
    return (
        <div className='team'>
            <div className="team-head">
                <p className='font-bold'>Creative</p>
                <p className='team-head-text'>Meet Our Team</p>
                <p>Get to know the talented individuals behind GlyphicX.</p>
            </div>
            <div className="team-content-div">
                <div className="team-avatar-div">
                    <div className="team-avatar">
                        <img src={image} />
                        <div className="team-avatar-content">
                            <p className='font-bold'>Abrar Ali</p>
                            <p>Lead Designer</p>
                        </div>
                        <div className="social-media">
                            <i class="fa-brands fa-linkedin fa-xl"></i>
                            <i class="fa-brands fa-dribbble fa-xl"></i>
                        </div>
                    </div>
                    <div className="team-avatar">
                        <img src={image} />
                        <div className="team-avatar-content">
                            <p className='font-bold'>Syed Obaid ur Rahman</p>
                            <p>Managing Director</p>
                        </div>
                        <div className="social-media">
                            <i class="fa-brands fa-linkedin fa-xl"></i>
                            <i class="fa-brands fa-dribbble fa-xl"></i>
                        </div>
                    </div>
                  
                </div>
            </div>
            <div className="hiring-div">
                <div className="hiring-text">
                    <p className='hire'>We’re hiring!</p>
                    <p>Discover exciting career and freelance opportunities</p>
                </div>
                <button>Apply</button>
            </div>
        </div>
    )
}

export default Team
