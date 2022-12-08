import * as api from "../utils/api";
import { useEffect, useState } from "react";
import HandleCommentVotes from "./CommentVotes";
import AddComment from "./AddComment";
import formatDate from "../utils/api";
import DeleteCommentByUser from "./DeleteComment";
import { useComments } from "../hooks/useComments";
import LetteredAvatar from "lettered-avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { AirlineSeatIndividualSuiteSharp } from "@mui/icons-material";

const IndividualComment = ({ comments, comment, loggedInUser, article_id }) => {

	return (
		<>
			<ListItem alignItems="flex-start" key={comment.comment_id}>
            <ListItemAvatar>

                <LetteredAvatar className='avatar' name={comment.author} options={{  
  size: 40, 
  twoLetter: true,
  shape: 'round',
  bgColor: 'rgb(3, 169, 152)', 
  tooltip: false, 
  imgClass: 'avatar'
}}/>				
        </ListItemAvatar>

				<ListItemText
					primary={formatDate(comment.created_at)}
					secondary={
						<>
							<Typography
								sx={{ display: "inline" }}
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
			<Divider variant="inset" component="li" />
		</>
	);
};

{
	/* 
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

); */
}

export default IndividualComment;
