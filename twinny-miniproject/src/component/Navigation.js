import React, { useState } from "react";
import { LoginModal } from "../component";
import "../scss/Navigation.scss";

const Navigation = () => {
  const [isLoginModal, setIsLoginModal] = useState(false);
  const handleLogin = () => {
    setIsLoginModal(!isLoginModal);
  };

  return (
    <>
      <div id="nav-wrapper">
        <div id="nav-logo">새로고침</div>
        <div id="nav-loginBtn" onClick={handleLogin}>
          로그인
        </div>
      </div>
      {isLoginModal ? <LoginModal /> : <></>}
    </>
  );
};

export default Navigation;
