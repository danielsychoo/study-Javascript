import React from "react";
import { useOnChange, useAxios } from "../hooks";
import "../scss/CreateContent.scss";

const CreateContent = () => {
  const { axios_createNewContent } = useAxios();
  const { state, onChange, onReset } = useOnChange({
    subject: "",
    content: "",
    file: "",
  });

  const { subject, content, file } = state;

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
        <input type="file" name="file" value={state.file} onChange={onChange} />
      </div>
      <div id="CC-submit">
        <button onClick={() => axios_createNewContent(subject, content, file)}>
          글쓰기
        </button>
      </div>
    </div>
  );
};

export default CreateContent;
