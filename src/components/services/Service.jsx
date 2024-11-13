import React from 'react'
import ServiceHero from './hero/ServiceHero'
import ServiceIntro from './serviceIntro/ServiceIntro'

const Service = () => {


  return (
    <div>
      <ServiceHero heading="services" para="what we do" ></ServiceHero>
      <ServiceIntro/>
    </div>
  )
}

export default Service
