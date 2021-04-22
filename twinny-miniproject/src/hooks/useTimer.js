import { useState, useCallback } from "react";

const useTimer = () => {
  const [count, setCount] = useState(5);

  const timer = useCallback(() => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      return;
    }
  }, [count]);

  const counter = useCallback(() => setTimeout(timer, 1000), [timer]);

  const redirectToHome = useCallback(
    (history) => {
      counter();
      if (count === 0) {
        history.push("/");
      }
    },
    [count, counter]
  );

  return { count, counter, redirectToHome };
};

export default useTimer;
