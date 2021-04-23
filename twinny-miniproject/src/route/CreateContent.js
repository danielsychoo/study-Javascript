import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useOnChange, useAxios } from "../hooks";
import "../scss/CreateContent.scss";

const CreateContent = ({ history }) => {
  const { axios_createNewContent } = useAxios();
  const { state, onChange } = useOnChange({
    subject: "",
    content: "",
    filename: "",
  });
  const { subject, content, filename } = state;

  const [file, setFile] = useState(null);

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
        <input
          type="file"
          id="fileInput"
          name="filename"
          value={state.filename}
          onChange={onChange}
        />
      </div>
      <div id="CC-submit">
        <button
          onClick={() =>
            axios_createNewContent(
              subject,
              content,
              filename,
              file,
              setFile,
              history
            )
          }
        >
          글쓰기
        </button>
      </div>
    </div>
  );
};

export default withRouter(CreateContent);
