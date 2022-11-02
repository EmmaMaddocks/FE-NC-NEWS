import {useState} from 'react'
import * as api from '../utils/api'


function AddComment({article_id, comments, setComments}) {

    
    const [commentBody, setCommentBody] = useState('');
    const [inputValue, setInputValue] = useState('');

    const loggedInUser = 'jessjelly'



    const handleChange = (event) => {
        setInputValue(event.target.value);
      
      };
      

    const HandleAddComment = (event)=>{
            event.preventDefault()
            setCommentBody(inputValue)
            api.postComment(commentBody, loggedInUser, article_id)
            setInputValue('')
            setComments(comments)
          }


return (
<form onSubmit={HandleAddComment}>
<input
  id="comment-body"
  type="text"
  value={inputValue}
  onChange={handleChange}
  placeholder='Add comment'
/>
<button type="submit">submit</button>
</form>
)
}

export default AddComment;



