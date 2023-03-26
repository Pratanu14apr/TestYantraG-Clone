import React from "react";
import Icon from "./Icon";
import Mail from "./Mail";

import TOPNAV from "./social.module.css";

const TopNav = () => {
  return (
    <section className={TOPNAV.topNav}>
      <article>
        <Mail />
        <Icon />
      </article>
    </section>
  );
};

export default TopNav;
