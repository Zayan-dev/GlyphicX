import React, { useState } from 'react';
import "../project/projects.css";
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import image from "../../../assets/images/working1.png";
import image1 from "../../../assets/images/Lambda Theta/2.jpg"
import image2 from "../../../assets/images/Lambda Theta/3.jpg"
import image3 from "../../../assets/images/Lambda Theta/4.jpg"
import video1 from "../../../assets/images/Lambda Theta/1.mp4"
import video2 from "../../../assets/images/Lambda Theta/6.mp4"
import video3 from "../../../assets/images/Lambda Theta/7.mp4"
import image4 from "../../../assets/images/Urge Fragrances/1.png"
import image5 from "../../../assets/images/Urge Fragrances/2.jpg"
import image6 from "../../../assets/images/Urge Fragrances/8.jpg"
import image7 from "../../../assets/images/Urge Fragrances/9.jpg"
import image8 from "../../../assets/images/Urge Fragrances/10.png"
import image9 from "../../../assets/images/Urge Fragrances/11.png"
import urgevid1 from "../../../assets/images/Urge Fragrances/3.mp4"
import urgevid2 from "../../../assets/images/Urge Fragrances/4.mp4"
import urgevid3 from "../../../assets/images/Urge Fragrances/5.mp4"
import urgevid4 from "../../../assets/images/Urge Fragrances/6.mp4"
import urgevid5 from "../../../assets/images/Urge Fragrances/7.mp4"

const Projects = () => {
    const [modalContent, setModalContent] = useState(null);

    const handleDisplay = (project) => {
        window.scrollTo(0, 0);
        setModalContent(project);
    };

    const handleClose = () => {
        setModalContent(null);
    };

    const projectContent = {
        project1: (
            <>
                <img src={image1} alt="project1" />
                <img src={image2} alt="project1" />
                <img src={image3} alt="project1" />
                <video muted autoPlay playsInline loop>
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video muted autoPlay playsInline loop>
                    <source src={video2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video muted autoPlay playsInline loop>
                    <source src={video3} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </>
        ),
        project2: (
            <>
                <img src={image4} alt="project2" />
                <img src={image5} alt="project2" />
                <img src={image6} alt="project2" />
                <img src={image7} alt="project2" />
                <img src={image8} alt="project2" />
                <img src={image9} alt="project2" />
                <video muted autoPlay playsInline loop>
                    <source src={urgevid1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video muted autoPlay playsInline loop>
                    <source src={urgevid2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video muted autoPlay playsInline loop>
                    <source src={urgevid3} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video muted autoPlay playsInline loop>
                    <source src={urgevid4} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video muted autoPlay playsInline loop>
                    <source src={urgevid5} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </>
        ),
        //  project3 or any other project content if needed
    };

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".simple",
                scroller: "body",
                start: "top 50%",
                end: "top 10%",
                scrub: 2,
                markers: false,
            }
        });
        tl.from(".project1 .left", {
            x: -300,
            opacity: 0,
            duration: 10,

        }, "anim1")
        tl.from(".project1 .right", {
            x: 300,
            opacity: 0,
            duration: 1,
        }, "anim1")
        tl.from(".project2 .left", {
            x: -300,
            opacity: 0,
            duration: 1,
        }, "anim2")
        tl.from(".project2 .right", {
            x: 300,
            opacity: 0,
            duration: 1,
        }, "anim2")
    })


    return (
        <div className={modalContent ? 'projects' : 'simple'}>
            <div className="project1">
                <div className="content left">
                    <h1 className='mainHeading' onClick={() => handleDisplay('project1')}>Lambda Theta</h1>
                    <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit harum eveniet fugit, cumque dignissimos illum quis vitae saepe excepturi at? Atque, impedit molestiae.</p>
                </div>
                <div className="image right">
                    <img onClick={() => handleDisplay('project1')} src={image3} alt="" />
                </div>
            </div>

            <div className="project2">
                <div className="content left">
                    <h1 className='mainHeading' onClick={() => handleDisplay('project2')}>urge Fragnances</h1>
                    <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit harum eveniet fugit, cumque dignissimos illum quis vitae saepe excepturi at? Atque, impedit molestiae.</p>
                </div>
                <div className="image right">
                    <img onClick={() => handleDisplay('project2')} src={image} alt="" />
                </div>
            </div>
            {/* project3 or any other project if needed */}

            {modalContent && (
                <div className="iframe-container">
                    <div className='project-iframe'>
                        {projectContent[modalContent]}
                    </div>
                    <button className="close-btn" onClick={handleClose}>
                        <i className="fa-solid fa-xmark fa-2xl"></i>
                    </button>
                </div>
            )}
        </div>
    );
}

export default Projects;
