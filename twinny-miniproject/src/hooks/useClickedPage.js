import { useState, useCallback } from "react";

const useClickedPage = () => {
  const [clickedPage, setClickedPage] = useState(1);

  const handleClickedPage = useCallback((page) => {
    setClickedPage(page);
  }, []);

  return { clickedPage, handleClickedPage };
};

export default useClickedPage;
