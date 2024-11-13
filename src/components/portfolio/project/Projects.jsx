import React, { useEffect, useRef, useState } from 'react';
import "../project/projects.css";
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import circleDot from "../../../assets/images/Patterns/dotPattern.png"
import arrowwithDotsPattern from "../../../assets/images/Patterns/arrowWithDotsPattern.png"
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

  const UrgeFragrances = {
    image1: "/Portfolio/UrgeFragrances/1.png",
    image2: "/Portfolio/UrgeFragrances/2.jpg",
    video1: "/Portfolio/UrgeFragrances/3.mp4",
    image4: "/Portfolio/UrgeFragrances/8.jpg",
    image5: "/Portfolio/UrgeFragrances/9.jpg",
    image6: "/Portfolio/UrgeFragrances/10.png",
    video2: "/Portfolio/UrgeFragrances/5.mp4",
    video3: "/Portfolio/UrgeFragrances/6.mp4",
  };

  const LambdaTheta = {
    image1: "/Portfolio/Lambda Theta/2.jpg",
    image2: "/Portfolio/Lambda Theta/3.jpg",
    image3: "/Portfolio/Lambda Theta/4.jpg",
    video1: "/Portfolio/Lambda Theta/1.mp4",
    video2: "/Portfolio/Lambda Theta/5.m4v",
  }

  const Eaxeesoft = {
    image1: "/Portfolio/Eaxeesoft/eaxeesoft Brand Identity 11-08-2024-01.jpg",
    image2: "/Portfolio/Eaxeesoft/eaxeesoft Brand Identity 11-08-2024-02.jpg",
    image3: "/Portfolio/Eaxeesoft/eaxeesoft Brand Identity 11-08-2024-03.jpg",
    image4: "/Portfolio/Eaxeesoft/eaxeesoft Brand Identity 11-08-2024-04.jpg",
    image5: "/Portfolio/Eaxeesoft/eaxeesoft Brand Identity 11-08-2024-05.jpg",
    image6: "/Portfolio/Eaxeesoft/eaxeesoft Brand Identity 11-08-2024-06.jpg",
    image7: "/Portfolio/Eaxeesoft/eaxeesoft Brand Identity 11-08-2024-07.jpg",
    image8: "/Portfolio/Eaxeesoft/eaxeesoft Brand Identity 11-08-2024-08.jpg",
    image9: "/Portfolio/Eaxeesoft/eaxeesoft Brand Identity 11-08-2024-09.jpg",
    image10: "/Portfolio/Eaxeesoft/eaxeesoft Brand Identity 11-08-2024-10.jpg",
    image11: "/Portfolio/Eaxeesoft/eaxeesoft Brand Identity 11-08-2024-11.jpg",
    image12: "/Portfolio/Eaxeesoft/eaxeesoft Brand Identity 11-08-2024-12.jpg",
    image13: "/Portfolio/Eaxeesoft/eaxeesoft Brand Identity 11-08-2024-13.jpg",
    image14: "/Portfolio/Eaxeesoft/eaxeesoft Brand Identity 11-08-2024-14.jpg",
  };

  const Perfect = {
    image1: "/Portfolio/Perfect/1.jpg",
    image2: "/Portfolio/Perfect/2.jpg",
    image3: "/Portfolio/Perfect/3.jpg",
    image4: "/Portfolio/Perfect/4.jpg",
    image5: "/Portfolio/Perfect/5.jpg",
    image6: "/Portfolio/Perfect/6.jpg",
    image7: "/Portfolio/Perfect/7.jpg",
    image8: "/Portfolio/Perfect/8.jpg",
    image9: "/Portfolio/Perfect/9.jpg",
    image10: "/Portfolio/Perfect/10.jpg",
    image11: "/Portfolio/Perfect/11.jpg",
    image12: "/Portfolio/Perfect/12.jpg",
    image13: "/Portfolio/Perfect/13.jpg",
    image14: "/Portfolio/Perfect/14.jpg",
  };

  gsap.registerPlugin(ScrollTrigger);
  const [modalContent, setModalContent] = useState(null);
  const [clickedElement, setClickedElement] = useState(null);
  // const overlayRef = useRef(null);

  // useEffect(() => {
  //   if (overlayRef.current) {
  //     gsap.from(overlayRef.current, {
  //       width: "10%",
  //       opacity: 0.5,
  //       duration: 1,
  //       ease: "power2.out"
  //     });
  //   }
  // }, [modalContent]);

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
    // Function to close modal on click outside
    const handleClickOutside = (event) => {
      const modal = document.querySelector('.iframe-container');
      const overlay = document.querySelector('.overlay');

      if (modal && overlay) {
        const { clientX, clientY } = event;
        const { left, top, right, bottom } = modal.getBoundingClientRect();

        // Check if the click is outside the modal
        const isOutsideModal = !(clientX >= left && clientX <= right && clientY >= top && clientY <= bottom);

        // Determine if a vertical scrollbar is present
        const hasVerticalScrollbar = document.body.scrollHeight > window.innerHeight;
        const scrollbarWidth = hasVerticalScrollbar ? 17 : 0; // Approximate scrollbar width (varies by browser)

        // Check if the click is within the scrollbar area (assuming right scrollbar)
        const isClickOnScrollbar = (clientX > window.innerWidth - scrollbarWidth && clientX <= window.innerWidth);

        if (isOutsideModal && !isClickOnScrollbar) {
          handleClose();  // Close the modal if click is outside and not on scrollbar
        }
      }
    };


    // Function to close modal on pressing 'Escape' key
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        handleClose();  // Close the modal if 'Escape' key is pressed
      }
    };

    // Add event listeners when modal is open
    if (modalContent && document.querySelector('.overlay')) {
      document.addEventListener('mousedown', handleClickOutside);  // Detect click outside modal
      document.addEventListener('keydown', handleEscapeKey);        // Detect 'Escape' key press
    }

    // Clean up event listeners when component unmounts or modal closes
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
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
        <img src={UrgeFragrances.image1} alt="project2" className="w-full" />
        <img src={UrgeFragrances.image2} alt="project2" />
        <video controls muted autoPlay playsInline loop>
          <source src={UrgeFragrances.video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <img src={UrgeFragrances.image4} alt="project2" />
        <img src={UrgeFragrances.image5} alt="project2" />
        <div className="flex flex-col sm:flex-row gap-4 sm0:gap-8 justify-between w-fit">
          <video controls muted autoPlay playsInline loop className="w-full sm:w-[49%]">
            <source src={UrgeFragrances.video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video controls muted autoPlay playsInline loop className="w-full sm:w-[49%]">
            <source src={UrgeFragrances.video3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <img src={UrgeFragrances.image6} alt="project2" className="w-full" />
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
        <img src={Eaxeesoft.image1} alt="project4" className="w-full" />
        <img src={Eaxeesoft.image2} alt="project4" className="w-full" />
        <img src={Eaxeesoft.image4} alt="project4" className="w-full" />
        <img src={Eaxeesoft.image3} alt="project4" className="w-full" />
        <img src={Eaxeesoft.image5} alt="project4" className="w-full" />
        <img src={Eaxeesoft.image6} alt="project4" className="w-full" />
        <img src={Eaxeesoft.image7} alt="project4" className="w-full" />
        <img src={Eaxeesoft.image8} alt="project4" className="w-full" />
        <img src={Eaxeesoft.image9} alt="project4" className="w-full" />
        <img src={Eaxeesoft.image10} alt="project4" className="w-full" />
        <img src={Eaxeesoft.image11} alt="project4" className="w-full" />
        <img src={Eaxeesoft.image12} alt="project4" className="w-full" />
        <img src={Eaxeesoft.image13} alt="project4" className="w-full" />
        <img src={Eaxeesoft.image14} alt="project4" className="w-full" />
      </>
    ),
    project5: (
      <>
        {Object.keys(Perfect).map((key, index) => {
          const imageSrc = Perfect[key]; // Get the image URL from the object

          // Render two images per row (if it's an odd index, render a single image)
          if (index % 2 === 0) {
            const nextImage = Perfect[Object.keys(Perfect)[index + 1]];

            return (
              <div key={index} className="flex flex-col sm:flex-row gap-4 sm0:gap-8 justify-between w-full">
                <img src={imageSrc} alt={`project${index + 1}`} className="w-full sm:w-[48%] lg:w-[49%]" />
                {nextImage && (
                  <img
                    src={nextImage}
                    alt={`project${index + 2}`}
                    className="w-full sm:w-[48%] lg:w-[49%]"
                  />
                )}
              </div>
            );
          }
          return null; // Skip odd-indexed items
        })}
      </>
    ),
    // any other project content if needed
  };


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
      x: -600,
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
      x: -600,
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
    gsap.from("#pro5gsapleft", {
      x: -600,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#pro5gsapleft",
        scroller: "body",
        markers: false,
        start: "top 80%",
        end: "top 30%",
        // scrub: 2,
      }
    });
    gsap.from("#pro5gsapright", {
      x: 800,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#pro5gsapright",
        scroller: "body",
        markers: false,
        start: "top 80%",
        end: "top 30%",
        // scrub: 1,
      }
    });
    gsap.to("#pattern1", {
      opacity: 0.2,
      duration: 1,
      repeat: -1,
      ease: "none",
      yoyo: true
    })
    gsap.to("#pattern2", {
      y: 30,
      repeat: -1,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true
    })
  })



  return (
    <div className={modalContent ? "projects" : "simple"}>
      <div className="pattern1" id='pattern1'>
        <img src={circleDot} height="100%" width="100%" alt="" />
      </div>
      <div className="project1" id="gsapright">
        <img
          src={Eaxee.image1}
          // id="gsapright"
          alt="Eaxee Image"
          className=" project1-image"
          onClick={(e) => handleDisplay("project1", e)}
        />
        <div className="project1-overflow"
        // id='gsapleft'
        >
          <div className="project-content">
            <h1
              className="headingSpan mainHeading"
              onClick={(e) => handleDisplay("project1", e)}
            >
              Eaxee Enterprise
            </h1>
            <h3 className="subHeading">BRANDING & WEB DEVELOPMENT</h3>
            <p className="para">
              Eaxee, a leader in enterprise architecture management, sought a
              brand identity that would mirror its commitment to empowering
              organizations with intuitive, flexible solutions
            </p>
          </div>
        </div>
      </div>

      <div className="pattern2" id='pattern2'>
        <img src={arrowwithDotsPattern} height="100%" width="100%" alt="" />
      </div>
      <div className="project2" id='pro2gsapleft'>
        <img
          // id="pro2gsapleft"
          src={LambdaTheta.image3}
          alt="Lambda Theta Image"
          className="project2-image"
          onClick={(e) => handleDisplay("project3", e)}
        />
        <div className="project2-overflow"
        //  id="pro2gsapright"
        >
          <div className="project-content">
            <h1
              className="headingSpan mainHeading"
              onClick={(e) => handleDisplay("project3", e)}
            >
              Lambda Theta
            </h1>
            <h3 className="subHeading">BRANDING & GRAPHIC DESIGN</h3>
            <p className="para">
              Lambda Theta, a cutting-edge technology company, required a
              brand identity that would capture the essence of their expertise
              in AI-based and Digital Systems
            </p>
          </div>
        </div>
      </div>
      <div className="pattern3" id='pattern2'>
        <img src={arrowwithDotsPattern} height="100%" width="100%" alt="" />
      </div>
      <div className="project1" id="pro3gsapright">
        <img
          // id="pro3gsapright"
          src={UrgeFragrances.image1}
          alt="UrgeFragrances Image"
          className=" project1-image"
          onClick={(e) => handleDisplay("project2", e)}
        />
        <div className="project1-overflow"
        //  id="pro3gsapleft"
        >
          <div className="project-content">
            <h1
              className="headingSpan mainHeading"
              onClick={(e) => handleDisplay("project2", e)}
            >
              Urge Fragrances
            </h1>
            <h3 className="subHeading">GRAPHIC DESIGN & 3D ANIMATION</h3>
            <p className="para">
              Our collaboration with Urge Fragrances included, developing a
              distinctive logo, creating sophisticated packaging & delivering
              3D renderings of their products
            </p>
          </div>
        </div>
      </div>

      <div className="pattern4" id='pattern1'>
        <img src={circleDot} height="100%" width="100%" alt="" />
      </div>
      <div className="project2" id="pro4gsapleft">
        <img
          // id="pro4gsapleft"
          src={Eaxeesoft.image1}
          alt="Eaxeesoft Image"
          className=" project2-image"
          onClick={(e) => handleDisplay("project4", e)}
        />
        <div className="project2-overflow"
        // id="pro4gsapright"
        >
          <div className="project-content">
            <h1
              className="headingSpan mainHeading"
              onClick={(e) => handleDisplay("project4", e)}
            >
              Eaxee Soft
            </h1>
            <h3 className="subHeading">BRANDING AND WEB DEVELOPMENT</h3>
            <p className="para">
              Tasked with creating the complete brand identity and developing
              a modern, functional website for EaxeeSoft, a custom software
              development company.
            </p>
          </div>
        </div>
      </div>
      <div className="project1" id="pro5gsapright">
        <img
          // id="pro5gsapright"
          src="/Portfolio/Perfect/Gray.jpg"
          alt="Perfect Image"
          className=" project1-image"
          onClick={(e) => handleDisplay("project5", e)}
        />
        <div className="project1-overflow"
        // id="pro5gsapleft"
        >
          <div className="project-content">
            <h1
              className="headingSpan mainHeading"
              onClick={(e) => handleDisplay("project2", e)}
            >
              Perfect
            </h1>
            <h3 className="subHeading">3D visualization</h3>
            <p className="para">
              For Perfect Cosmetics, we developed high-quality 3D renders that
              capture the elegance and design details of their product line,
              showcasing each item in its best light.
            </p>
          </div>
        </div>
      </div>

      {modalContent && (
        <div className="overlay" >
          <div
            className="iframe-container flex justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="project-iframe"
            // ref={overlayRef} 
            >
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
