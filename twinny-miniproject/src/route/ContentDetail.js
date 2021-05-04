import React, { useState, useEffect } from "react";
import { useParams, withRouter } from "react-router-dom";
import { NotFound } from "../route";
import { ContentBox, ModifyContent, CommentPart, Loading } from "../component";
import { useAxios, useModal } from "../hooks";
import "../scss/ContentDetail.scss";

const ContentDetail = ({ history }) => {
  const {
    axios_getSpecificContent,
    axios_deleteContent,
    axios_getModifyContent,
  } = useAxios();
  const { isModalOn, handleModal } = useModal();
  const params = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [contentData, setContentData] = useState({
    subject: "",
    content: "",
    id: "",
    subject_id: 0,
    filepath: "",
    filename: "",
    refineDate: "",
    isContentExist: false,
  });

  const {
    id,
    subject_id,
    subject,
    content,
    filepath,
    filename,
    isContentExist,
  } = contentData;

  useEffect(() => {
    axios_getSpecificContent(params.id, setContentData, setIsLoading);
  }, [axios_getSpecificContent, params.id]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {isContentExist ? (
            <>
              {isModalOn ? (
                <ModifyContent
                  subject_id={subject_id}
                  subject={subject}
                  content={content}
                  filepath={filepath}
                  filename={filename}
                  setContentData={setContentData}
                  handleModal={handleModal}
                />
              ) : (
                <div id="CD-wrapper">
                  <ContentBox contentData={contentData} />
                  <div id="CD-button-box">
                    <button
                      onClick={() => {
                        axios_getModifyContent(id, params.id, handleModal);
                      }}
                    >
                      게시글 수정
                    </button>
                    <button
                      onClick={() =>
                        axios_deleteContent(id, params.id, history)
                      }
                    >
                      게시글 삭제
                    </button>
                  </div>
                  <CommentPart />
                </div>
              )}
            </>
          ) : (
            <NotFound />
          )}
        </>
      )}
    </>
  );
};

export default withRouter(ContentDetail);
