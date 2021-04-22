import { useCallback } from "react";
import Swal from "sweetalert2";

const useSwal = () => {
  const swal_emptyInput = useCallback(() => {
    Swal.fire({
      icon: "error",
      title: "빈칸이 존재합니다.",
      text: "모든 칸을 채워주세요.",
    });
  }, []);

  const swal_wrongPassword = useCallback(() => {
    Swal.fire({
      icon: "error",
      title: "비밀번호가 동일하지 않습니다.",
      text: "비밀번호를 확인하세요.",
    });
  }, []);

  const swal_wrongEmail = useCallback(() => {
    Swal.fire({
      icon: "error",
      title: "잘못된 이메일 형식입니다.",
      text: "이메일을 확인하세요.",
    });
  }, []);

  const swal_existId = useCallback(() => {
    Swal.fire({
      icon: "error",
      title: "이미 존재하는 ID 입니다.",
      text: "다른 ID를 선택하세요.",
    });
  }, []);

  const swal_loginToRead = useCallback(() => {
    Swal.fire({
      icon: "error",
      title: "로그인 하세요.",
      text: "로그인 후 글을 열람할 수 있습니다.",
    });
  }, []);

  const swal_loginWrongInfo = useCallback(() => {
    Swal.fire({
      icon: "error",
      title: "정보가 틀립니다.",
      text: "아이디와 비밀번호를 확인하세요.",
    });
  }, []);

  const swal_loginToWrite = useCallback(() => {
    Swal.fire({
      icon: "error",
      title: "로그인 하세요.",
      text: "로그인 후 글을 작성할 수 있습니다.",
    });
  }, []);

  return {
    swal_emptyInput,
    swal_wrongPassword,
    swal_wrongEmail,
    swal_existId,
    swal_loginToRead,
    swal_loginWrongInfo,
    swal_loginToWrite,
  };
};

export default useSwal;
