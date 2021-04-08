import React from "react";
import "../scss/SearchModal.scss";

import { IconContext } from "react-icons";
import { IoIosSearch } from "react-icons/io";
import { IoChevronBackOutline } from "react-icons/io5";

const SearchModal = ({ setSearchOn }) => {
  return (
    <IconContext.Provider value={{ size: "2.2em", color: "#808080" }}>
      <div className="SearchModal">
        <IoChevronBackOutline className="SearchBackBtn" onClick={setSearchOn} />
        <div className="SearchMidBox">
          <input className="SearchInput" />
        </div>
        <IoIosSearch className="SearchOnBtn" />
      </div>
      <div className="SM-grayBg"></div>
    </IconContext.Provider>
  );
};

export default SearchModal;
