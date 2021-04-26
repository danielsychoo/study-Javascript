import React from "react";
import "../scss/ContentBox.scss";

const ContentBox = ({ contentData }) => {
  const { subject, content, id, filepath, filename, refineDate } = contentData;

  return (
    <div id="CB-wrapper">
      <div id="CB-subjectWriter-box">
        <div id="CB-subject">{subject}</div>
        <div id="CB-writer">
          <p>작성자: {id}</p>
          <p>작성일: {refineDate}</p>
        </div>
      </div>
      <div id="CB-content">{content}</div>
      <div id="CB-file-box">
        {filepath ? (
          <>
            <img id="CB-uploadImage" src={filepath} alt="filename" />
            <div id="CB-filename">첨부파일: {filename}</div>
            <a id="CB-download-btn" href={filepath} download={filename}>
              다운로드
            </a>
          </>
        ) : (
          <div id="CB-nofile">첨부파일이 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default ContentBox;
