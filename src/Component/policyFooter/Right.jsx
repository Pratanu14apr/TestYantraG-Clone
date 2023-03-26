import React from "react";
import PolicyC from "./policy.module.css";

const Right = () => {
  return (
    <div className={PolicyC.right}>
      <div>
        <a href="#">Privacy Policy</a>
      </div>
      <div>
        <a href="">Cookie Policy</a>
      </div>
    </div>
  );
};

export default Right;
