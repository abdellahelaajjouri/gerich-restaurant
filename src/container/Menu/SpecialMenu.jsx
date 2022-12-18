import React from "react";
import "./SpecialMenu.css";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "./../../components/index.js";

const SpecialMenu = () => (
  <div className="app__specialMenu section__padding ">
    <div className="app__specialMenu-header">
      <SubHeading title="Menu That Fits Your Palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu flex__center">
      <div className="app__specialMenu-menu__wineBear">
        <h1 className="headtext__cormorant">Wine & Beer</h1>
        {data.wines.map((wine, index) => {
          return (
            <MenuItem title={wine.title} tags={wine.tags} price={wine.price} />
          );
        })}
      </div>
      <div className="app__specialMenu-image">
        <img src={images.menu} alt="cocktail img" />
      </div>

      <div className="app__specialMenu-menu__cocktails">
        <h1 className="headtext__cormorant">Cocktails</h1>
        {data.cocktails.map((cocktail, index) => {
          return (
            <MenuItem
              title={cocktail.title}
              tags={cocktail.tags}
              price={cocktail.price}
            />
          );
        })}
      </div>
    </div>
  </div>
);

export default SpecialMenu;
