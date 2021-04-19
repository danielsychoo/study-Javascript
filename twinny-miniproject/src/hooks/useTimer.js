import { useState } from "react";

const useTimer = () => {
  const [count, setCount] = useState(5);

  const timer = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      return;
    }
  };

  const counter = () => setTimeout(timer, 1000);

  return { count, counter };
};

export default useTimer;
