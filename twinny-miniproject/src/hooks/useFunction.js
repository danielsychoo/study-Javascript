import { useCallback } from "react";
import { useSwal } from "../hooks";

const useFunction = () => {
  const { swal_loginToWrite, swal_youCantModifyContent } = useSwal();

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
    const boardPageLength = Math.ceil(count / 4);
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

  const handleGoBack = useCallback((history) => history.goBack(), []);

  const goToHandleCreateContent = useCallback(
    (userId, history) => {
      if (userId) history.push("/createcontent");
      else swal_loginToWrite();
    },
    [swal_loginToWrite]
  );

  const checkUserIsWriter = (writer, user, callback) => {
    if (writer !== user) {
      swal_youCantModifyContent();
    } else {
      callback();
    }
  };

  const handleModifyOnAndSetCommentId = (
    setComment_id,
    comment_id,
    handleModal
  ) => {
    setComment_id(comment_id);
    handleModal();
  };

  return {
    emailValidation,
    countBoardPageLength,
    countCommentPageLength,
    goToJoin,
    handleGoBack,
    goToHandleCreateContent,
    checkUserIsWriter,
    handleModifyOnAndSetCommentId,
  };
};

export default useFunction;
