import React from "react";
import SKILL from "./skill.module.css";
import img1 from "./Images/s1.png"
import img2 from "./Images/s2.png"
import img3 from "./Images/s5.jpeg";
const Skillrary = () => {
  return (
    <div className={SKILL.mainContent}>
      <img src={img1} alt="" />
      <div className={SKILL.video}>
        <aside className={SKILL.video1}>
          <video className={SKILL.video3} src="" controls></video>
        </aside>
        <aside className={SKILL.video2}>
          <img src={img3} alt="" />
        </aside>
      </div>
      <img className={SKILL.img2} src={img2} alt="" />
    </div>
  );
};

export default Skillrary;
