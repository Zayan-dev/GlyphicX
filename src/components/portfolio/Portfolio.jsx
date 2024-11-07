import React from 'react'
import Cta from '../cta/Cta'
import Projects from './project/Projects'
import ServiceHero from '../services/hero/ServiceHero'

const Portfolio = () => {

  return (
    <div>
      <ServiceHero heading="Our Work" para="Recent Projects" ></ServiceHero>
      <Projects></Projects>
      <Cta></Cta>
    </div>
  )
}

export default Portfolio
