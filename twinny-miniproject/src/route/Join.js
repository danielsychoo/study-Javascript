import React from "react";
import { Navigation } from "../component";
import { useOnChange } from "../hooks";
import { withRouter } from "react-router-dom"; // props.history.push를 사용하기 위해
import { FcCheckmark, FcCancel } from "react-icons/fc";
import { emailValidation } from "../function";
import Swal from "sweetalert2";
import axios from "axios";
import qs from "qs";
import "../scss/Join.scss";

const Join = ({ history }) => {
  const { state, onChange, onReset } = useOnChange({
    id: "",
    password: "",
    password_confirm: "",
    name: "",
    email: "",
  });

  const handleJoin = () => {
    const { id, password, password_confirm, name, email } = state;
    if (!id || !password || !password_confirm || !name || !email) {
      Swal.fire({
        icon: "error",
        title: "빈칸이 존재합니다.",
        text: "모든 칸을 채워주세요.",
      });
    } else if (password !== password_confirm) {
      Swal.fire({
        icon: "error",
        title: "비밀번호가 동일하지 않습니다.",
        text: "비밀번호를 확인하세요.",
      });
    } else if (!emailValidation(email)) {
      Swal.fire({
        icon: "error",
        title: "잘못된 이메일 형식입니다.",
        text: "이메일을 확인하세요.",
      });
    } else {
      axios
        .post(
          "http://192.168.0.218:8080/join",
          qs.stringify({
            id: id,
            password: password,
            name: name,
            email: email,
          })
        )
        .then((res) => {
          if (res.data.error) {
            Swal.fire({
              icon: "error",
              title: "이미 존재하는 ID 입니다.",
              text: "다른 ID를 선택하세요.",
            });
          } else {
            onReset();
            history.push("/redirect");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <Navigation />
      <div id="JC-wrapper">
        <h2>회원가입</h2>
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
          <button onClick={handleJoin}>회원가입</button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Join);
