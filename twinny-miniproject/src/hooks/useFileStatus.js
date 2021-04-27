import { useState, useCallback } from "react";

const useFileStatus = () => {
  const [file_status, setFile_status] = useState({
    isChange: 0,
    wantClear: false,
  });

  const handleFileStatus = useCallback(() => {
    setFile_status({
      isChange: 1,
      wantClear: false,
    });
  }, []);

  const handleClearFileTrue = useCallback(() => {
    setFile_status({
      ...file_status,
      wantClear: true,
    });
  }, [file_status]);

  return { file_status, handleFileStatus, handleClearFileTrue };
};

export default useFileStatus;
