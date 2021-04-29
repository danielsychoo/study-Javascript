import React, { useState, useEffect } from "react";
import { useAxios } from "../hooks";

const ModifyComment = ({ comment_id }) => {
  const { axios_getModifyComment } = useAxios();
  const { modifyCommentData, setModifyCommentData } = useState({
    subject_id: 0,
    id: "",
    comment: "",
    date: "",
    comment_id: 0,
  });

  useEffect(() => {
    axios_getModifyComment(comment_id, setModifyCommentData);
  }, [axios_getModifyComment, comment_id, setModifyCommentData]);

  return <div>ModifyComment Component</div>;
};

export default ModifyComment;
