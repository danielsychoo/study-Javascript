import React from "react";
import { useFileUpload } from "./hooks";

function App() {
  const { selectedFile, handleFileChange, handleFileUpload } = useFileUpload();

  const fileData = () => {
    if (selectedFile) {
      return (
        <div>
          <h2>File Details: {selectedFile[0].type}</h2>
          <p>File Name: {selectedFile[0].name}</p>
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
