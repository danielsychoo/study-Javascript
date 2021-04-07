import React from "react";
import "./Nav.scss";

import { IconContext } from "react-icons";
import { FcFilm, FcTrademark } from "react-icons/fc";
import { BiSearch } from "react-icons/bi";

const Nav = () => {
  return (
    <IconContext.Provider value={{ size: "2.2em" }}>
      <div className="Nav">
        <div className="navLogo">
          <FcFilm />
          MovieInfo
        </div>
        <div className="navRightBar">
          <BiSearch />
          <FcTrademark />
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Nav;
