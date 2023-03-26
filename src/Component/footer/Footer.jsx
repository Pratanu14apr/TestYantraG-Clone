import React from "react";
import Connect from "./Connect";
import HomeService from "./HomeService";
import Industries from "./Industries";
import Slogo from "./Slogo";
import FOOT from "./footer.module.css";

const Footer = () => {
  return (
    <section className={FOOT.footer}>
      <article>
        <Slogo />
        <HomeService />
        <Industries />
        <Connect />
      </article>
    </section>
  );
};

export default Footer;
