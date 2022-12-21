import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <div className="menu__menuItem">
    <div className="menu__menuItem-head">
      <p className="menu__menuItem-head__name p__cormorant">{title}</p>
      <div className="menu__menuItem-head__dash" />
      <p className="menu__menuItem-head__price p__cormorant">{price}</p>
    </div>
    <p className="menu__menuItem-tags p__opensans">{tags}</p>
  </div>
);

export default MenuItem;
