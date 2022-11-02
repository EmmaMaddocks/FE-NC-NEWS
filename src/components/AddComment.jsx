import { useState } from "react";
import * as api from "../utils/api";

function AddComment({ article_id, comments, setComments }) {
  const [inputValue, setInputValue] = useState("");

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
    api.postComment(inputValue, loggedInUser, article_id);
    setInputValue("");
    setComments([...comments, newComment]);
  };

  return (
    <form onSubmit={HandleAddComment}>
      <input
        id="comment-body"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Add comment"
      />
      <button type="submit">submit</button>
    </form>
  );
}

export default AddComment;
