import React from "react";
import NAVBAR from "./nav.module.css";
import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <section className={NAVBAR.NavBar}>
      <article>
        <Logo />
        <Menu />
      </article>
    </section>
  );
};

export default Navbar;
