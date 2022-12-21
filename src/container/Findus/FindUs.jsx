import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
const FindUs = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
          Find Us
        </h1>

        <div className="app__wrapper-content">
          <p className="p__opensans" style={{ marginBottom: "2rem" }}>
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
          </p>
          <p
            className="p__cormorant"
            style={{ color: "#DCCA87", margin: "1rem 0" }}
          >
            Opening Hours
          </p>
          <p className="p__opensans">Mon - Fri: 10:00 Am - 02:00 Am</p>
          <p className="p__opensans">Sat - Sun: 10:00 Am - 03:00 Am</p>
          <button
            type="button"
            className="custom__button"
            style={{ margin: "2rem 0" }}
          >
            Visit Us
          </button>
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={images.findus} alt="findUs img" />
      </div>
    </div>
  );
};

export default FindUs;
