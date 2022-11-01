import * as api from '../utils/api'
import { useState, useEffect } from 'react'


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
<h3>Comments</h3>
    <div className="article-list">
      {comments.map((comment) => {
        return (
          <li key={comment.comment_id} className="comment-card">
            <div className='comment-details'>
            <p>Posted by: {comment.author}</p>
            <p>at {comment.created_at}</p>
            </div>
            <p>{comment.body}</p>
            <p>Votes: {comment.votes}</p>

          </li>

        );
      })}
    </div>
    </>
  );
};

export default Comments
