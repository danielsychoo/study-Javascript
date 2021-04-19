import React from "react";
import { Navigation } from "../component";
import { useOnChange } from "../hooks";
import { withRouter } from "react-router-dom"; // props.history.push를 사용하기 위해
import { FcCheckmark, FcCancel } from "react-icons/fc";
import "../scss/Join.scss";

const Join = (props) => {
  const { state, onChange, onReset } = useOnChange({
    id: "",
    password: "",
    password_confirm: "",
    name: "",
    email: "",
  });

  const testFunc = () => {
    console.log(state);
    onReset();
    props.history.push("/redirect"); // Link나 Redirect 형식이 아닌 함수에서 보내기 위해 사용
  };

  return (
    <div>
      <Navigation />
      <div id="JC-wrapper">
        <h2>회원가입</h2>
        <div>ID</div>
        <div className="JC-inputBtn-box">
          <input
            type="text"
            placeholder="ID를 입력하세요."
            name="id"
            value={state.id}
            onChange={onChange}
          />
          <button>중복확인</button>
        </div>
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
          {state.password.length &&
          state.password === state.password_confirm ? (
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
          <button onClick={testFunc}>회원가입</button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Join);
