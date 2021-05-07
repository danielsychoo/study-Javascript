import { useState, useCallback } from "react";

const useClickedPage = () => {
  // content page
  const [clickedPage, setClickedPage] = useState(1);
  const handleClickedPage = useCallback((page) => {
    setClickedPage(page);
  }, []);

  // comment page
  const [commentClickedPage, setCommentClickedPage] = useState(1);
  const handleCommentClickedPage = useCallback((page) => {
    setCommentClickedPage(page);
    // console.log("working");
    // console.log(page);
  }, []);

  // content Long Page
  const [clickedDevidePage, setClickedDevidePage] = useState(0);
  const handlePrevFirstPage = useCallback(() => {
    setClickedDevidePage(0);
  }, []);
  const handleNextLastPage = useCallback((max) => {
    setClickedDevidePage(max);
  }, []);
  const handlePrevDevidePage = useCallback(() => {
    if (clickedDevidePage > 0) {
      setClickedDevidePage(clickedDevidePage - 1);
    } else {
      return false;
    }
  }, [clickedDevidePage]);
  const handleNextDevidePage = useCallback(
    (max) => {
      if (clickedDevidePage < max) {
        setClickedDevidePage(clickedDevidePage + 1);
      } else {
        return false;
      }
    },
    [clickedDevidePage]
  );

  return {
    clickedPage,
    handleClickedPage,
    commentClickedPage,
    handleCommentClickedPage,
    clickedDevidePage,
    handlePrevFirstPage,
    handleNextLastPage,
    handlePrevDevidePage,
    handleNextDevidePage,
  };
};

export default useClickedPage;
