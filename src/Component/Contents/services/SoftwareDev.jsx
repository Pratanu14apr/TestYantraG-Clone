import React from "react";
import SERVICE from "./service.module.css";
import img1 from "./Images/d1.png";
import img2 from "./Images/d2.png";
import img3 from "./Images/d3.png";
import img4 from "./Images/text.png";

const SoftwareDev = () => {
  return (
    <div className={SERVICE.outer}>
      <img src={img1} alt="" />
      <div className={SERVICE.video}>
        <aside className={SERVICE.video1}>
          <video className={SERVICE.video3} src="" controls></video>
        </aside>
        <aside className={SERVICE.video2}>
          <img src={img4} alt="" />
        </aside>
      </div>
      <img src={img2} alt="" />
      <img src={img3} alt="" />
    </div>
  );
};

export default SoftwareDev;
