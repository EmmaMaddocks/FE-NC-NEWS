import * as api from "../utils/api";
import { useEffect, useState } from "react";
import HandleCommentVotes from "./CommentVotes";
import AddComment from "./AddComment";
import formatDate from "../utils/api";
import DeleteCommentByUser from "./DeleteComment";
import { useComments } from "../hooks/useComments";
import LetteredAvatar from "lettered-avatar";
import List from '@mui/material/List';
import Box from '@mui/material/Box';

import IndividualComment from "./IndividualComment";

const Comments = ({ article_id, loggedInUser }) => {
  const { comments, isLoading, setIsLoading, setComments } = useComments(article_id);
  const [error, setError] = useState(null);
  const [commentAvatar, setCommentAvatar] = useState(null);

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

      <Box       sx={{
        width: '90%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        pt: 5,
      }}>
        <h3 className="comments-header">Comments</h3>
        {comments.length === 0 ? <p>No comments to show</p> :  
<List sx={{ bgcolor: 'background.paper' }}>
      
        {comments.map((comment) => {

          return (
          <IndividualComment key={comment.comment_id} comments={comments} article_id={article_id} comment={comment} loggedInUser={loggedInUser} />
          );
        })}
      </List>
      }
      </Box>
    </>
  );
};

export default Comments;
