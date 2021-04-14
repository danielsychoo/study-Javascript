import { useState, useCallback } from "react";

const useOnChange = (initialState) => {
  const [state, setState] = useState(initialState);
  const onChange = useCallback((event) => {
    console.log(state);
    setState(event.target.value);
  }, []);

  return [state, onChange];
};

export default useOnChange;
