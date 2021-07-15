import { useState } from 'react';

const useInput = initialState => {
  const [state, setState] = useState(initialState);

  const onChange = event => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const onReset = () => setState(initialState);

  return { state, setState, onChange, onReset };
};

export default useInput;
