import React from "react";
import "../scss/ModifyContent.scss";
import { withRouter } from "react-router-dom";
import { useOnChange, useFileChange, useFileStatus } from "../hooks";

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

  const { file, onFileChange } = useFileChange(filepath);
  const { file_status, handleFileStatus, handleClearFile } = useFileStatus();

  console.log(file);
  console.log(file_status);

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
          {(file_status.isChange === 0 &&
            filepath === "data:image/png;base64,undefined") ||
          file_status.wantClear ? (
            <p>첨부파일이 없습니다.</p>
          ) : file_status === 1 ? (
            <img src={file.previewURL} alt={filename} />
          ) : (
            <img src={filepath} alt={filename} />
          )}
          <button onClick={handleClearFile}>파일 삭제</button>
        </div>
        <div id="MC-file-box-right">
          <p>첨부파일 수정</p>
          <input
            type="file"
            id="fileInput"
            onChange={onFileChange}
            onClick={handleFileStatus}
          />
        </div>
      </div>
      <div id="CC-submit">
        <button onClick={() => {}}>수정하기</button>
      </div>
    </div>
  );
};

export default withRouter(ModifyContent);
