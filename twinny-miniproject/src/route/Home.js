import React from "react";
import { Board } from "../component";

const Home = ({
  clickedPage,
  handleClickedPage,
  clickedDevidePage,
  handlePrevFirstPage,
  handleNextLastPage,
  handlePrevDevidePage,
  handleNextDevidePage,
}) => {
  return (
    <div>
      <Board
        clickedPage={clickedPage}
        handleClickedPage={handleClickedPage}
        clickedDevidePage={clickedDevidePage}
        handlePrevFirstPage={handlePrevFirstPage}
        handleNextLastPage={handleNextLastPage}
        handlePrevDevidePage={handlePrevDevidePage}
        handleNextDevidePage={handleNextDevidePage}
      />
    </div>
  );
};

export default Home;
