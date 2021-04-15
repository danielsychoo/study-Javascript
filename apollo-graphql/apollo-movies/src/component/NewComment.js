import React from "react";
import { useOnChange } from "../hooks";
import "../scss/NewComment.scss";

import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../apollo/mutation";

const NewComment = ({ refetch }) => {
  const [inputs, setInputs] = useOnChange({
    message: "",
    nickname: "",
  });

  const [addComment] = useMutation(ADD_COMMENT);
  const handleSubmit = () => {
    addComment({ variables: inputs })
      .then(() => refetch())
      // .then(() => window.location.reload())
      .then()
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="NC-Wrapper">
      <div id="NC-input-comment">
        <input
          id="commentInput"
          type="text"
          maxLength="25"
          name="message"
          value={inputs.message}
          placeholder="댓글을 입력해주세요"
          onChange={setInputs}
        />
      </div>
      <div id="NC-input-nickname">
        <div id="NC-input-nickname-left">
          <span>Nickname</span>
          <input
            type="text"
            name="nickname"
            value={inputs.nickname}
            onChange={setInputs}
          />
        </div>
        <div id="NC-input-nickname-right">
          <div>{inputs.message.length} / 25</div>
          <button onClick={handleSubmit}>등록</button>
        </div>
      </div>
    </div>
  );
};

export default NewComment;
