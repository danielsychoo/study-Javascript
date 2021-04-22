import { useState, useCallback } from "react";

const useModal = () => {
  const [isModalOn, setIsModalOn] = useState(false);
  const handleModal = useCallback(() => {
    setIsModalOn(!isModalOn);
  }, [isModalOn]);

  return { isModalOn, handleModal };
};

export default useModal;
