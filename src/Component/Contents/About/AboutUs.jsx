import React from "react";
import img1 from "./Images/x1.png";
import img2 from "./Images/x2.png";
import img3 from "./Images/x3.png";
import img4 from "./Images/x41.png";
import ABOUT from "./about.module.css";
const AboutUs = () => {
  return (
    <div className={ABOUT.parent}>
      <div className={ABOUT.about}>
        <img className={ABOUT.img1} src={img1} alt="" />
        <img className={ABOUT.img2} src={img2} alt="" />
        <img className={ABOUT.img3} src={img3} alt="" />
        <img className={ABOUT.img4} src={img4} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
