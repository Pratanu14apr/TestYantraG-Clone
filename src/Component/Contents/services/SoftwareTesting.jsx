import React from "react";
import SERVICE from "./service.module.css";
import img1 from "./Images/t1.jpeg";
import img2 from "./Images/t2.jpeg";
import img3 from "./Images/t3.jpeg";
const SoftwareTesting = () => {
  return (
    <div>
      <img src={img1} alt="" />
      <div className={SERVICE.video}>
        <aside className={SERVICE.video1}>
          <video className={SERVICE.video3} src="" controls></video>
        </aside>
        <aside className={SERVICE.video2}>
          <img src={img2} alt="" />
        </aside>
      </div>
      <img className={SERVICE.img3} src={img3} alt="" />
    </div>
  );
};

export default SoftwareTesting;
