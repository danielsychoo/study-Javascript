import { useState } from 'react';

const useToggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return { isOn, handleToggle, setIsOn };
};

export default useToggle;
