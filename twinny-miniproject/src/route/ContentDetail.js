import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../scss/ContentDetail.scss";
import axios from "axios";
import qs from "qs";

const ContentDetail = () => {
  const params = useParams();

  useEffect(() => {
    axios
      .post("/read/sep", qs.stringify({ subject_id: params.id }))
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [params.id]);

  return <div id="CC-wrapper">ContentDetail Component</div>;
};

export default ContentDetail;
