import React from "react";

import "./Gallery.css";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import {
  BsArrowLeftShort,
  BsArrowRightShort,
  BsInstagram,
} from "react-icons/bs";

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  const imgs = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
  ];
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat
          Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.
        </p>
        <button
          type="button"
          style={{ marginTop: "1rem" }}
          className="custom__button"
        >
          View More
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images__container" ref={scrollRef}>
          {imgs.map((image, index) => {
            return (
              <div
                className="app__gallery-images__card flex__center"
                key={`gallery__images-${index + 1}`}
              >
                <img src={image} alt="gallery img" />
                <BsInstagram className="gallery__images-icon" />
              </div>
            );
          })}
        </div>
        <div className="app__gallery-images__arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
