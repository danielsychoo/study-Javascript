import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ContentBox, Comments } from "../component";
import { useAxios } from "../hooks";
import "../scss/ContentDetail.scss";

const ContentDetail = ({ userId }) => {
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
        <div>게시글 수정</div>
        <div onClick={() => axios_deleteContent(userId, params.id)}>
          게시글 삭제
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default ContentDetail;
