import React from 'react'
import "../project/projects.css"
import image from "../../../assets/images/working1.png"

const Projects = () => {
    return (
        <div className='projects'>

            <div className="project1">
                <div className="content">
                    <h1 className='mainHeading'>Project 1</h1>
                    <p className='para'>description</p>
                </div>
                <div className="image">
                    <img src={image} alt="" />
                </div>
            </div>

            <div className="project2">
                <div className="content">
                    <h1 className='mainHeading'>Project 2</h1>
                    <p className='para'>description</p>
                </div>
                <div className="image">
                    <img src={image} alt="" />
                </div>
            </div>

            <div className="project3">
                <div className="content">
                    <h1 className='mainHeading'>Project 3</h1>
                    <p className='para'>description</p>
                </div>
                <div className="image">
                    <img src={image} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Projects
