import { useState, useCallback } from "react";

const useOnChange = (initialState) => {
  const [state, setState] = useState(initialState);
  const onChange = useCallback(
    (event) => {
      const { value, name } = event.target;
      setState({
        ...state,
        [name]: value,
      });
    },
    [state]
  );

  return [state, onChange];
};

export default useOnChange;
