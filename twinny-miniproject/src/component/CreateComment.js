import React from "react";
import { useParams } from "react-router-dom";
import { useOnChange, useAxios } from "../hooks";
import "../scss/CreateComment.scss";

const CreateComment = ({ setContentComments, clickedPage }) => {
  const { axios_postNewComment } = useAxios();
  const { state, onChange, onReset } = useOnChange("");
  const subject_id = useParams().id;

  return (
    <div id="create-comment-wrapper">
      <textarea
        id="comment-textbox"
        placeholder="댓글을 입력하세요."
        name="comment"
        onChange={onChange}
      />
      <button
        onClick={() =>
          axios_postNewComment(
            state.comment,
            subject_id,
            clickedPage,
            setContentComments,
            onReset
          )
        }
      >
        댓글 작성
      </button>
    </div>
  );
};

export default CreateComment;
