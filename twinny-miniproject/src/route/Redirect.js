import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useTimer } from "../hooks";
import "../scss/Redirect.scss";

const Redirect = ({ history }) => {
  const { count, redirectToHome } = useTimer();

  useEffect(() => {
    redirectToHome(history);
  }, [history, redirectToHome]);

  return (
    <div>
      <div id="RD-text">
        <p>회원가입이 완료되었습니다.</p>
        <p>{count}초 후 게시판으로 이동됩니다.</p>
      </div>
    </div>
  );
};

export default withRouter(Redirect);
