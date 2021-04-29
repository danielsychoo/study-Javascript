import React from "react";
import { withRouter } from "react-router-dom";
import { LoginModal } from "../component";
import { useAxios, useFunction } from "../hooks";
import { useModal } from "../hooks";
import "../scss/Navigation.scss";

const Navigation = ({ userId, handleUserId, history }) => {
  const { isModalOn, handleModal } = useModal();
  const { axios_handleLogout } = useAxios();
  const { handleGoBack, goToHandleCreateContent } = useFunction();

  return (
    <>
      <div id="nav-wrapper">
        <div id="nav-left-box">
          <div>Miniproject_Board</div>
          <button id="nav-logo" onClick={() => handleGoBack(history)}>
            뒤로가기
          </button>
          <button
            id="nav-writeContent-btn"
            onClick={() => goToHandleCreateContent(userId, history)}
          >
            새글쓰기
          </button>
        </div>
        {userId ? (
          <div id="nav-after-login">
            <div>{userId} 님</div>
            <button onClick={() => axios_handleLogout(handleUserId, history)}>
              로그아웃
            </button>
          </div>
        ) : (
          <button id="nav-loginBtn" onClick={handleModal}>
            로그인
          </button>
        )}
      </div>
      {isModalOn ? (
        <LoginModal handleModal={handleModal} handleUserId={handleUserId} />
      ) : (
        <></>
      )}
    </>
  );
};

export default withRouter(Navigation);
