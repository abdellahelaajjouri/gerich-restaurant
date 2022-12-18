import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <div className="menu__menuItem">
    <div className="menu__menuItem-head">
      <p className="menu__menuItem-head__name p__cormorant">{title}</p>
      <div className="menu__menuItem-head__dash"/>
      <p className="menu__menuItem-head__price p__cormorant">{price}</p>
    </div>
    <div className="menu__menuItem-tags">
      <p className="p__opensans">{tags}</p>
    </div>
  </div>
);

export default MenuItem;
