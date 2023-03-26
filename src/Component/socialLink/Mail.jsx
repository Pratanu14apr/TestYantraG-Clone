import React from "react";
import TOPNAV from "./social.module.css";
import { BsEnvelopeOpen } from "react-icons/bs";
const Mail = () => {
  return (
    <div className={TOPNAV.mail}>
      <div className={TOPNAV.env}>
        <BsEnvelopeOpen />
      </div>
      <div className={TOPNAV.mail1}>
        <a href="">hello@testyantraglobal.com</a>
      </div>
    </div>
  );
};

export default Mail;
