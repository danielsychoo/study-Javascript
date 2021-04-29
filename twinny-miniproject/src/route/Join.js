import React from "react";
import { useOnChange, useAxios } from "../hooks";
import { withRouter } from "react-router-dom"; // props.history.push를 사용하기 위해
import { FcCheckmark, FcCancel } from "react-icons/fc";
import "../scss/Join.scss";

const Join = ({ history }) => {
  const { axios_handleJoin } = useAxios();

  const { state, onChange, onReset } = useOnChange({
    id: "",
    password: "",
    password_confirm: "",
    name: "",
    email: "",
  });
  const { id, password, password_confirm, name, email } = state;

  return (
    <div id="JC-wrapper">
      <h1>회원가입</h1>
      <div>ID</div>
      <input
        type="text"
        placeholder="ID를 입력하세요."
        name="id"
        value={state.id}
        onChange={onChange}
      />
      <div>PASSWORD</div>
      <input
        type="password"
        placeholder="PASSWORD를 입력하세요."
        name="password"
        value={state.password}
        onChange={onChange}
      />
      <div>PASSWORD CONFIRM</div>
      <div className="JC-inputBtn-box">
        <input
          type="password"
          placeholder="PASSWORD를 한번 더 입력하세요."
          name="password_confirm"
          value={state.password_confirm}
          onChange={onChange}
        />
        {state.password.length && state.password === state.password_confirm ? (
          <FcCheckmark className="JC-icons" />
        ) : (
          <FcCancel className="JC-icons" />
        )}
      </div>
      <div>NAME</div>
      <input
        type="text"
        placeholder="이름을 입력하세요."
        name="name"
        value={state.name}
        onChange={onChange}
      />
      <div>E-MAIL</div>
      <div className="JC-inputBtn-box">
        <input
          type="email"
          placeholder="E-MAIL을 입력하세요."
          name="email"
          value={state.email}
          onChange={onChange}
        />
        <button
          onClick={() =>
            axios_handleJoin(
              id,
              password,
              password_confirm,
              name,
              email,
              history,
              onReset
            )
          }
        >
          가입하기
        </button>
      </div>
    </div>
  );
};

export default withRouter(Join);
