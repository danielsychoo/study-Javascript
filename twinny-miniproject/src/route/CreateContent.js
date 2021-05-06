import React, { useRef } from "react";
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
  const subjectInputDOM = useRef();
  const contentInputDOM = useRef();

  return (
    <div id="CC-wrapper">
      <div id="CC-left-wrapper">
        <div id="CC-subject">
          <div>제목</div>
          <input
            type="text"
            placeholder="제목을 입력하세요."
            name="subject"
            value={state.subject}
            onChange={onChange}
            ref={subjectInputDOM}
          />
        </div>
        <textarea
          id="CC-content"
          placeholder="내용을 입력하세요."
          name="content"
          value={state.content}
          onChange={onChange}
          ref={contentInputDOM}
        />
      </div>
      <div id="CC-right-wrapper">
        <div id="CC-file-box">
          {file ? (
            <img
              id="CC-file-img"
              src={file.previewURL}
              alt={file && file.file.name}
            />
          ) : (
            <p>선택된 파일이 없습니다.</p>
          )}
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={onFileChange}
          />
        </div>
        <div id="CC-submit">
          <label id="fileInput-button" htmlFor="fileInput">
            사진 업로드
          </label>
          <button
            onClick={() =>
              axios_createNewContent(
                subject,
                content,
                file,
                history,
                subjectInputDOM.current,
                contentInputDOM.current
              )
            }
          >
            글쓰기
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CreateContent);
