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
    swal_subjectIsBlank,
    swal_contentIsBlank,
    swal_youAreNotWriter,
  } = useSwal();
  const { emailValidation } = useFunction();

  const axios_getSpecificContent = useCallback((subject_id, setContentData) => {
    axios
      .post("/read/sep", qs.stringify({ subject_id }))
      .then((res) => {
        const {
          subject,
          content,
          id,
          subject_id,
          file,
          filename,
          date,
        } = res.data;
        const refineDate = date.slice(0, 10);
        const filepath = file;
        setContentData({
          subject,
          content,
          id,
          subject_id,
          filepath,
          filename,
          refineDate,
        });
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

  const axios_getCommentPagination = useCallback(
    (subject_id, clickedPage, setContentComments) => {
      axios
        .post(
          "/comment/pagination",
          qs.stringify({ subject_id, page: clickedPage, limit: 5 })
        )
        .then((res) => {
          setContentComments({
            comments: res.data.comments,
            count: res.data.total_count,
          });
        })
        .catch((err) => console.log(err));
    },
    []
  );

  const axios_createNewContent = useCallback(
    (subject, content, filename, file, setFile, history) => {
      // 파일은 아래 두줄로 따로 받아옴 (filelist때문)
      const fileInput = document.querySelector("#fileInput");
      setFile(fileInput.files[0]);

      const refineFilename = filename.split("\\")[2]; // 파일이름 추출 및 정제

      const formData = new FormData();

      formData.append("subject", subject);
      formData.append("content", content);

      if (filename) {
        const blob = new Blob([file], { type: "image" });
        formData.append("file", blob, refineFilename);
      } else {
        formData.append("file", {}); // 없으면 빈객체로
      }

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      if (!subject) {
        swal_subjectIsBlank();
      }
      if (!content) {
        swal_contentIsBlank();
      }

      axios
        .post("/board/write", formData, config)
        .then(() => history.push("/"))
        .catch((err) => console.log(err));
    },
    [swal_subjectIsBlank, swal_contentIsBlank]
  );

  const axios_deleteContent = useCallback(
    (writer, content_id, subject_id, history) => {
      // 유저가 쓴 글인지 확인로직
      if (writer === content_id) {
        axios
          .post("/board/delete", qs.stringify({ writer, subject_id }))
          .then(() => history.push("/"))
          .catch((err) => console.log(err));
      } else {
        swal_youAreNotWriter();
      }
    },
    [swal_youAreNotWriter]
  );

  return {
    axios_getSpecificContent,
    axios_handleJoin,
    axios_getContentPagination,
    axios_handleLogin,
    axios_handleLogout,
    axios_getCommentPagination,
    axios_createNewContent,
    axios_deleteContent,
  };
};

export default useAxios;
