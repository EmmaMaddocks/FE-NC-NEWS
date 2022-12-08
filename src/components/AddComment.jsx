import { useState } from "react";
import * as api from "../utils/api";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';




function AddComment({ article_id, open, setOpen}) {
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
    setOpen(false)
  } catch(error) {
    console.log(error)
    setError(true);
  }
    setInputValue("");
  };





  const onClick = (event) => setCommentBox(current => !current)

  return (


    <form onSubmit={HandleAddComment} className='article-box'>


<TextField
          id="comment"
          label=""
          multiline
          rows={4}
          value={inputValue}
          onChange={handleChange}
          required
        />

<Button type='submit' variant="contained" >
  Submit
</Button>
{hasError ? <p>{hasError}</p> : null }
  </form>









//     <div className="comment-box">

// <Button sx={{ borderRadius: '16px', color: 'white' }} onClick={onClick} size="small" variant="contained"  >
//     Add Comment 
//   </Button>

//     {/* <Button sx={{ borderRadius: '16px' }} onClick={onClick} ><span> add comment</span></Button> */}
//     {showCommentBox && (
//     <form onSubmit={HandleAddComment} className='comment-box'>
// <TextField
//           id="comment-body"
//           multiline
//           rows={2}
//           value={inputValue}
//           onChange={handleChange}
//           required
//           sx={{ m: 1, minWidth:300 }}
//         />


// <Button type="submit" sx={{ borderRadius: '16px', color: 'white' }} size="small" variant="contained"  >
//     Submit 
//   </Button>
//       {hasError ? <p>{hasError}</p> : null }
//   </form>
//       )}
//       </div>
    );
}

export default AddComment;
