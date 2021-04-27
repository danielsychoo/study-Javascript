import { useState, useCallback } from "react";

const useFileChange = (initialState) => {
  const [file, setFile] = useState(initialState);

  const onFileChange = useCallback(
    (event) => {
      let reader = new FileReader();
      let newFile = event.target.files[0];
      reader.onloadend = () => {
        setFile({
          file: newFile,
          previewURL: reader.result,
        });
      };
      if (file) reader.readAsDataURL(newFile);
    },
    [file]
  );

  return { file, onFileChange };
};

export default useFileChange;
