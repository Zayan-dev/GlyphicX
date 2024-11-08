import React from 'react'
import Projects from './project/Projects'
import ServiceHero from '../services/hero/ServiceHero'

const Portfolio = () => {

  return (
    <div>
      <ServiceHero heading="Our Work" para="Recent Projects" ></ServiceHero>
      <Projects></Projects>
    </div>
  )
}

export default Portfolio
