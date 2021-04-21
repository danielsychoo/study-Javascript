import { useState, useCallback } from "react";

const useUserId = () => {
  const [userId, setUserId] = useState("");

  const handleUserId = useCallback((id) => {
    setUserId(id);
  }, []);

  return { userId, handleUserId };
};

export default useUserId;
