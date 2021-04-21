import React from "react";
import { Link } from "react-router-dom";
import { useOnChange } from "../hooks";
import "../scss/LoginModal.scss";
import axios from "axios";
import qs from "qs";
import Swal from "sweetalert2";

const LoginModal = ({ handleModal, handleUserId }) => {
  const { state, onChange } = useOnChange({
    id: "",
    password: "",
  });
  const { id, password } = state;

  const handleLogin = () => {
    axios
      .post("/login", qs.stringify({ id, password }))
      .then((res) => {
        console.log(res);

        handleUserId(id);
        handleModal();
      })
      .catch((err) => {
        // API 명세서와 달리 정확한 아이디 비번외에 모두 500에러
        console.log(err);
        handleModal();
        Swal.fire({
          icon: "error",
          title: "정보가 틀립니다.",
          text: "아이디와 비밀번호를 확인하세요.",
        });
      });
  };

  return (
    <div id="LM-wrapper">
      <div>ID</div>
      <input type="text" name="id" value={state.id} onChange={onChange} />
      <div>PASSWORD</div>
      <input
        type="password"
        name="password"
        value={state.password}
        onChange={onChange}
      />
      <div id="LM-btnBox">
        <div className="LM-btn" onClick={handleLogin}>
          로그인
        </div>
        <Link to="/join" className="LM-btn">
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default LoginModal;
