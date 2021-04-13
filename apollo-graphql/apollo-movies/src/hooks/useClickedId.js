import { useState, useCallback } from "react";

const useClickedId = (initialState) => {
  const [clickedId, setClickedId] = useState(initialState);
  const handleClickedId = useCallback((id) => {
    setClickedId(id);
  }, []);

  return [clickedId, handleClickedId];
};

export default useClickedId;
