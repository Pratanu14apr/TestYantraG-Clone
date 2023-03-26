import React from "react";
import SUB from "./subscribe.module.css";
const Input = () => {
  return (
    <div className={SUB.input}>
      <input type="text" placeholder="Your email" />
      <button>Subscribe</button>
    </div>
  );
};

export default Input;
