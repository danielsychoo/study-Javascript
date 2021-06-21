import { useState } from 'react';

const useInput = () => {
  const [text, setText] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return { text, onChange };
};

export default useInput;
