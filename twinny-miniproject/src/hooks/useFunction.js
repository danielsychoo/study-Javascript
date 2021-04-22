import { useCallback } from "react";
import { useSwal } from "../hooks";

const useFunction = () => {
  const { swal_loginToWrite } = useSwal();

  const emailValidation = useCallback((newEmail) => {
    let emailExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (emailExp.test(newEmail)) return true;
    else return false;
  }, []);

  const countPageLength = useCallback((count) => {
    const boardPageLength = Math.ceil(count / 10);
    let boardPages = [];
    for (let i = 1; i <= boardPageLength; i++) {
      boardPages.push(i);
    }

    return boardPages;
  }, []);

  const goToJoin = useCallback((handleModal, history) => {
    handleModal();
    history.push("/join");
  }, []);

  const handleRefresh = useCallback((history) => history.push("/"), []);

  const goToHandleCreateContent = useCallback(
    (userId, history) => {
      if (userId) history.push("/createcontent");
      else swal_loginToWrite();
    },
    [swal_loginToWrite]
  );

  return {
    emailValidation,
    countPageLength,
    goToJoin,
    handleRefresh,
    goToHandleCreateContent,
  };
};

export default useFunction;
