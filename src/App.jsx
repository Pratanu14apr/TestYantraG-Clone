import React from "react";
import TopNav from "./Component/socialLink/TopNav";
import Navbar from "./Component/navbar/Navbar";
import Subscribe from "./Component/subscribe/Subscribe";
import Footer from "./Component/footer/Footer";
import Policy from "./Component/policyFooter/Policy";
import { BrowserRouter as Router } from "react-router-dom";
import TyssRoutes from "./routes/TyssRoutes";

const App = () => {
  return (
    <section>
      <Router>
        <TopNav />
        <Navbar />
        <TyssRoutes />
        <Subscribe />
        <Footer />
        <Policy />
      </Router>
    </section>
  );
};

export default App;
