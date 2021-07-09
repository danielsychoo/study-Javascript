import { useState } from 'react';

const useInput = (initialState) => {
  const [description, setDescription] = useState(initialState);

  const onChange = (e) => {
    const { value } = e.target;
    setDescription({ ...description, value });
  };

  const onReset = () => setDescription(initialState);

  return { description, setDescription, onChange, onReset };
};

export default useInput;
