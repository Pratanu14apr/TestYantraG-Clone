import React from "react";
import img1 from "./Images/mm1.png";
import img2 from "./Images/mm2.jpeg";
import SERVICE from "./service.module.css";

const Consulting = () => {
  return (
    <div>
      <img src={img1} alt="" />
      <img className={SERVICE.chobi} src={img2} alt="" />
    </div>
  );
};

export default Consulting;
