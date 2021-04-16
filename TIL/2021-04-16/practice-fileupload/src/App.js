import React, { useState } from "react";
import axios from "axios";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files);
  };

  const handleFileUpload = () => {
    const formData = new FormData();

    for (let i = 0; i < selectedFile.length; i++) {
      formData.append("myfile", selectedFile[i], selectedFile[i].name);
    }

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    console.log(selectedFile);

    axios.post("api/uploadfile", formData, config);
  };

  const fileData = () => {
    if (selectedFile) {
      return (
        <div>
          <h2>File Details: {selectedFile.type}</h2>
          <p>File Name: {selectedFile.name}</p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  return (
    <div className="App">
      <h1>File Upload Using React Test Page</h1>
      <div>
        <input type="file" onChange={handleFileChange} multiple />
        <button onClick={handleFileUpload}>업로드</button>
      </div>
      {fileData()}
    </div>
  );
}

export default App;
