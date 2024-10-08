import React from 'react'
import '../hero/hero.css'
import Benefit from '../benefit/Benefit'
import Feature from '../feature/Feature'
import Working from '../working/Working'
import Collaboration from '../collaboration/Collaboration'
import Testimonial from '../testimonial/Testimonial'
import Team from '../team/Team'
import Cta from '../cta/Cta'
import ImageSlider from '../ImageSlider/ImageSlider'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LogoBanner from '../logobanner/LogoBanner'
import VideoBanner from '../videobanner/VideoBanner'
import ApproachAndBenefits from '../approach_benefits/approach_benefits'
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
            // gsap.from('#gsapSlider', {
            //     y: 100,
            //     opacity: 0,
            //     scale: 3,
            //     duration: 1
            // });
            // gsap.from("#gsapBenefitContainer", {
            //     x: -800,
            //     opacity: 0,
            //     scrollTrigger: {
            //         trigger: "#gsapBenefitContainer",
            //         scroller: "body",
            //         markers: false,
            //         start: "top 90%",
            //         end: "top 40%",
            //         // // scrub: 2,
            //     }
            // });

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
            // gsap.from("#gsapWorkingImg ", {
            //     transformOrigin: 'left',
            //     transform: "scaleX(0)",
            //     scrollTrigger: {
            //         trigger: "#gsapWorkingImg",
            //         scroller: "body",
            //         markers: false,
            //         start: "top 80%",
            //         end: "top 30%",
            //         // scrub: 2,
            //     }
            // });
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
                stagger: 0.3,
                duration:1,
                scrollTrigger: {
                    trigger: "#gsapWorkingTextDiv",
                    scroller: "body",
                    markers: false,
                    start: "top 60%",
                    end: "top 10%",
                    // scrub: 5,
                }
            });
            gsap.from("#gsapWorkingTextDiv h3", {
                rotateX: "90deg",
                opacity: 0,
                stagger: 0.3,
                duration:1,
                scrollTrigger: {
                    trigger: "#gsapWorkingTextDiv",
                    scroller: "body",
                    markers: false,
                    start: "top 60%",
                    end: "top 10%",
                    // scrub: 5,
                }
            });

        },
    );

    return (
        <>
            {/* <ImageSlider></ImageSlider> */}
            <Benefit></Benefit>
            <VideoBanner></VideoBanner>
            <Feature></Feature>
            <ApproachAndBenefits />
            {/* <Collaboration></Collaboration> */}
            {/* <Working></Working> */}
            <LogoBanner></LogoBanner>
            <Testimonial></Testimonial>
            {/* <Team></Team> */}
            <Cta></Cta>
        </>
    )
}

export default Hero



