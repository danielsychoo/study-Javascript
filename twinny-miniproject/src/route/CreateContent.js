import React from "react";
import { withRouter } from "react-router-dom";
import { useOnChange, useAxios, useFileChange } from "../hooks";
import "../scss/CreateContent.scss";

const CreateContent = ({ history }) => {
  const { axios_createNewContent } = useAxios();
  const { state, onChange } = useOnChange({
    subject: "",
    content: "",
  });
  const { subject, content } = state;

  const { file, onFileChange } = useFileChange(null);

  return (
    <div id="CC-wrapper">
      <div id="CC-subject">
        <div>제목</div>
        <input
          type="text"
          placeholder="제목을 입력하세요."
          name="subject"
          value={state.subject}
          onChange={onChange}
        />
      </div>
      <textarea
        id="CC-content"
        placeholder="내용을 입력하세요."
        name="content"
        value={state.content}
        onChange={onChange}
      />
      <div id="CC-file-box">
        {file ? (
          <img id="CC-file-img" src={file.previewURL} alt={file.file.name} />
        ) : (
          <></>
        )}
        <input type="file" id="fileInput" onChange={onFileChange} />
      </div>
      <div id="CC-submit">
        <button
          onClick={() =>
            axios_createNewContent(subject, content, file, history)
          }
        >
          글쓰기
        </button>
      </div>
    </div>
  );
};

export default withRouter(CreateContent);
