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

const IndividualComment = ({ comments, comment, loggedInUser, article_id }) => {
  const [error, setError] = useState(null);
  const [commentAvatar, setCommentAvatar] = useState(null);


  useEffect(() => {
    fetch(`https://fair-blue-ladybug-wear.cyclic.app/api/users/${comment.author}`)
      .then((res) => res.json())
      .then((response) => {
    

        setCommentAvatar(response[0].avatar_url);
        console.log(response)
      })
      .catch((error) => {

      });
  }, [setCommentAvatar]);



  return (
<>
<ListItem alignItems="flex-start" key={comment.comment_id}>
  <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={commentAvatar} />
        </ListItemAvatar>
<ListItemText
          primary=       {formatDate(comment.created_at)}
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
{comment.body}
              </Typography>
              
                     </>
          }
        />


</ListItem>
      <Divider variant="inset" component="li" />
</>
)
};


{/* 
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
</ListItem>

); */}


export default IndividualComment;
