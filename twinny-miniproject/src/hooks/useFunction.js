import { useCallback } from "react";
import { useSwal } from "../hooks";
import Cookies from "js-cookie";

const currentCookie = Cookies.get("session");

const useFunction = () => {
  const { swal_loginToWrite, swal_loginToRead } = useSwal();

  const emailValidation = useCallback((newEmail) => {
    let emailExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (emailExp.test(newEmail)) return true;
    else return false;
  }, []);

  const countBoardPageLength = useCallback((count) => {
    const boardPageLength = Math.ceil(count / 10);
    let boardPages = [];
    for (let i = 1; i <= boardPageLength; i++) {
      boardPages.push(i);
    }

    return boardPages;
  }, []);

  const countCommentPageLength = useCallback((count) => {
    const boardPageLength = Math.ceil(count / 3);
    let commentPages = [];
    for (let i = 1; i <= boardPageLength; i++) {
      commentPages.push(i);
    }

    return commentPages;
  }, []);

  const goToJoin = useCallback((handleModal, history) => {
    handleModal();
    history.push("/join");
  }, []);

  const goToHandleCreateContent = useCallback(
    (history) => {
      if (currentCookie) history.push("/createcontent");
      else swal_loginToWrite();
    },
    [swal_loginToWrite]
  );

  const goToContentDetail = useCallback(
    (subject_id, history) => {
      const currentCookie = Cookies.get("session");
      if (currentCookie) history.push(`/content/${subject_id}`);
      else swal_loginToRead();
    },
    [swal_loginToRead]
  );

  const handleModifyOnAndSetCommentId = useCallback(
    (setComment_id, comment_id, handleModal) => {
      setComment_id(comment_id);
      handleModal();
    },
    []
  );

  const handleEnterKey = useCallback(() => {
    // axios 자체를 parameter로 넣을 시 error 발생
    if (window.event.keyCode === 13) {
      return true;
    } else {
      return false;
    }
  }, []);

  return {
    emailValidation,
    countBoardPageLength,
    countCommentPageLength,
    goToJoin,
    goToHandleCreateContent,
    goToContentDetail,
    handleModifyOnAndSetCommentId,
    handleEnterKey,
  };
};

export default useFunction;
