import { useState, useCallback } from "react";

const useClickedPage = () => {
  const [clickedPage, setClickedPage] = useState(1);

  const handleClickedPage = useCallback((page) => {
    setClickedPage(page);
  }, []);

  const [commentClickedPage, setCommentClickedPage] = useState(1);

  const handleCommentClickedPage = useCallback((page) => {
    setCommentClickedPage(page);
  }, []);

  return {
    clickedPage,
    handleClickedPage,
    commentClickedPage,
    handleCommentClickedPage,
  };
};

export default useClickedPage;
