import React from "react";
import NAVBAR from "./nav.module.css";

import { RxMagnifyingGlass } from "react-icons/rx";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className={NAVBAR.menu}>
      <ul>
        <li className={NAVBAR.home}>
          <Link to="/" className={NAVBAR.anchor}>
            Home
          </Link>
        </li>
        <li className={NAVBAR.service}>
          <a href="" className={NAVBAR.anchor}>
            Services
          </a>
        </li>
        <div className={NAVBAR.drop1}>
          <ul className={NAVBAR.dropx}>
            <li>
              <Link to="/softwaredevelopment">Software Development</Link>
            </li>
            <li>
              <Link to="/softwaretesting">Software Testing</Link>
            </li>
            <li>
              <Link to="/ittraining">Elevate-IT training</Link>
            </li>
            <li>
              <Link to="/consulting">IT Consulting & Managed Services</Link>
            </li>
          </ul>
        </div>
        <li className={NAVBAR.product}>
          <a href="" className={NAVBAR.anchor}>
            Products
          </a>
          <div className={NAVBAR.drop2}>
            <Link to="/skillrary">SkillRary</Link>
          </div>
        </li>
        <li className={NAVBAR.industries}>
          <a href="" className={NAVBAR.anchor}>
            Industries
          </a>
          <div className={NAVBAR.drop3}>
            <ul className={NAVBAR.dropy}>
              <li>
                <Link to="/banking">Banking & Finance</Link>
              </li>
              <li>
                <Link to="/insurance">Insurance</Link>
              </li>
              <li>
                <Link to="/healthcare">Healthcare</Link>
              </li>
              <li>
                <Link to="/retail">Reatil & e-commerce</Link>
              </li>
              <li>
                <Link to="/technology">Technology & Communications</Link>
              </li>
              <li>
                <Link to="/education">Education</Link>
              </li>
              <li>
                <Link to="/travel">Travel</Link>
              </li>
              <li>
                <Link to="/media">Media & Entertainment</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="" className={NAVBAR.anchor}>
            Blogs
          </a>
        </li>
        <li className={NAVBAR.about}>
          <a href="" className={NAVBAR.anchor}>
            About
          </a>
        </li>
        <div className={NAVBAR.drop4}>
          <ul className={NAVBAR.dropz}>
            <li>
              <Link to="/aboutus">About us</Link>
            </li>
            <li>
              <Link to="/purpose">Our Purpose & Mission</Link>
            </li>
            <li>
              <Link to="/articles">Articles</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <li>
          <a href="">
            <RxMagnifyingGlass />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
