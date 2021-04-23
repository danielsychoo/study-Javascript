import React from "react";
import "../scss/ContentBox.scss";
// import FileSaver from "file-saver";

const ContentBox = ({ contentData }) => {
  const {
    subject,
    content,
    id,
    // subject_id,
    filepath,
    filename,
    refineDate,
  } = contentData;

  // let data = new Blob([new ArrayBuffer(filepath)], {
  //   type: "image/png",
  // });
  // let blobUrl = URL.createObjectURL(data); // 차자따아아아아아아
  // const url = blobUrl.slice(5);
  // console.log(url);

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
            <div id="CB-filename">첨부파일: {filename}</div>
            {/* <img id="CB-file" src={blobUrl} /> */}
          </>
        ) : (
          <div id="CB-nofile">첨부파일이 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default ContentBox;
