import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useOnChange } from "../hooks";
import "../scss/LoginModal.scss";
import Cookies from "js-cookie";
import axios from "axios";
import qs from "qs";

const LoginModal = () => {
  const { state, onChange } = useOnChange({
    id: "",
    password: "",
  });
  const { id, password } = state;

  const [cookie, setCookie] = useState(null);

  const handleLogin = () => {
    axios
      .post("http://192.168.0.218:8080/login", qs.stringify({ id, password }))
      .then((res) => {
        setCookie({
          cookie: Cookies.get(res),
        });

        console.log(cookie);
      })
      .catch((err) => console.log(err));
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
