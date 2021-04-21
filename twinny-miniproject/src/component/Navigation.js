import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { LoginModal } from "../component";
import "../scss/Navigation.scss";
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

const Navigation = ({ userId, handleUserId, history }) => {
  const [isLoginModal, setIsLoginModal] = useState(false);
  const handleModal = () => {
    setIsLoginModal(!isLoginModal);
  };

  const handleLogout = () => {
    axios
      .post("/logout")
      .then(() => {
        Cookies.remove("session", { path: "/" });
        handleUserId("");
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  const handleCreateContent = () => {
    if (userId) {
      history.push("/createcontent");
    } else {
      Swal.fire({
        icon: "error",
        title: "로그인 하세요.",
        text: "로그인 후 글을 작성할 수 있습니다.",
      });
    }
  };

  return (
    <>
      <div id="nav-wrapper">
        <div id="nav-left-box">
          <a id="nav-logo" href="/">
            새로고침
          </a>
          <button id="nav-writeContent-btn" onClick={handleCreateContent}>
            새글쓰기
          </button>
        </div>
        {userId ? (
          <div id="nav-after-login">
            <div>{userId} 님</div>
            <div onClick={handleLogout}>로그아웃</div>
          </div>
        ) : (
          <div id="nav-loginBtn" onClick={handleModal}>
            로그인
          </div>
        )}
      </div>
      {isLoginModal ? (
        <LoginModal handleModal={handleModal} handleUserId={handleUserId} />
      ) : (
        <></>
      )}
    </>
  );
};

export default withRouter(Navigation);
