import { useState } from "react";
import * as api from "../utils/api";


function AddComment({ article_id}) {
  const [inputValue, setInputValue] = useState("");
  const [showCommentBox, setCommentBox] = useState(false)
  const [hasError, setError] = useState(false)

  const loggedInUser = "jessjelly";

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const HandleAddComment = (event) => {
    event.preventDefault();

    const newComment = {
      author: loggedInUser,
      body: inputValue,
      votes: 0,
      created_at: "22/11/11",
    };
    try {
    api.postComment(inputValue, loggedInUser, article_id)
  } catch(error) {
    console.log(error)
    setError(true);
  }
    setInputValue("");
  };

  const onClick = (event) => setCommentBox(current => !current)

  return (
    <div className="comment-box">
    <button onClick={onClick}> add comment</button>
    {showCommentBox && (
    <form onSubmit={HandleAddComment} className='comment-box'>
    <input
      id="comment-body"
      type="text"
      value={inputValue}
      onChange={handleChange}
      required
    />
    <button type="submit" className="submit-btn">submit comment</button>
    {hasError ? <p>{hasError}</p> : null }
  </form>
      )}
      </div>
    );
}

export default AddComment;
