import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <a className="p__opensans" href="#home">
          Home
        </a>
      </li>
      <li>
        <a className="p__opensans" href="#about">
          About
        </a>
      </li>
      <li>
        <a className="p__opensans" href="#menu">
          Menu
        </a>
      </li>
      <li>
        <a className="p__opensans" href="#awards">
          Awards
        </a>
      </li>
      <li>
        <a className="p__opensans" href="#contact">
          Contact
        </a>
      </li>
    </>
  );
  const [togglMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navBar">
      <div className="app__navBar-logo">
        <img src={images.gericht} alt="restaurant logo" />
      </div>
      <ul className="app__navBar-links">{menuItems}</ul>
      <div className="app__navBar-login">
        <a href="#login" className="p__opensans">
          Log in / Register
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>
      <div className="app__navBar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          style={{cursor: "pointer"}}
          onClick={() => setToggleMenu(true)}
        />

        {togglMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navBar-smallscreen_links">{menuItems}</ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
