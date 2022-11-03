import * as api from '../utils/api'
import { useState, useEffect } from 'react'
import HandleCommentVotes from './CommentVotes';
import AddComment from './AddComment';
import formatDate from '../utils/api';



const Comments = ({article_id}) => {

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

    <div className="comments-list">
    <h3 className='comments-header'>Comments</h3>
      {comments.map((comment) => {
        return (
          <li key={comment.comment_id} className="comment-card">
            <div className='comment-details'>
            <p className='meta-data'>Posted by: {comment.author}</p>
            <p className='meta-data'>at {formatDate(comment.created_at)}</p>
            </div>
            <p className='comment-body'>{comment.body}</p>

<HandleCommentVotes comment={comment}/>
          </li>

        );
      })}
    </div>
    </>
  );
};

export default Comments
