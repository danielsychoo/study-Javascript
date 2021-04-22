import { useCallback } from "react";
import { useSwal, useFunction } from "../hooks";
import axios from "axios";
import qs from "qs";
import Cookies from "js-cookie";

const useAxios = () => {
  // hook들 꺼내기
  const {
    swal_emptyInput,
    swal_wrongPassword,
    swal_wrongEmail,
    swal_existId,
    swal_loginWrongInfo,
  } = useSwal();
  const { emailValidation } = useFunction();

  const axios_getSpecificContent = useCallback((subject_id) => {
    axios
      .post("/read/sep", qs.stringify({ subject_id }))
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const axios_handleJoin = useCallback(
    (id, password, password_confirm, name, email, history, onReset) => {
      if (!id || !password || !password_confirm || !name || !email) {
        swal_emptyInput();
      } else if (password !== password_confirm) {
        swal_wrongPassword();
      } else if (!emailValidation(email)) {
        swal_wrongEmail();
      } else {
        axios
          .post(
            "/join",
            qs.stringify({
              id: id,
              password: password,
              name: name,
              email: email,
            })
          )
          .then((res) => {
            if (res.data.error) {
              swal_existId();
            } else {
              onReset();
              history.push("/redirect");
            }
          })
          .catch((err) => console.log(err));
      }
    },
    [
      swal_emptyInput,
      swal_existId,
      swal_wrongEmail,
      swal_wrongPassword,
      emailValidation,
    ]
  );

  const axios_getContentPagination = useCallback(
    (clickedPage, setBoardContent) => {
      axios
        .post(
          "/read/pagination",
          qs.stringify({ page: clickedPage, limit: 10 })
        )
        .then((res) => {
          setBoardContent({
            content: res.data.items,
            count: res.data.total_count,
          });
        })
        .catch((err) => console.log(err));
    },
    []
  );

  const axios_handleLogin = useCallback(
    (id, password, handleUserId, handleModal, history) => {
      axios
        .post("/login", qs.stringify({ id, password }))
        .then(() => {
          handleUserId(id);
          handleModal();
          history.push("/");
        })
        .catch((err) => {
          // API 명세서와 달리 정확한 아이디 비번외에 모두 500에러
          console.log(err);
          handleModal();
          swal_loginWrongInfo();
        });
    },
    [swal_loginWrongInfo]
  );

  const axios_handleLogout = useCallback((handleUserId, history) => {
    axios
      .post("/logout")
      .then(() => {
        Cookies.remove("session", { path: "/" });
        handleUserId("");
        history.push("/");
      })
      .catch((err) => console.log(err));
  }, []);

  return {
    axios_getSpecificContent,
    axios_handleJoin,
    axios_getContentPagination,
    axios_handleLogin,
    axios_handleLogout,
  };
};

export default useAxios;
