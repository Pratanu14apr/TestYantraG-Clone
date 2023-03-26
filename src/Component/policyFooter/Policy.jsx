import React from "react";
import Left from "./Left";
import PolicyC from "./policy.module.css";
import Right from "./Right";
const Policy = () => {
  return (
    <footer className={PolicyC.mainPolicy}>
      <article>
        <Left />
        <Right />
      </article>
    </footer>
  );
};

export default Policy;
