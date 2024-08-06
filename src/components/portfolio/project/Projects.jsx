import React, { useEffect, useState } from 'react';
import "../project/projects.css";
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
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

    const shoesAnimation = {
        image1: "/Portfolio/Shoe Animation/1.jpg",
        image2: "/Portfolio/Shoe Animation/2.jpg",
        image3: "/Portfolio/Shoe Animation/3.jpg",
        video1: "/Portfolio/Shoe Animation/Animation.mp4",
    }

    const uhu = {
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

    const handleDisplay = (project) => {
        window.scrollTo(0, 0);
        setModalContent(project);
    };

    const handleClose = () => {
        setModalContent(null);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const modal = document.querySelector('.iframe-container');
            if (modal && !modal.contains(event.target) && document.querySelector('.projects')) {
                handleClose();
            }
        };

        if (modalContent && document.querySelector('.projects')) {
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
                <img src={shoesAnimation.image1} alt="project4" />
                <img src={shoesAnimation.image2} alt="project4" />
                <img src={shoesAnimation.image3} alt="project4" />
                <video controls muted autoPlay playsInline loop>
                    <source src={shoesAnimation.video1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </>
        ),
        project5: (
            <>
                <img style={{ width: "100%" }} src={uhu.image1} alt="project5" />
                <img style={{ width: "100%" }} src={uhu.image2} alt="project5" />
                <img style={{ width: "100%" }} src={uhu.image3} alt="project5" />
                <img style={{ width: "100%" }} src={uhu.image4} alt="project5" />
                <img style={{ width: "100%" }} src={uhu.image5} alt="project5" />
                <img style={{ width: "100%" }} src={uhu.image6} alt="project5" />
                <img style={{ width: "100%" }} src={uhu.image7} alt="project5" />
                <img style={{ width: "100%" }} src={uhu.image8} alt="project5" />
                <img style={{ width: "100%" }} src={uhu.image9} alt="project5" />
                <img style={{ width: "100%" }} src={uhu.image10} alt="project5" />
                <img style={{ width: "100%" }} src={uhu.image11} alt="project5" />
                <img style={{ width: "100%" }} src={uhu.image12} alt="project5" />
                <img style={{ width: "100%" }} src={uhu.image13} alt="project5" />
                <img style={{ width: "100%" }} src={uhu.image14} alt="project5" />
                <img style={{ width: "100%" }} src={uhu.image15} alt="project5" />
            </>
        )
        // any other project content if needed
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
                    <h1 className='mainHeading' onClick={() => handleDisplay('project2')}>GlyphicX</h1>
                    <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit harum eveniet fugit, cumque dignissimos illum quis vitae saepe excepturi at? Atque, impedit molestiae.</p>
                </div>
                <div className="image right">
                    <img onClick={() => handleDisplay('project2')} src={GlyphicX.image1} alt="" />
                </div>
            </div>

            <div className="project2">
                <div className="content left">
                    <h1 className='mainHeading' onClick={() => handleDisplay('project1')}>Eaxee Enterprise</h1>
                    <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit harum eveniet fugit, cumque dignissimos illum quis vitae saepe excepturi at? Atque, impedit molestiae.</p>
                </div>
                <div className="image right">
                    <img onClick={() => handleDisplay('project1')} src={Eaxee.image1} alt="" />
                </div>
            </div>

            <div className="project1">
                <div className="content left">
                    <h1 className='mainHeading' onClick={() => handleDisplay('project5')}>uHu</h1>
                    <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit harum eveniet fugit, cumque dignissimos illum quis vitae saepe excepturi at? Atque, impedit molestiae.</p>
                </div>
                <div className="image right">
                    <img onClick={() => handleDisplay('project5')} src={uhu.image1} alt="" />
                </div>
            </div>

            <div className="project2">
                <div className="content left">
                    <h1 className='mainHeading' onClick={() => handleDisplay('project3')}>Lambda Theta</h1>
                    <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit harum eveniet fugit, cumque dignissimos illum quis vitae saepe excepturi at? Atque, impedit molestiae.</p>
                </div>
                <div className="image right">
                    <img onClick={() => handleDisplay('project3')} src={LambdaTheta.image3} alt="" />
                </div>
            </div>

            <div className="project1">
                <div className="content left">
                    <h1 className='mainHeading' onClick={() => handleDisplay('project4')}>Shoes Animation</h1>
                    <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit harum eveniet fugit, cumque dignissimos illum quis vitae saepe excepturi at? Atque, impedit molestiae.</p>
                </div>
                <div className="image right">
                    <img onClick={() => handleDisplay('project4')} src={shoesAnimation.image1} alt="" />
                </div>
            </div>
            {/* any other project if needed */}

            {modalContent && (
                <div className="iframe-container" onClick={(e) => e.stopPropagation()}>
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
