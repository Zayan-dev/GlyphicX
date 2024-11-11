import React from 'react'
import ServiceHero from './hero/ServiceHero'
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ServiceIntro from './serviceIntro/ServiceIntro'

const Service = () => {

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".gsapBrandingText", {
      x: -400,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".gsapBrandingText",
        scroller: "body",
        markers: false,
        start: "top 50%",
        end: "top 30%",
      }
    });
    gsap.from(".gsapBrandingSlider", {
      x: 400,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".gsapBrandingSlider",
        scroller: "body",
        markers: false,
        start: "top 50%",
        end: "top 30%",
      }
    });
    gsap.from(".gsapVisText", {
      x: 400,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".gsapVisText",
        scroller: "body",
        markers: false,
        start: "top 50%",
        end: "top 30%",
      }
    });
    gsap.from(".gsapVisSlider", {
      x: -400,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".gsapVisSlider",
        scroller: "body",
        markers: false,
        start: "top 50%",
        end: "top 30%",
      }
    });
    gsap.from(".gsapFinalProText", {
      x: -400,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".gsapFinalProText",
        scroller: "body",
        markers: false,
        start: "top 50%",
        end: "top 30%",
      }
    });
    gsap.from(".gsapFinalProSlider", {
      x: 400,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".gsapFinalProSlider",
        scroller: "body",
        markers: false,
        start: "top 50%",
        end: "top 30%",
      }
    });
    gsap.from(".gsapSketchSlider", {
      x: -400,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".gsapSketchSlider",
        scroller: "body",
        markers: false,
        start: "top 50%",
        end: "top 30%",
      }
    });
    gsap.from(".gsapSketchText", {
      x: 400,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".gsapSketchText",
        scroller: "body",
        markers: false,
        start: "top 50%",
        end: "top 30%",
      }
    });
    gsap.from(".gsapGraphicText", {
      x: -400,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".gsapGraphicText",
        scroller: "body",
        markers: false,
        start: "top 50%",
        end: "top 30%",
      }
    });
    gsap.from(".gsapGraphicSlider", {
      x: 400,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".gsapGraphicSlider",
        scroller: "body",
        markers: false,
        start: "top 50%",
        end: "top 30%",
      }
    });
    gsap.from(".gsapCommercialSlider", {
      x: -400,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".gsapCommercialSlider",
        scroller: "body",
        markers: false,
        start: "top 50%",
        end: "top 30%",
      }
    });
    gsap.from(".gsapCommecialText", {
      x: 400,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".gsapCommecialText",
        scroller: "body",
        markers: false,
        start: "top 50%",
        end: "top 30%",
      }
    });
    gsap.from(".gsapProAnimText", {
      x: 400,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".gsapProAnimText",
        scroller: "body",
        markers: false,
        start: "top 50%",
        end: "top 30%",
      }
    });
    gsap.from(".gsapProAnimSlider", {
      x: -400,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".gsapProAnimSlider",
        scroller: "body",
        markers: false,
        start: "top 50%",
        end: "top 30%",
      }
    });
    gsap.from(".gsapUiSlider", {
      x: 400,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".gsapUiSlider",
        scroller: "body",
        markers: false,
        start: "top 50%",
        end: "top 30%",
      }
    });
    gsap.from(".gsapUiText", {
      x: -400,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".gsapUiText",
        scroller: "body",
        markers: false,
        start: "top 50%",
        end: "top 30%",
      }
    });
    gsap.from(".gsapWebDevText", {
      x: 400,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".gsapWebDevText",
        scroller: "body",
        markers: false,
        start: "top 50%",
        end: "top 30%",
      }
    });
    gsap.from(".gsapWebDevSlider", {
      x: -400,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".gsapWebDevSlider",
        scroller: "body",
        markers: false,
        start: "top 50%",
        end: "top 30%",
      }
    });
    gsap.from(".gsapinteriordesignText", {
      x: -400,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".gsapinteriordesignText",
        scroller: "body",
        markers: false,
        start: "top 50%",
        end: "top 30%",
      }
    });
    gsap.from(".gsapinteriordesignSlider", {
      x: 400,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".gsapinteriordesignSlider",
        scroller: "body",
        markers: false,
        start: "top 50%",
        end: "top 30%",
      }
    });
    gsap.from(".gsapTvcSlider", {
      x: -400,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".gsapTvcSlider",
        scroller: "body",
        markers: false,
        start: "top 50%",
        end: "top 30%",
      }
    });
    gsap.from(".gsapTvcText", {
      x: 400,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".gsapTvcText",
        scroller: "body",
        markers: false,
        start: "top 50%",
        end: "top 30%",
      }
    });

  })
  return (
    <div>
      <ServiceHero heading="services" para="what we do" ></ServiceHero>
      <ServiceIntro/>
    </div>
  )
}

export default Service
