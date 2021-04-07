import React from "react";
import "./Ui.scss";

import Nav from "./Nav/Nav";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

const Ui = () => {
  return (
    <div className="Ui">
      <Nav />
      <Content />
      <Footer />
    </div>
  );
};

export default Ui;
