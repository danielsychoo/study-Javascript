import React from "react";
import { withRouter } from "react-router-dom";
import "../scss/ModifyContent.scss";
import { useOnChange, useFileChange, useFileStatus, useAxios } from "../hooks";

const ModifyContent = ({
  subject_id,
  subject,
  content,
  filepath,
  filename,
  history,
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

  const {
    file_status,
    handleFileStatus,
    handleClearFileTrue,
  } = useFileStatus();
  const { axios_postModifyContent } = useAxios();

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
          <p>미리보기</p>
          {(file_status.isChange === 0 &&
            filepath === "data:image/png;base64,undefined") ||
          file_status.wantClear ? (
            <p>첨부파일이 없습니다.</p>
          ) : file_status.isChange === 1 ? (
            <img src={file.previewURL} alt={filename} />
          ) : (
            <img src={filepath} alt={filename} />
          )}
          <button onClick={handleClearFileTrue}>파일 삭제</button>
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
        <button
          onClick={() => {
            axios_postModifyContent(
              state.subject_id,
              state.subject,
              state.content,
              file_status,
              file,
              history
            );
          }}
        >
          수정하기
        </button>
      </div>
    </div>
  );
};

export default withRouter(ModifyContent);
