import React from "react";
import FOOT from "./footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Connect = () => {
  return (
    <div className={FOOT.connect}>
      <h4>Connect</h4>
      <div className={FOOT.icons}>
        <ul>
          <li>
            <a href="">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="">
              <AiOutlineTwitter />
            </a>
          </li>
          <li>
            <a href="">
              <FaInstagram />
            </a>
          </li>

          <li>
            <a href="">
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
      <div className={FOOT.contact}>
        <div>
          <span className={FOOT.hello}>
            <FaHeadphones />
          </span>
          Ph: +1 888 980 7010
        </div>
        <div>
          <span className={FOOT.hello}>
            <CiMail />
          </span>
          hello@testyantraglobal.com
        </div>
      </div>
    </div>
  );
};

export default Connect;
