import React, { useEffect, useState } from 'react';
import "../project/projects.css";
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { CustomButton2, CustomButton3 } from '../../CustomButton';
const Projects = () => {

    const Eaxee = {
        image1: "/Portfolio/EAXEE/Brand Guideline/EAXEE-01.jpg",
        image2: "/Portfolio/EAXEE/Brand Guideline/EAXEE-10.jpg",
        image3: "/Portfolio/EAXEE/Brand Guideline/EAXEE-11.jpg",
        image4: "/Portfolio/EAXEE/Brand Guideline/EAXEE-12.jpg",
        image5: "/Portfolio/EAXEE/Brand Guideline/EAXEE-13.jpg",
        image6: "/Portfolio/EAXEE/Brand Guideline/EAXEE-14.jpg",
        image7: "/Portfolio/EAXEE/Brand Guideline/EAXEE-15.jpg",
        image8: "/Portfolio/EAXEE/Brand Guideline/EAXEE-16.jpg",
        image9: "/Portfolio/EAXEE/Brand Guideline/EAXEE-17.jpg",
        image10: "/Portfolio/EAXEE/Brand Guideline/EAXEE-18.jpg",
        image11: "/Portfolio/EAXEE/Brand Guideline/EAXEE-19.jpg",
        image12: "/Portfolio/EAXEE/Brand Guideline/EAXEE-20.jpg",
        image13: "/Portfolio/EAXEE/Brand Guideline/EAXEE-21.jpg",
        image14: "/Portfolio/EAXEE/Brand Guideline/EAXEE-22.jpg",
        image15: "/Portfolio/EAXEE/Brand Guideline/EAXEE-23.jpg",
        image16: "/Portfolio/EAXEE/Brand Guideline/EAXEE-24.jpg",
        image17: "/Portfolio/EAXEE/Brand Guideline/EAXEE-25.jpg",
        image18: "/Portfolio/EAXEE/Brand Guideline/EAXEE-26.jpg",
        image19: "/Portfolio/EAXEE/Brand Guideline/EAXEE-27.jpg",
        image20: "/Portfolio/EAXEE/Brand Guideline/EAXEE-28.jpg",
        image21: "/Portfolio/EAXEE/Brand Guideline/EAXEE-29.jpg",
        image22: "/Portfolio/EAXEE/Brand Guideline/EAXEE-30.jpg"
    };

    const GlyphicX = {
        image1: "/Portfolio/GlyphicX/Glyphicx Profile 24-06-2024-01.jpg",
        image5: "/Portfolio/GlyphicX/Glyphicx Profile 24-06-2024-05.jpg",
        image6: "/Portfolio/GlyphicX/Glyphicx Profile 24-06-2024-06.jpg",
        image7: "/Portfolio/GlyphicX/Glyphicx Profile 24-06-2024-07.jpg",
        image8: "/Portfolio/GlyphicX/Glyphicx Profile 24-06-2024-08.jpg",
        image9: "/Portfolio/GlyphicX/Glyphicx Profile 24-06-2024-09.jpg",
        image10: "/Portfolio/GlyphicX/Glyphicx Profile 24-06-2024-10.jpg",
        image11: "/Portfolio/GlyphicX/Glyphicx Profile 24-06-2024-11.jpg",
        image12: "/Portfolio/GlyphicX/Glyphicx Profile 24-06-2024-12.jpg",
        image13: "/Portfolio/GlyphicX/Glyphicx Profile 24-06-2024-13.jpg",
        image14: "/Portfolio/GlyphicX/Glyphicx Profile 24-06-2024-14.jpg",
        image15: "/Portfolio/GlyphicX/Glyphicx Profile 24-06-2024-15.jpg",
        image16: "/Portfolio/GlyphicX/Glyphicx Profile 24-06-2024-16.jpg",
        image17: "/Portfolio/GlyphicX/Glyphicx Profile 24-06-2024-17.jpg",
        image18: "/Portfolio/GlyphicX/Glyphicx Profile 24-06-2024-18.jpg",
        image19: "/Portfolio/GlyphicX/Glyphicx Profile 24-06-2024-19.jpg",
        image20: "/Portfolio/GlyphicX/Glyphicx Profile 24-06-2024-20.jpg",
        image21: "/Portfolio/GlyphicX/Glyphicx Profile 24-06-2024-21.jpg",
        image22: "/Portfolio/GlyphicX/Glyphicx Profile 24-06-2024-22.jpg",
        image23: "/Portfolio/GlyphicX/Glyphicx Profile 24-06-2024-23.jpg",
        image24: "/Portfolio/GlyphicX/Glyphicx Profile 24-06-2024-24.jpg",
        image25: "/Portfolio/GlyphicX/Glyphicx Profile 24-06-2024-25.jpg",
        image26: "/Portfolio/GlyphicX/Glyphicx Profile 24-06-2024-26.jpg",
        image27: "/Portfolio/GlyphicX/Glyphicx Profile 24-06-2024-27.jpg",
        image28: "/Portfolio/GlyphicX/Glyphicx Profile 24-06-2024-28.jpg",
        image29: "/Portfolio/GlyphicX/Glyphicx Profile 24-06-2024-29.jpg",
        image30: "/Portfolio/GlyphicX/Glyphicx Profile 24-06-2024-30.jpg",
        image31: "/Portfolio/GlyphicX/Glyphicx Profile 24-06-2024-31.jpg",
        image32: "/Portfolio/GlyphicX/Glyphicx Profile 24-06-2024-32.jpg",
        image33: "/Portfolio/GlyphicX/Glyphicx Profile 24-06-2024-33.jpg"
    };

    const LambdaTheta = {
        image1: "/Portfolio/Lambda Theta/2.jpg",
        image2: "/Portfolio/Lambda Theta/3.jpg",
        image3: "/Portfolio/Lambda Theta/4.jpg",
        video1: "/Portfolio/Lambda Theta/1.mp4",
        video2: "/Portfolio/Lambda Theta/5.m4v",
    }

    const VideoProduction = {
        image1: "/Portfolio/TVC PRODUCTION/TVC PRODUCTION edited-01.jpg",
        image2: "/Portfolio/TVC PRODUCTION/TVC PRODUCTION edited-02.jpg",
        image3: "/Portfolio/TVC PRODUCTION/TVC PRODUCTION edited-03.jpg",
        image4: "/Portfolio/TVC PRODUCTION/TVC PRODUCTION edited-04.jpg",
        image5: "/Portfolio/TVC PRODUCTION/TVC PRODUCTION edited-05.jpg",
        image6: "/Portfolio/TVC PRODUCTION/TVC PRODUCTION edited-06.jpg",
        image7: "/Portfolio/TVC PRODUCTION/TVC PRODUCTION edited-07.jpg",
        image8: "/Portfolio/TVC PRODUCTION/TVC PRODUCTION edited-08.jpg",
        image9: "/Portfolio/TVC PRODUCTION/TVC PRODUCTION edited-09.jpg",
        image10: "/Portfolio/TVC PRODUCTION/TVC PRODUCTION edited-10.jpg",
        image11: "/Portfolio/TVC PRODUCTION/TVC PRODUCTION edited-11.jpg",
        image12: "/Portfolio/TVC PRODUCTION/TVC PRODUCTION edited-12.jpg",
        image13: "/Portfolio/TVC PRODUCTION/TVC PRODUCTION edited-13.jpg",
        image14: "/Portfolio/TVC PRODUCTION/TVC PRODUCTION edited-14.jpg",
        image15: "/Portfolio/TVC PRODUCTION/TVC PRODUCTION edited-15.jpg",
    }

    const [modalContent, setModalContent] = useState(null);
    const [clickedElement, setClickedElement] = useState(null);

    const handleDisplay = (project, event) => {
        setClickedElement(event.currentTarget);
        window.scrollTo(0, 0);
        document.body.style.overflow = "hidden"; // Add this line
        document.documentElement.style.overflow = "hidden"; // Add this line
        setModalContent(project);
    };


    const handleClose = () => {
        //   document.body.style.overflowX = "hidden"; // Add this line
        document.documentElement.style.overflowX = "hidden"; // Add this line
        //   document.body.style.overflowY = "scroll"; // Add this line
        document.documentElement.style.overflowY = "scroll"; // Add this line

        if (clickedElement) {
            clickedElement.scrollIntoView({ block: "center" });
        }
        setModalContent(null);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const modal = document.querySelector('.iframe-container');
            if (modal && !modal.contains(event.target) && document.querySelector('.overlay')) {
                handleClose();
            }
        };

        if (modalContent && document.querySelector('.overlay')) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [modalContent]);

    const projectContent = {
        project1: (
            <>
                <img src={Eaxee.image1} alt="project1" />
                <img src={Eaxee.image2} alt="project1" />
                <img src={Eaxee.image3} alt="project1" />
                <img src={Eaxee.image4} alt="project1" />
                <img src={Eaxee.image5} alt="project1" />
                <img src={Eaxee.image6} alt="project1" />
                <img src={Eaxee.image7} alt="project1" />
                <img src={Eaxee.image8} alt="project1" />
                <img src={Eaxee.image9} alt="project1" />
                <img src={Eaxee.image10} alt="project1" />
                <img src={Eaxee.image11} alt="project1" />
                <img src={Eaxee.image12} alt="project1" />
                <img src={Eaxee.image13} alt="project1" />
                <img src={Eaxee.image14} alt="project1" />
                <img src={Eaxee.image15} alt="project1" />
                <img src={Eaxee.image16} alt="project1" />
                <img src={Eaxee.image17} alt="project1" />
                <img src={Eaxee.image18} alt="project1" />
                <img src={Eaxee.image19} alt="project1" />
                <img src={Eaxee.image20} alt="project1" />
                <img src={Eaxee.image21} alt="project1" />
                <img src={Eaxee.image22} alt="project1" />
            </>
        ),
        project2: (
            <>
                <img src={GlyphicX.image1} alt="project2" />
                <img src={GlyphicX.image5} alt="project2" />
                <img src={GlyphicX.image6} alt="project2" />
                <img src={GlyphicX.image7} alt="project2" />
                <img src={GlyphicX.image8} alt="project2" />
                <img src={GlyphicX.image9} alt="project2" />
                <img src={GlyphicX.image10} alt="project2" />
                <img src={GlyphicX.image11} alt="project2" />
                <img src={GlyphicX.image12} alt="project2" />
                <img src={GlyphicX.image13} alt="project2" />
                <img src={GlyphicX.image14} alt="project2" />
                <img src={GlyphicX.image15} alt="project2" />
                <img src={GlyphicX.image16} alt="project2" />
                <img src={GlyphicX.image17} alt="project2" />
                <img src={GlyphicX.image18} alt="project2" />
                <img src={GlyphicX.image19} alt="project2" />
                <img src={GlyphicX.image20} alt="project2" />
                <img src={GlyphicX.image21} alt="project2" />
                <img src={GlyphicX.image22} alt="project2" />
                <img src={GlyphicX.image23} alt="project2" />
                <img src={GlyphicX.image24} alt="project2" />
                <img src={GlyphicX.image25} alt="project2" />
                <img src={GlyphicX.image26} alt="project2" />
                <img src={GlyphicX.image27} alt="project2" />
                <img src={GlyphicX.image28} alt="project2" />
                <img src={GlyphicX.image29} alt="project2" />
                <img src={GlyphicX.image30} alt="project2" />
                <img src={GlyphicX.image31} alt="project2" />
                <img src={GlyphicX.image32} alt="project2" />
                <img src={GlyphicX.image33} alt="project2" />
            </>
        ),
        project3: (
            <>
                <img src={LambdaTheta.image1} alt="project3" />
                <img src={LambdaTheta.image2} alt="project3" />
                <img src={LambdaTheta.image3} alt="project3" />
                <video controls muted autoPlay playsInline loop>
                    <source src={LambdaTheta.video1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video controls muted autoPlay playsInline loop>
                    <source src={LambdaTheta.video2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </>
        ),
        project4: (
            <>
                <img src={VideoProduction.image1} alt="project4" style={{ width: "100%" }} />
                <img src={VideoProduction.image2} alt="project4" style={{ width: "100%" }} />
                <img src={VideoProduction.image3} alt="project4" style={{ width: "100%" }} />
                <img src={VideoProduction.image4} alt="project4" style={{ width: "100%" }} />
                <img src={VideoProduction.image5} alt="project4" style={{ width: "100%" }} />
                <img src={VideoProduction.image6} alt="project4" style={{ width: "100%" }} />
                <img src={VideoProduction.image7} alt="project4" style={{ width: "100%" }} />
                <img src={VideoProduction.image8} alt="project4" style={{ width: "100%" }} />
                <img src={VideoProduction.image9} alt="project4" style={{ width: "100%" }} />
                <img src={VideoProduction.image10} alt="project4" style={{ width: "100%" }} />
                <img src={VideoProduction.image11} alt="project4" style={{ width: "100%" }} />
                <img src={VideoProduction.image12} alt="project4" style={{ width: "100%" }} />
                <img src={VideoProduction.image13} alt="project4" style={{ width: "100%" }} />
                <img src={VideoProduction.image14} alt="project4" style={{ width: "100%" }} />
                <img src={VideoProduction.image15} alt="project4" style={{ width: "100%" }} />
            </>
        )

        // any other project content if needed
    };

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {

        gsap.from("#pro1", {
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: "#pro1",
                scroller: "body",
                markers: false,
                start: "top 80%",
                end: "top 30%",
                // scrub: 2,
            }
        });

        gsap.from("#gsapleft", {
            x: -400,
            opacity: 0,
            duration: 1,

            scrollTrigger: {
                trigger: "#gsapleft",
                scroller: "body",
                markers: false,
                start: "top 80%",
                end: "top 30%",
                // scrub: 2,
            }
        });

        gsap.from("#gsapright", {
            x: 400,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: "#gsapright",
                scroller: "body",
                markers: false,
                start: "top 80%",
                end: "top 30%",
                // scrub: 2,
            }
        });
        gsap.from("#pro2gsapleft", {
            x: -400,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: "#pro2gsapleft",
                scroller: "body",
                markers: false,
                start: "top 80%",
                end: "top 30%",
                // scrub: 2,
            }
        });
        gsap.from("#pro2gsapright", {
            x: 800,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: "#pro2gsapright",
                scroller: "body",
                markers: false,
                start: "top 80%",
                end: "top 30%",
                // scrub: 1,
            }
        });
        gsap.from("#pro3gsapleft", {
            x: -400,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: "#pro3gsapleft",
                scroller: "body",
                markers: false,
                start: "top 80%",
                end: "top 30%",
                // scrub: 2,
            }
        });
        gsap.from("#pro3gsapright", {
            x: 800,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: "#pro3gsapright",
                scroller: "body",
                markers: false,
                start: "top 80%",
                end: "top 30%",
                // scrub: 1,
            }
        });
        gsap.from("#pro4gsapleft", {
            x: -400,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: "#pro4gsapleft",
                scroller: "body",
                markers: false,
                start: "top 80%",
                end: "top 30%",
                // scrub: 2,
            }
        });
        gsap.from("#pro4gsapright", {
            x: 800,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: "#pro4gsapright",
                scroller: "body",
                markers: false,
                start: "top 80%",
                end: "top 30%",
                // scrub: 1,
            }
        });
    })


    return (
        <div className={modalContent ? 'projects' : 'simple'}>

            <div className="project1" id='pro1'>
                <div className="content left"  >
                    <h1 id='gsapleft' className='mainHeading projectHeading' onClick={(e) => handleDisplay('project2', e)}>GlyPhicX</h1>
                    <p id='gsapleft' className='para'>When it came to crafting our own identity, we approached the task with the same passion and creativity that we bring to every client project</p>
                    <p id='gsapleft' className='para mt-3 pb-3'>The result? A cohesive, powerful brand identity that not only represents who we are today but also inspires us as we continue to grow and evolve</p>
                    <div id='gsapleft' className="mt-3">
                        <button className='w-full' onClick={(e) => handleDisplay('project2', e)} >
                            <CustomButton2 text="Explore" ></CustomButton2>
                        </button>
                    </div>
                </div>
                <div id='gsapright' className="image right">
                    <img onClick={(e) => handleDisplay('project2', e)} src={GlyphicX.image1} alt="" />
                </div>
            </div>
            
            <div className="project2">
                <div className="content left">
                    <h1 id='pro2gsapleft' className='mainHeading projectHeading' onClick={(e) => handleDisplay('project1', e)}>Eaxee EnterPrise</h1>
                    <p id='pro2gsapleft' className='para'>Eaxee, a leader in enterprise architecture management, sought a brand identity that would mirror its commitment to empowering organizations with intuitive, flexible solutions.</p>
                    <p id='pro2gsapleft' className='mt-3 para pb-3'>Our task was to craft a brand that embodies Eaxee’s mission of delivering a user-friendly platform while aligning with its vision of making enterprise architecture accessible to all.</p>
                    <div id='pro2gsapleft' className="mt-3">
                        <button className='w-full' onClick={(e) => handleDisplay('project1', e)} >
                            <CustomButton2 text="Explore" ></CustomButton2>
                        </button>
                    </div>
                </div>
                <div id='pro2gsapright' className="image right">
                    <img onClick={(e) => handleDisplay('project1', e)} src={Eaxee.image1} alt="" />
                </div>
            </div>

            <div className="project1">
                <div className="content left">
                    <h1 id='pro3gsapleft' className='mainHeading projectHeading' onClick={(e) => handleDisplay('project3', e)}>Lambda Theta</h1>
                    <p id='pro3gsapleft' className='para'>Lambda Theta, a cutting-edge technology company, required a brand identity that would capture the essence of their expertise in providing research and development of AI-based and Digital Systems</p>
                    <p id='pro3gsapleft' className='mt-3 para pb-3'>We crafted a voice that resonates with Lambda Theta’s core mission—to solve complex challenges with customized, cutting-edge solutions establishing them as a trusted, innovative partner in the tech industry.</p>

                    <div id='pro3gsapleft' className="mt-3">
                        <button className='w-full' onClick={(e) => handleDisplay('project3', e)} >
                            <CustomButton2 text="Explore" ></CustomButton2>
                        </button>
                    </div>
                </div>
                <div id='pro3gsapright' className="image right">
                    <img onClick={(e) => handleDisplay('project3', e)} src={LambdaTheta.image3} alt="" />
                </div>
            </div>

            <div className="project2">
                <div className="content left">
                    <h1 id='pro4gsapleft' className='mainHeading projectHeading' onClick={(e) => handleDisplay('project4', e)}>uHu TvC Production</h1>
                    <p id='pro4gsapleft' className='para'>The ad highlights the universal application and strength of a UHU adhesive tube and was designed to leverage the hype around the release of House of the Dragon by nostalgia baiting a popular scene from Game of Thrones.</p>
                    <p id='pro4gsapleft' className='mt-3 para pb-3'>This pitch documents is the first step in the pre-production and essential to outline the perspective, vision, and story ideas for the job and explain how the TV commercial will be brought to life</p>
                    <div id='pro4gsapleft' className="mt-3">
                        <button className='w-full' onClick={(e) => handleDisplay('project4', e)} >
                            <CustomButton2 text="Explore" ></CustomButton2>
                        </button>
                    </div>
                </div>
                <div id='pro4gsapright' className="image right">
                    <img onClick={(e) => handleDisplay('project4', e)} src={VideoProduction.image1} alt="" />
                </div>
            </div>
            {/* any other project if needed */}

            {modalContent && (
                <div className="overlay" >

                    <div className="iframe-container" onClick={(e) => e.stopPropagation()} >
                        <div className='project-iframe' >
                            {projectContent[modalContent]}
                        </div>
                        <button className="close-btn" onClick={handleClose}>
                            <i className="fa-solid fa-xmark fa-2xl"></i>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Projects;
