import React from "react";
import FOOT from "./footer.module.css";

const HomeService = () => {
  return (
    <div className={FOOT.mainContainer}>
      <div className={FOOT.Home}>
        <h4>Home</h4>
        <ul>
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">Work with us</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Case Studies</a>
          </li>
        </ul>
      </div>
      <div className={FOOT.Services}>
        <h4>Services</h4>
        <ul>
          <li>
            <a href="">Software Development</a>
          </li>
          <li>
            <a href="">Software Testing</a>
          </li>
          <li>
            <a href="">Elevate – IT training services</a>
          </li>
          <li>
            <a href="">IT consulting</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeService;
