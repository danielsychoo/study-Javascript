import React from "react";
import { useOnChange } from "../hooks";
import "../scss/NewComment.scss";

const NewComment = () => {
  // const [inputValue, setInputValue] = useState("");
  // const handleChange = (e) => {
  //   setInputValue(e.target.value);
  // };

  const [inputValue, setInputValue] = useOnChange("");

  // console.log(inputValue);

  return (
    <div id="NC-Wrapper">
      <div id="NC-input-comment">
        <input
          type="text"
          placeholder="댓글을 입력해주세요"
          onChange={setInputValue}
        />
      </div>
      <div id="NC-input-nickname">
        <div id="NC-input-nickname-left">
          <span>NickName</span>
          <input type="text" />
        </div>
        <div id="NC-input-nickname-right">10 / 25</div>
      </div>
    </div>
  );
};

export default NewComment;
