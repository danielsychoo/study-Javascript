import React from "react";
import { withRouter } from "react-router-dom";
import { LoginModal } from "../component";
import { useAxios, useFunction } from "../hooks";
import { useModal } from "../hooks";
import Cookies from "js-cookie";
import "../scss/Navigation.scss";

const Navigation = ({ history }) => {
  const { isModalOn, handleModal } = useModal();
  const { axios_handleLogout } = useAxios();
  const { goToHandleCreateContent, goToHome } = useFunction();

  const currentCookie = Cookies.get("session");

  return (
    <>
      <div id="nav-wrapper">
        <div id="nav-left-box">
          <button id="nav-homeBtn" onClick={() => goToHome(history)}>
            Miniproject_Board
          </button>
        </div>
        {currentCookie ? (
          <div id="nav-after-login">
            <button
              id="nav-writeContent-btn"
              onClick={() => goToHandleCreateContent(history)}
            >
              새글쓰기
            </button>
            <button onClick={() => axios_handleLogout(history)}>
              로그아웃
            </button>
          </div>
        ) : (
          <button id="nav-loginBtn" onClick={handleModal}>
            로그인
          </button>
        )}
      </div>
      {isModalOn ? <LoginModal handleModal={handleModal} /> : <></>}
    </>
  );
};

export default withRouter(Navigation);
