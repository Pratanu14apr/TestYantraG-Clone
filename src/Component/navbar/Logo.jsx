import React from "react";
import NAVBAR from "./nav.module.css";
import logo from "../../assets/images/tylogo.png";

const Logo = () => {
  return (
    <aside className={NAVBAR.logo}>
      <img src={logo} alt="pratanu" />
    </aside>
  );
};

export default Logo;
