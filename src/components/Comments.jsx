import * as api from "../utils/api";
import { useEffect, useState } from "react";
import HandleCommentVotes from "./CommentVotes";
import AddComment from "./AddComment";
import formatDate from "../utils/api";
import DeleteCommentByUser from "./DeleteComment";
import { useComments } from "../hooks/useComments";
import LetteredAvatar from "lettered-avatar";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { AirlineSeatIndividualSuiteSharp } from "@mui/icons-material";
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
      <AddComment
        article_id={article_id}
        comments={comments}
        setComments={setComments}
      />
        <h3 className="comments-header">Comments</h3>

<List sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}>
        {comments.map((comment) => {

          return (
          <IndividualComment       comments={comments} article_id={article_id} comment={comment} loggedInUser={loggedInUser} />
          );
        })}
      </List>
    </>
  );
};

export default Comments;
