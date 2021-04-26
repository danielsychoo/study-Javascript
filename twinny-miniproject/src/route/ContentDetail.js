import React, { useState, useEffect } from "react";
import { useParams, withRouter } from "react-router-dom";
import { ContentBox, Comments } from "../component";
import { useAxios } from "../hooks";
import "../scss/ContentDetail.scss";

const ContentDetail = ({ userId, history }) => {
  const { axios_getSpecificContent, axios_deleteContent } = useAxios();
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

  useEffect(() => {
    axios_getSpecificContent(params.id, setContentData);
  }, [axios_getSpecificContent, params.id]);

  return (
    <div id="CD-wrapper">
      <ContentBox contentData={contentData} />
      <div id="CD-button-box">
        <button>게시글 수정</button>
        <button
          onClick={() =>
            axios_deleteContent(userId, contentData.id, params.id, history)
          }
        >
          게시글 삭제
        </button>
      </div>
      <Comments />
    </div>
  );
};

export default withRouter(ContentDetail);
