import React from "react";
import { Board } from "../component";

const Home = ({ clickedPage, handleClickedPage }) => {
  return (
    <div>
      <Board clickedPage={clickedPage} handleClickedPage={handleClickedPage} />
    </div>
  );
};

export default Home;
