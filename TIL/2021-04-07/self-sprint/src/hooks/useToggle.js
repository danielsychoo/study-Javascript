import { useState, useCallback } from "react";

const useToggle = (initialState) => {
  const [isOn, setIsOn] = useState(initialState);

  const toggleClicked = useCallback(() => {
    setIsOn(!isOn);
  }, [isOn]);

  return [isOn, toggleClicked];
};

export default useToggle;
