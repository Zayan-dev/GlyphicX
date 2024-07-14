import React from 'react'
import "../team/team.css"
import image from "../../pics/ss.jpg"
import { CustomButton3 } from '../CustomButton'
const Team = () => {
    const teamMembers = [{
        name: "Abrar Ali",
        designation: "Lead Designer"
    }, {
        name: "Syed Obaid ur Rahman",
        designation: "Managing Director"
    }]

    return (
      <div className="team">
        <div className="team-head">
          <p className="subHeading font-bold">Creative</p>
          <p className="mainHeading team-head-text">Meet Our Team</p>
          <p className="para">
            Get to know the talented individuals behind GlyphicX.
          </p>
        </div>
        <div className="team-content-div">
          <div className="team-avatar-div">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-avatar">
                <img src={image} />
                <div className="team-avatar-content">
                  <p className="subHeading font-bold">{member.name}</p>
                  <p className="para">{member.designation}</p>
                </div>
                <div className="social-media">
                  <i className="fa-brands fa-linkedin fa-xl"></i>
                  <i className="fa-brands fa-dribbble fa-xl"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hiring-div">
          <div className="hiring-text">
            <p className="hire">We’re hiring!</p>
            <p>Discover exciting career and freelance opportunities</p>
          </div>
          <div className='apply-btn'>
            <CustomButton3 text="Apply" />
          </div>
        </div>
      </div>
    );
}

export default Team
