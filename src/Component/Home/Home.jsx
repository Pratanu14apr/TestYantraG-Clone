import React from "react";
import BodySub from "./BodySub/BodySub";
import Body from "./mainBody/Body";

import img2 from "./Images/home2.jpeg";
import imgx from "./Images/homex.jpeg";
import img3 from "./Images/home3.jpeg";
import img4 from "./Images/home4.jpeg";

const Home = () => {
  return (
    <div>
      <Body />
      <BodySub />
      <img src={img2} alt="" />
      <img src={imgx} alt="" />
      <img src={img3} alt="" />
      <img src={img4} alt="" />
    </div>
  );
};

export default Home;
