import React from "react";
import TOPNAV from "./social.module.css";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Icon = () => {
  return (
    <div className={TOPNAV.Icon}>
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
  );
};

export default Icon;
