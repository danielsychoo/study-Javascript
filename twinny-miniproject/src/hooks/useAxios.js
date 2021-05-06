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
    swal_youCantModifyContent,
    swal_commentIsBlank,
  } = useSwal();
  const { emailValidation } = useFunction();

  const axios_getSpecificContent = useCallback(
    async (subject_id, setContentData, setIsLoading) => {
      await setIsLoading(true);
      await axios
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
          let decodeStr = `data:image/png;base64,${file}`;

          // 게시물이 존재하지 않으면
          if (res.data.result !== "2") {
            const refineDate = date.slice(0, 10);
            setContentData({
              subject,
              content,
              id,
              subject_id,
              filepath: decodeStr,
              filename,
              refineDate,
              isContentExist: true,
            });
          } else {
            const refineDate = date.slice(0, 10);
            setContentData({
              subject,
              content,
              id,
              subject_id,
              filepath: decodeStr,
              filename,
              refineDate,
              isContentExist: false,
            });
          }
        })
        .catch((err) => console.log(err));
      await setIsLoading(false);
    },
    []
  );

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
    async (clickedPage, setBoardContent, setIsLoading) => {
      await setIsLoading(true);
      await axios
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
      await setIsLoading(false);
    },
    []
  );

  const axios_handleLogin = useCallback(
    (id, password, handleModal, history) => {
      axios
        .post("/login", qs.stringify({ id, password }))
        .then(() => {
          handleModal();
          history.go(0); // 새로고침
        })
        .catch((err) => {
          // API 명세서와 달리 정확한 아이디 비번외에 모두 500에러
          console.log(err);
          swal_loginWrongInfo();
        });
    },
    [swal_loginWrongInfo]
  );

  const axios_handleLogout = useCallback((history) => {
    axios
      .post("/logout")
      .then(() => {
        Cookies.remove("session", { path: "/" });
        history.push("/"); // 처음으로 이동
      })
      .then(() => window.location.reload()) // localState도 초기화
      .catch((err) => console.log(err));
  }, []);

  const axios_getCommentPagination = useCallback(
    async (
      subject_id,
      commentClickedPage,
      setContentComments,
      setIsLoading
    ) => {
      await setIsLoading(true);
      await axios
        .post(
          "/comment/pagination",
          qs.stringify({ subject_id, page: commentClickedPage, limit: 3 })
        )
        .then((res) => {
          setContentComments({
            comments: res.data.comments,
            count: res.data.total_count,
          });
        })
        .catch((err) => console.log(err));
      await setIsLoading(false);
    },
    []
  );

  const axios_createNewContent = useCallback(
    (subject, content, file, history, subjectInputDOM, contentInputDOM) => {
      const formData = new FormData();

      formData.append("subject", subject);
      formData.append("content", content);

      if (file) {
        formData.append("file", file.file);
      } else {
        formData.append("file", {}); // 없으면 빈객체로
      }

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      if (!subject || !subject.replace(/^\s+|\s+$/g, "")) {
        swal_subjectIsBlank(subjectInputDOM);
        subjectInputDOM.value = "";
      } else if (!content || !content.replace(/^\s+|\s+$/g, "")) {
        swal_contentIsBlank(contentInputDOM);
        contentInputDOM.value = "";
      } else {
        axios
          .post("/board/write", formData, config)
          .then(() => history.push("/"))
          .catch((err) => console.log(err));
      }
    },
    [swal_subjectIsBlank, swal_contentIsBlank]
  );

  const axios_deleteContent = useCallback(
    (writer, subject_id, history) => {
      axios
        .post("/board/delete", qs.stringify({ writer, subject_id }))
        .then((res) => {
          if (res.data.result === "2") swal_youAreNotWriter();
          else history.push("/");
        })
        .catch((err) => console.log(err));
    },
    [swal_youAreNotWriter]
  );

  const axios_getModifyContent = useCallback(
    (writer, subject_id, handleModal) => {
      axios
        .post("/board/modify_bef", qs.stringify({ writer, subject_id }))
        .then((res) => {
          if (res.data.result === "2") swal_youCantModifyContent();
          else handleModal();
        })
        .catch((err) => console.log(err));
    },
    [swal_youCantModifyContent]
  );

  const axios_postModifyContent = useCallback(
    async (
      subject_id,
      subject,
      content,
      file_status,
      file,
      setIsLoading,
      history,
      subjectInputDOM,
      contentInputDOM
    ) => {
      const formData = new FormData();

      formData.append("subject_id", subject_id);
      formData.append("subject", subject);
      formData.append("content", content);
      formData.append("file_status", file_status.isChange);

      if (file_status.wantClear) {
        formData.append("file", {});
      } else {
        formData.append("file", file.file);
      }

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      if (!subject || !subject.replace(/^\s+|\s+$/g, "")) {
        swal_subjectIsBlank(subjectInputDOM);
        subjectInputDOM.value = "";
      } else if (!content || !content.replace(/^\s+|\s+$/g, "")) {
        swal_contentIsBlank(contentInputDOM);
        contentInputDOM.value = "";
      } else {
        // loading은 이후 277줄에서 새로고침하면서 다시 false로 됨
        await setIsLoading(true);
        await axios
          .post("/board/modify_aft", formData, config)
          .then(() => history.go(0))
          .catch((err) => console.log(err));
      }
    },
    [swal_subjectIsBlank, swal_contentIsBlank]
  );

  const axios_postNewComment = useCallback(
    async (
      comment,
      subject_id,
      commentClickedPage,
      setContentComments,
      onReset,
      commentInputDOM,
      setIsLoading
    ) => {
      // 정규표현식으로 앞 뒤 공백 제거 후에도 존재하지 않는지 확인
      if (!comment || !comment.replace(/^\s+|\s+$/g, "")) {
        swal_commentIsBlank(commentInputDOM);
        commentInputDOM.value = "";
      } else {
        await axios
          .post("/comment", qs.stringify({ subject_id, comment }))
          .then(() => {
            onReset(); // (241줄을 위해)state를 비우는 것
            commentInputDOM.value = ""; // 보여지는 value 비우는 것
            axios_getCommentPagination(
              subject_id,
              commentClickedPage,
              setContentComments,
              setIsLoading
            );
          })
          .catch((err) => console.log(err));
      }
    },
    [swal_commentIsBlank, axios_getCommentPagination]
  );

  const axios_deleteComment = useCallback(
    (
      comment_id,
      subject_id,
      commentClickedPage,
      setContentComments,
      setIsLoading
    ) => {
      axios
        .post("/comment/delete", qs.stringify({ comment_id }))
        .then((res) => {
          if (res.data.result === "2") swal_youAreNotWriter();
          else
            axios_getCommentPagination(
              subject_id,
              commentClickedPage,
              setContentComments,
              setIsLoading
            );
        })
        .catch((err) => console.log(err));
    },
    [swal_youAreNotWriter, axios_getCommentPagination]
  );

  const axios_checkModifyComment = useCallback(
    (comment_id, handleModal) => {
      axios
        .post("/comment/modify_bef", qs.stringify({ comment_id }))
        .then((res) => {
          if (res.data.result === "2") swal_youCantModifyContent();
          else handleModal();
        });
    },
    [swal_youCantModifyContent]
  );

  const axios_getModifyComment = useCallback(
    (comment_id, setModifyCommentData) => {
      axios
        .post("/comment/modify_bef", qs.stringify({ comment_id }))
        .then((res) => {
          if (res.data.result === "2") swal_youCantModifyContent();
          else setModifyCommentData(res.data[0]);
        })
        .catch((err) => console.log(err));
    },
    [swal_youCantModifyContent]
  );

  const axios_postModifyComment = useCallback(
    (
      comment_id,
      comment,
      onReset,
      subject_id,
      commentClickedPage,
      setContentComments,
      handleModal,
      commentInputDOM,
      setIsLoading
    ) => {
      if (!comment || !comment.replace(/^\s+|\s+$/g, "")) {
        swal_commentIsBlank(commentInputDOM);
        commentInputDOM.value = "";
      } else {
        axios
          .post("/comment/modify_aft", qs.stringify({ comment_id, comment }))
          .then(() => {
            onReset();
            commentInputDOM.value = "";
            handleModal();
            axios_getCommentPagination(
              subject_id,
              commentClickedPage,
              setContentComments,
              setIsLoading
            );
          })
          .catch((err) => console.log(err));
      }
    },
    [swal_commentIsBlank, axios_getCommentPagination]
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
    axios_getModifyContent,
    axios_postModifyContent,
    axios_postNewComment,
    axios_deleteComment,
    axios_checkModifyComment,
    axios_getModifyComment,
    axios_postModifyComment,
  };
};

export default useAxios;
