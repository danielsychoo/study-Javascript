import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  CommentBox,
  CreateComment,
  ModifyComment,
  Loading,
} from "../component";
import { useFunction, useAxios, useModal, useSwal } from "../hooks";
import "../scss/CommentPart.scss";

const CommentPart = ({
  commentClickedPage,
  handleCommentClickedPage,
  clickedDevidePage,
  handlePrevFirstPage,
  handleNextLastPage,
  handlePrevDevidePage,
  handleNextDevidePage,
}) => {
  const { countCommentPageLength, handleDevideFivePages } = useFunction();
  const { axios_getCommentPagination } = useAxios();

  const { isModalOn, handleModal } = useModal(); // for modify Component
  const [comment_id, setComment_id] = useState(0);

  const subejct_id = useParams().id;

  const [contentComments, setContentComments] = useState({
    comments: [],
    count: 0,
  });

  const { comments, count } = contentComments; // state 비구조화 할당
  const [isLoading, setIsLoading] = useState(false);

  const commentPages = countCommentPageLength(count); // comment의 전체 값

  const devideLongPages = handleDevideFivePages(commentPages);

  const { swal_alertItsFirstPage, swal_alertItsLastPage } = useSwal();

  useEffect(() => {
    axios_getCommentPagination(
      subejct_id,
      commentClickedPage,
      setContentComments,
      setIsLoading
    );
  }, [subejct_id, commentClickedPage, axios_getCommentPagination]);

  return (
    <div id="comments-wrapper">
      <div id="comment-main-wrapper">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {count === 0 ? (
              <li id="no-comments">
                <p>댓글이 없습니다.</p>
                <p>첫번째 댓글을 작성해보세요!</p>
              </li>
            ) : (
              <CommentBox
                comments={comments}
                setContentComments={setContentComments}
                commentClickedPage={commentClickedPage}
                handleModal={handleModal}
                setComment_id={setComment_id}
                setIsLoading={setIsLoading}
              />
            )}
          </>
        )}

        {/* 댓글 작성부분 */}
        {isModalOn ? (
          <ModifyComment
            comment_id={comment_id}
            setContentComments={setContentComments}
            commentClickedPage={commentClickedPage}
            handleModal={handleModal}
            setIsLoading={setIsLoading}
          />
        ) : (
          <CreateComment
            setContentComments={setContentComments}
            commentClickedPage={commentClickedPage}
            setIsLoading={setIsLoading}
          />
        )}
      </div>
      {count ? (
        <ul id="comment-pagination-wrapper">
          {commentPages.length < 5 ? (
            <>
              <li
                className="FL-pagination"
                onClick={() => handleCommentClickedPage(1)}
              >
                &#60; First
              </li>
              {commentPages.map((page) => {
                return (
                  <li
                    id={page === commentClickedPage ? "clickedColor" : null}
                    key={page}
                    value={page}
                    onClick={() => handleCommentClickedPage(page)}
                  >
                    {page}
                  </li>
                );
              })}
              <li
                className="FL-pagination"
                onClick={() =>
                  handleCommentClickedPage(
                    commentPages[commentPages.length - 1]
                  )
                }
              >
                Last &#62;
              </li>
            </>
          ) : (
            <>
              <li
                className="FL-pagination"
                onClick={() => {
                  handleCommentClickedPage(1);
                  handlePrevFirstPage();
                }}
              >
                &#60;&#60; 처음
              </li>

              <li
                className="FL-pagination"
                onClick={
                  clickedDevidePage === 0
                    ? () => swal_alertItsFirstPage()
                    : () => {
                        handleCommentClickedPage(
                          parseInt(devideLongPages[clickedDevidePage - 1])
                        );
                        handlePrevDevidePage();
                      }
                }
              >
                &#60; 이전
              </li>

              {devideLongPages[clickedDevidePage].map((page, index) => {
                return (
                  <li
                    key={index}
                    id={page === commentClickedPage ? "clickedColor" : null}
                    onClick={() => handleCommentClickedPage(page)}
                  >
                    {page}
                  </li>
                );
              })}
              {clickedDevidePage === 2 ? (
                <></>
              ) : (
                <>
                  <span>...</span>
                  <li
                    key={commentPages[commentPages.length - 1]}
                    id={
                      commentPages[commentPages.length - 1] ===
                      commentClickedPage
                        ? "clickedColor"
                        : null
                    }
                    onClick={() =>
                      handleCommentClickedPage(
                        commentPages[commentPages.length - 1]
                      )
                    }
                  >
                    {commentPages[commentPages.length - 1]}
                  </li>
                </>
              )}

              <li
                className="FL-pagination"
                onClick={
                  clickedDevidePage === 2
                    ? () => swal_alertItsLastPage()
                    : () => {
                        handleCommentClickedPage(
                          parseInt(devideLongPages[clickedDevidePage + 1])
                        );
                        handleNextDevidePage(devideLongPages.length - 1);
                      }
                }
              >
                다음 &#62;
              </li>

              <li
                className="FL-pagination"
                onClick={() => {
                  handleCommentClickedPage(
                    commentPages[commentPages.length - 1]
                  );
                  handleNextLastPage(devideLongPages.length - 1);
                }}
              >
                맨뒤 &#62;&#62;
              </li>
            </>
          )}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CommentPart;
