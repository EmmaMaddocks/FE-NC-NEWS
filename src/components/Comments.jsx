import * as api from '../utils/api'
import { useEffect } from 'react'
import HandleCommentVotes from './CommentVotes';
import AddComment from './AddComment';
import formatDate from '../utils/api';
import DeleteCommentByUser from './DeleteComment';
import { useComments } from '../hooks/useComments';



const Comments = ({article_id, loggedInUser}) => {


const { comments, isLoading, setComments  } = useComments(article_id)

useEffect(() => {
    api.getComments(article_id)
    .then((data) => {
     setComments(data)
    })
}, [comments])



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
{loggedInUser === comment.author ? <DeleteCommentByUser id={comment.comment_id} article_id={article_id} comments={comments} /> : null}
          </li>

        );
      })}
    </div>
    </>
  );
};

export default Comments
