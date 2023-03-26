import React from "react";
import SUB from "./BodySub.module.css";
import { MdOutlineNavigateNext } from "react-icons/md";
import image1 from "../../assets/images/middle1.jpg";
const MiddleCard = () => {
  return (
    <div className={SUB.MCard}>
          <div className={SUB.container}>
              <div className={SUB.card}>
        <figure>
          <img src={image1} alt="" />
        </figure>
        <h1>Software Design and Development</h1>
        <p>
          We deliver IT solutions in a wide variety of verticals and elevate
          businesses to the next level.
        </p>
        <span>
          <button>READ MORE</button>
          <MdOutlineNavigateNext />
        </span>
      </div>

      <div className={SUB.card}>
        <figure>
          <img src="" alt="" />
        </figure>
        <h1>Elevate IT - IT Skills Development</h1>
        <p>
          Our customized and curated training models help organizations elevate
          their IT quotient.
        </p>
        <span>
          <button>READ MORE</button>
          <MdOutlineNavigateNext />
        </span>
      </div>
      </div>
    </div>
  );
};

export default MiddleCard;
