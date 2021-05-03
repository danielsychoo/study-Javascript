import React from "react";
import { withRouter } from "react-router-dom";
import { useOnChange, useAxios } from "../hooks";
import { useFunction } from "../hooks";
import "../scss/LoginModal.scss";

const LoginModal = ({ handleModal, handleUserId, history }) => {
  const { axios_handleLogin } = useAxios();
  const { goToJoin, handleEnterKey } = useFunction();

  const { state, onChange } = useOnChange({
    id: "",
    password: "",
  });
  const { id, password } = state;

  return (
    <div id="LM-wrapper">
      <div>ID</div>
      <input
        type="text"
        name="id"
        value={state.id}
        onChange={onChange}
        onKeyUp={() => {
          // onKeyPress를 할 경우 모바일에서 지원 안됨
          if (handleEnterKey())
            axios_handleLogin(id, password, handleUserId, handleModal, history);
        }}
      />
      <div>PASSWORD</div>
      <input
        type="password"
        name="password"
        value={state.password}
        onChange={onChange}
        onKeyUp={() => {
          if (handleEnterKey())
            axios_handleLogin(id, password, handleUserId, handleModal, history);
        }}
      />
      <div id="LM-btnBox">
        <div
          className="LM-btn"
          onClick={() =>
            axios_handleLogin(id, password, handleUserId, handleModal, history)
          }
        >
          로그인
        </div>
        <div className="LM-btn" onClick={() => goToJoin(handleModal, history)}>
          회원가입
        </div>
      </div>
    </div>
  );
};

export default withRouter(LoginModal);
