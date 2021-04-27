import React, { useState, useEffect } from "react";
import { useParams, withRouter } from "react-router-dom";
import { ContentBox, ModifyContent, CommentPart } from "../component";
import { useAxios, useFunction, useModal } from "../hooks";
import "../scss/ContentDetail.scss";

const ContentDetail = ({ userId, history }) => {
  const { axios_getSpecificContent, axios_deleteContent } = useAxios();
  const { checkUserIsWriter } = useFunction();
  const { isModalOn, handleModal } = useModal();
  const params = useParams();

  const [contentData, setContentData] = useState({
    subject: "",
    content: "",
    id: "",
    subject_id: 0,
    filepath: "",
    filename: "",
    refineDate: "",
  });
  const { id, subject_id, subject, content, filepath, filename } = contentData;

  useEffect(() => {
    axios_getSpecificContent(params.id, setContentData);
  }, [axios_getSpecificContent, params.id]);

  return (
    <>
      {isModalOn ? (
        <ModifyContent
          subject_id={subject_id}
          subject={subject}
          content={content}
          filepath={filepath}
          filename={filename}
        />
      ) : (
        <div id="CD-wrapper">
          <ContentBox contentData={contentData} />
          <div id="CD-button-box">
            <button onClick={() => checkUserIsWriter(id, userId, handleModal)}>
              게시글 수정
            </button>
            <button
              onClick={() =>
                axios_deleteContent(userId, contentData.id, params.id, history)
              }
            >
              게시글 삭제
            </button>
          </div>
          <CommentPart />
        </div>
      )}
    </>
  );
};

export default withRouter(ContentDetail);
