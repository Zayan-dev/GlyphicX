import React from 'react'
import ServiceHero from './hero/ServiceHero'
import Branding from './branding/Branding'
import Visualization from './visualization/Visualization'
import FinalProduct from './finalPro/FinalProduct'
import Sketch from './sketch/Sketch'
import Cta from '../cta/Cta'

const Service = () => {
  return (
    <div>
      <ServiceHero></ServiceHero>
      <Branding></Branding>
      <br />
      <Visualization></Visualization>
      <br />
      <FinalProduct></FinalProduct>
      <br />
      <Sketch></Sketch>
      <br />
      <Cta></Cta>
    </div>
  )
}

export default Service
