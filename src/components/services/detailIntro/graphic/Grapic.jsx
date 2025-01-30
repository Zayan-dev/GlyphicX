import React from 'react'
import "./Graphic.css"

const Grapic = () => {
    const graphicDetail = [
        {
            image: "logo",
            name: "Logo"
        },
        {
            image: "banner",
            name: "Banners"
        },
        {
            image: "billboard",
            name: "Billboard"
        },
        {
            image: "booth",
            name: "Trade Show Booth"
        },
        {
            image: "broucher",
            name: "Flyer and Brochure"
        },
        {
            image: "packaging",
            name: "Packaging"
        },
        {
            image: "presentation",
            name: "Presentation"
        },
        {
            image: "stationary",
            name: "Stationery"
        },
        {
            image: "social",
            name: "Social Media Posts"
        }

    ]
  return (
    <div className="branding">
        <h1 className="pl-[20px] text-xl font-bold text-peanut">Graphic Design Services</h1>
        <div className="detail-wrapper">
            {graphicDetail.map((d,i)=> <div className='graphic-service'>
                <img src={`/services/graphic-detail/${d.image}.png`}/>
                <h2 className='heading'>{d.name}</h2>
            </div>)}
        </div>

         
        </div>
  )
}

export default Grapic