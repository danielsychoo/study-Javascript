import { useState, useCallback } from "react";
import axios from "axios";

const useFileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = useCallback((event) => {
    setSelectedFile(event.target.files);
  }, []);

  const handleFileUpload = useCallback(() => {
    const formData = new FormData();

    for (let i = 0; i < selectedFile.length; i++) {
      formData.append("userFile", selectedFile[i], selectedFile[i]);
    }

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    axios
      .post("api/uploadfile", formData, config)
      .then((res) => {
        console.log(selectedFile);
        console.log(res);
      })
      .catch((err) => {
        console.log(selectedFile);
        console.log(err);
      });
  }, [selectedFile]);

  return {
    selectedFile,
    handleFileChange,
    handleFileUpload,
  };
};

export default useFileUpload;
