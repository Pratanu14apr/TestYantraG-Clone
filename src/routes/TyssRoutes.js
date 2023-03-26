import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./../Component/Home/Home";
import SoftwareDev from "./../Component/Contents/services/SoftwareDev";
import SoftwareTesting from "./../Component/Contents/services/SoftwareTesting";
import ITtraining from "./../Component/Contents/services/ITtraining";
import Consulting from "./../Component/Contents/services/Consulting";
import Skillrary from "./../Component/Contents/products/Skillrary";
import Banking from "./../Component/Contents/Industries/Banking";
import Healthcare from "./../Component/Contents/Industries/Healthcare";
import Insurance from "./../Component/Contents/Industries/Insurance";
import Media from "./../Component/Contents/Industries/Media";
import Retail from "./../Component/Contents/Industries/Retail";
import Technology from "./../Component/Contents/Industries/Technology";
import Travel from "../Component/Contents/Industries/Travel";
import AboutUs from "./../Component/Contents/About/AboutUs";
import Articles from "./../Component/Contents/About/Articles";
import Careers from "./../Component/Contents/About/Careers";
import Contact from "./../Component/Contents/About/Contact";
import Purpose from "./../Component/Contents/About/Purpose";
import Education from "./../Component/Contents/Industries/Education";

let TyssRoutes = () => {
  let userRoute = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/softwaredevelopment", element: <SoftwareDev /> },
    { path: "/softwaretesting", element: <SoftwareTesting /> },
    { path: "/ittraining", element: <ITtraining /> },
    { path: "/consulting", element: <Consulting /> },
    { path: "/skillrary", element: <Skillrary /> },
    { path: "/banking", element: <Banking /> },
    { path: "/healthcare", element: <Healthcare /> },
    { path: "/insurance", element: <Insurance /> },
    { path: "/media", element: <Media /> },
    { path: "/education", element: <Education /> },

    { path: "/retail", element: <Retail /> },
    { path: "/technology", element: <Technology /> },
    { path: "/travel", element: <Travel /> },
    { path: "/aboutus", element: <AboutUs /> },
    { path: "/articles", element: <Articles /> },
    { path: "/careers", element: <Careers /> },
    { path: "/contact", element: <Contact /> },
    { path: "/purpose", element: <Purpose /> },
  ]);
  return userRoute;
};

export default TyssRoutes;
