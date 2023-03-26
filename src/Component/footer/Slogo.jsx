import React from "react";
import FOOT from "./footer.module.css";
import Img from "../../assets/images/ty_global.png";
const Slogo = () => {
  return (
    <div className={FOOT.container}>
      <div className={FOOT.upper}>
        <img src={Img} alt="ty" />
      </div>

      <div className={FOOT.lower}></div>
    </div>
  );
};

export default Slogo;
