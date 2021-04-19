import React from "react";
import { Link } from "react-router-dom";
import "../scss/LoginModal.scss";

const LoginModal = () => {
  return (
    <div id="LM-wrapper">
      <div>ID</div>
      <input type="text" />
      <div>PASSWORD</div>
      <input type="password" />
      <div id="LM-btnBox">
        <Link to="#" className="LM-btn">
          로그인
        </Link>
        <Link to="/join" className="LM-btn">
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default LoginModal;
