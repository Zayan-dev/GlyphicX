import React, { useState } from 'react';
import "../project/projects.css";
import image from "../../../assets/images/working1.png";


const Projects = () => {
    const [display, setDisplay] = useState("hidden");

    const handleDisplay = () => {
        window.scrollTo(0, 0)
        setDisplay(display === "hidden" ? "block" : "hidden");
    };

    const handleClose = () => {
        setDisplay("hidden");
    };

    return (
        <div className={display === "hidden" ? 'simple' : 'projects'}>
            <div className="project1">
                <div className="content">
                    <h1 className='mainHeading'>Project 1</h1>
                    <p className='para'>description</p>
                    {display === "block" && (
                        <div className="iframe-container">
                            <iframe scrolling='yes' className="project-iframe" src="https://eaxee.vercel.app/" title="Project"></iframe>
                            <button className="close-btn" onClick={handleClose}><i className="fa-solid fa-xmark fa-2xl"></i></button>
                        </div>
                    )}
                </div>
                <div className="image">
                    <img onClick={handleDisplay} src={image} alt="" />
                </div>
            </div>

            <div className="project2">
                <div className="content">
                    <h1 className='mainHeading'>Project 2</h1>
                    <p className='para'>description</p>
                    {display === "block" && (
                        <div className="iframe-container">
                            <iframe scrolling='yes' className="project-iframe" src="https://eaxee.vercel.app/" title="Project"></iframe>
                            <button className="close-btn" onClick={handleClose}><i className="fa-solid fa-xmark fa-2xl"></i></button>
                        </div>
                    )}
                </div>
                <div className="image">
                    <img onClick={handleDisplay} src={image} alt="" />
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

export default Projects;
