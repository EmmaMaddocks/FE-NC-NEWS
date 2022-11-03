import * as api from '../utils/api'
import { useState, useEffect } from 'react'
import HandleCommentVotes from './CommentVotes';
import AddComment from './AddComment';
import formatDate from '../utils/api';
import DeleteComment from './DeleteComment';
import DeleteCommentByUser from './DeleteComment';



const Comments = ({article_id, loggedInUser}) => {

    const [comments, setComments] = useState()
    const [isLoading, setIsLoading] = useState(true);


   useEffect(() => {
       setIsLoading(true)
       api.getComments(article_id)
       .then((data) => {
        setComments(data)
        setIsLoading(false)
       })
   }, [setComments])
   
   if (isLoading) return <p>Loading...</p>
   

  return (
    <>
        <AddComment article_id={article_id} comments={comments} setComments={setComments}/>
<h3>Comments</h3>
    <div className="article-list">
      {comments.map((comment) => {
        return (
          <li key={comment.comment_id} className="comment-card">
            <div className='comment-details'>
            <p>Posted by: {comment.author}</p>
            <p>at {formatDate(comment.created_at)}</p>
            </div>
            <p>{comment.body}</p>

<HandleCommentVotes comment={comment}/>
{loggedInUser === comment.author ? <DeleteCommentByUser id={comment.comment_id} comments={comments} setComments={setComments}/> : null}
          </li>

        );
      })}
    </div>
    </>
  );
};

export default Comments
