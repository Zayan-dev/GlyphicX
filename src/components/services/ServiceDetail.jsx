import React, { useEffect } from "react";
import ServiceDetailHeader from "./serviceDetailHeader/ServiceDetailHeader";
import { useParams } from "react-router-dom";
import ServiceDetailIntro from "./detailIntro/ServiceDetailIntro";

const ServiceDetail = () => {
  const {detail} = useParams()
  
  const serviceDetail = {
    branding : {
      heading: "Branding",
      content:"Tap into the power of a captivating and powerful brand. Increase customer awareness, recognition and loyalty with GlyphicX’s cutting-edge and highly effective online branding services. Get ready to outshine your competition and grow!",
      image:"artboard1"
    },
    visualization:{
      heading: "3D VISUALISATION",
      content: "3D is one of the most powerful ways to communicate your brand’s story, explain your product, and connect with your audience. GlyphicX’s 3D services make your message stand out.",
      image:"artboard2"
    },
    design:{
      heading: "UI DESIGN",
      content: "UI UX Design Services that convert. Well-designed interfaces that streamline the user journey, making it easier for users to achieve their goals.",
      image:"artboard4"
    },
    graphic:{
      heading: "GRAPHIC DESIGN",
      content: "Choose from a comprehensive selection of design services. From packaging design to social media content and presentations, keep the spotlight on your message.",
      image:"graphic"
    },

  }
  return (
    <div>
      <ServiceDetailHeader
        heading= {serviceDetail[detail].heading}
        content={serviceDetail[detail].content}
        image={serviceDetail[detail].image}
      />
      <ServiceDetailIntro detail={detail}/>
      

    </div>
  );
};

export default ServiceDetail;
