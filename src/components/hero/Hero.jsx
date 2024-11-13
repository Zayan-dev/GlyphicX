import React from 'react'
import '../hero/hero.css'
import Benefit from '../benefit/Benefit'
import Feature from '../feature/Feature'
import Cta from '../cta/Cta'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VideoBanner from '../videobanner/VideoBanner'
import ApproachAndBenefits from '../approach_benefits/approach_benefits'
import circleDotPattern from "../../assets/images/Patterns/dotPattern.png";
import circleDotWithDoodlePattern from "../../assets/images/Patterns/secondDotPattern.png";
const Hero = () => {

    gsap.registerPlugin(ScrollTrigger);
    useGSAP(
        () => {
            gsap.from('#gsapNavItem', {
                x: -500,
                duration: 1,
            });
            gsap.from('#gsapLogo', {
                y: -90,
                duration: 1,
            });
            gsap.from('#gsapContactBtn', {
                x: 500,
                duration: 1,
            });
            gsap.from("#gsapBenefitHeading", {
                x: -800,
                opacity: 0,
                scrollTrigger: {
                    trigger: "#gsapBenefitHeading",
                    scroller: "body",
                    markers: false,
                    start: "top 90%",
                    end: "top 40%",
                    // // scrub: 2,
                }
            });
            gsap.from("#gsapBenefitIntro", {
                x: 800,
                opacity: 0,
                scrollTrigger: {
                    trigger: "#gsapBenefitIntro",
                    scroller: "body",
                    markers: false,
                    start: "top 90%",
                    end: "top 40%",
                    // // scrub: 2,
                }
            });
            gsap.from("#gsapFeatureVideo", {
                transformOrigin: 'left',
                transform: "scaleX(0)",
                duration: 1,
                scrollTrigger: {
                    trigger: "#gsapFeatureVideo",
                    scroller: "body",
                    markers: false,
                    start: "top 90%",
                    end: "top 30%",
                    // scrub: 1,
                }
            })
            gsap.from("#gsapFeatureText", {
                x: 400,
                opacity: 0,
                scrollTrigger: {
                    trigger: "#gsapFeatureText",
                    scroller: "body",
                    markers: false,
                    start: "top 100%",
                    end: "top 30%",
                    // scrub: 2,
                }
            })
            gsap.from("#gsapCollaborationHeading p", {
                rotateX: "90deg",
                opacity: 0,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: "#gsapCollaborationHeading",
                    scroller: "body",
                    markers: false,
                    start: "top 60%",
                    end: "top 10%",
                    // scrub: 5,
                }
            });


            gsap.from("#gsapInner1 p", {
                y: 400,
                opacity: 0,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: "#gsapInner1",
                    scroller: "body",
                    markers: false,
                    start: "top 100%",
                    end: "top 30%",
                    // scrub: 2,
                }
            });
            gsap.from("#gsapInner1 img", {
                scale: 5,
                rotateZ: "360deg",
                scrollTrigger: {
                    trigger: "#gsapInner1",
                    scroller: "body",
                    markers: false,
                    start: "top 100%",
                    end: "top 30%",
                    // scrub: 2,
                }
            });
            gsap.from("#gsapInner2 p", {
                y: 400,
                opacity: 0,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: "#gsapInner1",
                    scroller: "body",
                    markers: false,
                    start: "top 100%",
                    end: "top 30%",
                    // scrub: 2,
                }
            });
            gsap.from("#gsapInner2 img", {
                scale: 5,
                rotateZ: "360deg",
                scrollTrigger: {
                    trigger: "#gsapInner1",
                    scroller: "body",
                    markers: false,
                    start: "top 100%",
                    end: "top 30%",
                    // scrub: 2,
                }
            });
            gsap.from("#gsapWorkingHeading", {
                rotateX: "90deg",
                y: -180,
                opacity: 0,
                // stagger: 0.3,
                scrollTrigger: {
                    trigger: "#gsapWorking",
                    scroller: "body",
                    markers: false,
                    start: "top 80%",
                    end: "top 30%",
                    // scrub: 2,
                }
            });
            gsap.from("#gsapWorkingStar img", {
                opacity: 0,
                duration: 3,
                scrollTrigger: {
                    trigger: "#gsapWorkingStar img",
                    scroller: "body",
                    markers: false,
                    start: "top 90%",
                    end: "top 60%",
                }
            });
            gsap.from("#gsapWorkingTextDiv p", {
                rotateX: "90deg",
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                scrollTrigger: {
                    trigger: "#gsapWorkingTextDiv",
                    scroller: "body",
                    markers: false,
                    start: "top 80%",
                    end: "top 10%",
                    // scrub: 5,
                }
            });
            gsap.from("#gsapWorkingTextDiv h3", {
                rotateX: "90deg",
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                scrollTrigger: {
                    trigger: "#gsapWorkingTextDiv",
                    scroller: "body",
                    markers: false,
                    start: "top 80%",
                    end: "top 10%",
                    // scrub: 5,
                }
            });

            gsap.to("#pattern1", {
                opacity: 0.25,
                duration: 1,
                repeat: -1,
                ease: "none",
                yoyo: true
            })
            gsap.to("#pattern2", {
                y: -30,
                duration: 3,
                ease: "power2.inOut",
                repeat: -1,
                ease: "none",
                yoyo: true
            })
            gsap.to("#pattern3", {
                duration: 3,
                ease: "power2.inOut",
                x: 60,
                ease: "none",
                repeat: -1,
                yoyo: true
                // rotation: 360,
            })
        },
    );

    return (
        <>
            {/* <ImageSlider></ImageSlider> */}
            <div className="videoBannerAndFeature">
                <Benefit></Benefit>
                <VideoBanner></VideoBanner>
                <Feature></Feature>
                <div id="pattern1" className="circleDotPattern">
                    <img
                        id="pattern1"
                        height="100%"
                        width="100%"
                        src={circleDotPattern}
                        alt="Circle Dot pattern"
                    />
                </div>
                <div id="gsapWorkingStar" className="circleDotWithDoodlePattern">
                    <img
                        id="gsapWorking"
                        height="100%"
                        width="100%"
                        src={circleDotWithDoodlePattern}
                        alt="Circle Dot with Doodle pattern"
                    />
                </div>
                <ApproachAndBenefits />
                <Cta></Cta>
            </div>
        </>
    );
}

export default Hero



