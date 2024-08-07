import React from "react";

const DirectorsTreatment = ({ handleDisplay }) => {
  const uhu = {
    image1: "/Portfolio/TVC PRODUCTION/TVC PRODUCTION edited-01.jpg",
    image2: "/Portfolio/TVC PRODUCTION/TVC PRODUCTION edited-02.jpg",
    image3: "/Portfolio/TVC PRODUCTION/TVC PRODUCTION edited-03.jpg",
    image4: "/Portfolio/TVC PRODUCTION/TVC PRODUCTION edited-04.jpg",
    image5: "/Portfolio/TVC PRODUCTION/TVC PRODUCTION edited-05.jpg",
    image6: "/Portfolio/TVC PRODUCTION/TVC PRODUCTION edited-06.jpg",
    image7: "/Portfolio/TVC PRODUCTION/TVC PRODUCTION edited-07.jpg",
    image8: "/Portfolio/TVC PRODUCTION/TVC PRODUCTION edited-08.jpg",
    image9: "/Portfolio/TVC PRODUCTION/TVC PRODUCTION edited-09.jpg",
    image10: "/Portfolio/TVC PRODUCTION/TVC PRODUCTION edited-10.jpg",
    image11: "/Portfolio/TVC PRODUCTION/TVC PRODUCTION edited-11.jpg",
    image12: "/Portfolio/TVC PRODUCTION/TVC PRODUCTION edited-12.jpg",
    image13: "/Portfolio/TVC PRODUCTION/TVC PRODUCTION edited-13.jpg",
    image14: "/Portfolio/TVC PRODUCTION/TVC PRODUCTION edited-14.jpg",
    image15: "/Portfolio/TVC PRODUCTION/TVC PRODUCTION edited-15.jpg",
  };

  return (
    <div className="project1">
      <div className="content left">
        <h1 className="mainHeading" onClick={() => handleDisplay("project5")}>
          Director’s Treatment
        </h1>
        <h2 className="subHeading my-3" style={{ fontSize: "20px" }}>
          Television Commercial
        </h2>
        <p className="para">
          The ad highlights the universal application and strength of a UHU
          adhesive tube and was designed to leverage the hype around the release
          of House of the Dragon by nostalgia baiting a popular scene
          from Game of Thrones.
        </p>
        <p className="mt-3">
          {" "}
          This pitch document is the first step in the pre-production and
          essential to outline the perspective, vision, and story ideas for the
          job and explain how the TV commercial will be brought to life
        </p>
      </div>
      <div className="image right">
        <img
          onClick={() => handleDisplay("project5")}
          src={uhu.image1}
          alt="project5"
        />
      </div>
    </div>
  );
};

export default DirectorsTreatment;
