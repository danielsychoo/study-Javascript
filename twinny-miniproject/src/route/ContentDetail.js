import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAxios } from "../hooks";
import "../scss/ContentDetail.scss";

const ContentDetail = () => {
  const { axios_getSpecificContent } = useAxios();
  const params = useParams();

  useEffect(() => {
    axios_getSpecificContent(params.id);
  }, [axios_getSpecificContent, params.id]);

  return <div id="CC-wrapper">ContentDetail Component</div>;
};

export default ContentDetail;
