import { useState } from 'react';

const useInput = () => {
  const [text, setText] = useState('');

  const onChange = event => {
    setText(event.target.value);
  };

  const onReset = () => {
    setText('');
  };

  return { text, onChange, onReset };
};

export default useInput;
