import React from 'react'
import ServiceHero from './hero/ServiceHero'
import Branding from './branding/Branding'
import Visualization from './visualization/Visualization'
import FinalProduct from './finalPro/FinalProduct'
import Sketch from './sketch/Sketch'
import Cta from '../cta/Cta'
import Graphic from './graphic design/Graphic'
import Commercial from './commercial/Commercial'
import ProductAnimation from './ProductAnimation/ProductAnimation'

const Service = () => {


  return (
    <div>
      <ServiceHero heading="Translate ideas into imPactful content" para="Discover our comprehensive range of services that combine design and business expertise." ></ServiceHero>
      <Branding></Branding>
      <br />
      <Visualization></Visualization>
      <br />
      <FinalProduct></FinalProduct>
      <br />
      <Sketch></Sketch>
      <br />
      <Graphic></Graphic>
      <br />
      <Commercial></Commercial>
      <br />
      <ProductAnimation></ProductAnimation>
      <Cta></Cta>
    </div>
  )
}

export default Service
