import * as api from "../utils/api";
import { useEffect, useState } from "react";
import HandleCommentVotes from "./CommentVotes";
import AddComment from "./AddComment";
import formatDate from "../utils/api";
import DeleteCommentByUser from "./DeleteComment";
import { useComments } from "../hooks/useComments";
import LetteredAvatar from "lettered-avatar";

const Comments = ({ article_id, loggedInUser }) => {
  const { comments, isLoading, setIsLoading, setComments } = useComments(article_id);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .getComments(article_id)
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [comments]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <AddComment
        article_id={article_id}
        comments={comments}
        setComments={setComments}
      />

      <div className="comments-list">
        <h3 className="comments-header">Comments</h3>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id} className="comment-card">
              <div className="comment-details">
                <div className="avatar-container">
                  <LetteredAvatar
                    className="avatar"
                    name={comment.author}
                    options={{
                      size: 60,
                      twoLetter: true,
                      shape: "round",
                      bgColor: "rgb(3, 169, 152)",
                      tooltip: true,
                      imgClass: "avatar",
                    }}
                  />
                  {comment.author}{" "}
                </div>
                {formatDate(comment.created_at)}
              </div>
              <p className="comment-body">{comment.body}</p>
              <div className="vote">
                <HandleCommentVotes comment={comment} />
                {loggedInUser === comment.author ? (
                  <DeleteCommentByUser
                    id={comment.comment_id}
                    article_id={article_id}
                    comments={comments}
                  />
                ) : null}
              </div>
            </li>
          );
        })}
      </div>
    </>
  );
};

export default Comments;
