import React from "react";
import "../scss/ModifyContent.scss";
import { withRouter } from "react-router-dom";
import { useOnChange } from "../hooks";

const ModifyContent = ({
  subject_id,
  subject,
  content,
  filepath,
  filename,
}) => {
  // 로컬에서 상태로 관리 (변화를 위해)
  const { state, onChange } = useOnChange({
    subject_id: subject_id,
    subject: subject,
    content: content,
    filepath: filepath,
    filename: filename,
  });

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
      <div id="MC-file-box">
        <div id="MC-file-box-left">
          <p>첨부파일</p>
          <img src={filepath} alt={filename} />
        </div>
        <div id="MC-file-box-right">
          <p>첨부파일 수정</p>
          <div></div>
          {/* <input type="file" id="fileInput" onChange={onFileChange} /> */}
        </div>
      </div>
      <div id="CC-submit">
        <button onClick={() => {}}>수정하기</button>
      </div>
    </div>
  );
};

export default withRouter(ModifyContent);
