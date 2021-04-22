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

  const onReset = useCallback(() => setState(initialState), [initialState]);

  return { state, onChange, onReset };
};

export default useOnChange;
