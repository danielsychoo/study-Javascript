import React from "react";
import { BiError } from "react-icons/bi";
import "../scss/NotFound.scss";

const NotFound = () => {
  return (
    <div id="not-found">
      <BiError id="errorIcons" />
      <p>잘못된 주소이거나, 비공개 또는 삭제된 글입니다.</p>
    </div>
  );
};

export default NotFound;
