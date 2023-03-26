import React from "react";
import SUB from "./BodySub.module.css";
import { BsCheckCircle } from "react-icons/bs";

const LeftCard = () => {
  return (
    <div className={SUB.LCard}>
      <p class={SUB.Heading}>Our Services & Industries</p>
      <p class={SUB.Para}>
        We provide industry-specific services and solutions expertise to Global
        brands across a range of verticals.
      </p>
      <p class={SUB.Para2}>
        Some of the industries that we have worked with are :
      </p>
      <div className={SUB.List}>
        <ul>
          <li>
            <a href="">
              <span>
                <BsCheckCircle />
              </span>
              Banking and Finance
            </a>
          </li>
          <li>
            <a href="">
              <span>
                <BsCheckCircle />
              </span>
              Insurance
            </a>
          </li>
          <li>
            <a href="">
              <span>
                <BsCheckCircle />
              </span>
              Retail and e-commerce
            </a>
          </li>
          <li>
            <a href="">
              <span>
                <BsCheckCircle />
              </span>
              Health
            </a>
          </li>
          <li>
            <a href="">
              <span>
                <BsCheckCircle />
              </span>
              Information, Communication, Technology (ICT)
            </a>
          </li>
          <li>
            <a href="">
              <span>
                <BsCheckCircle />
              </span>
              Education
            </a>
          </li>
          <li>
            <a href="">
              <span>
                <BsCheckCircle />
              </span>
              Travel
            </a>
          </li>
          <li>
            <a href="">
              <span>
                <BsCheckCircle />
              </span>
              Media and Entertainment
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftCard;
