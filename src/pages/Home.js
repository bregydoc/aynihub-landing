import React, { Component } from "react";
import Toolbar from "../components/Toolbar";
import Home from "../components/Home";
import Partners from "../components/Partners";
import WhatsAynihub from "../components/WhatsAynihub";
import HowWorks from "../components/HowWorks";
import Opportunity from "../components/Opportunity";
// import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

class HomePage extends Component {
  state = {};

  render() {
    return (
      <div>
        <Toolbar />
        <Home id="home" />
        <Partners id="partners" />
        <WhatsAynihub id="howweare" />
        <HowWorks id="howworks" />
        <Opportunity id="opportunity" />
        {/*<Subscribe id="subscribe" />*/}
        <Footer id="footer" />
      </div>
    );
  }
}

export default HomePage;
