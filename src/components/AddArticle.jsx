import { useState } from "react";
import * as api from "../utils/api";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';



function AddArticle({setOpen}) {
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [body, setBody] = useState("");
  const [showArticleBox, setArticleBox] = useState(false)
  const [buttonSign, setButtonSign] = useState('+')

  

  const [hasError, setError] = useState(false)

  const loggedInUser = "jessjelly";

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleTopic = (event) => {
    setTopic(event.target.value);
  };

  const handleBody = (event) => {
    setBody(event.target.value);
  };

  const HandleAddArticle = (event) => {
    event.preventDefault();

    const newArticle = {
    title: title,
    topic: topic,
    author: loggedInUser,
    body: body,

    };
    try {
    api.postArticle(title, topic, loggedInUser, body)
    setOpen(false)
  } catch(error) {
    console.log(error)
    setError(true);
  }
    setTitle("");
    setTopic("");
    setBody("");
  };


  return (
 
    <form onSubmit={HandleAddArticle} className='article-box'>

        <FormControl sx={{ m: 1, minWidth:200 }}>
    <InputLabel id="sort_by">Topic</InputLabel>

        <Select
          value={topic}
          label="Topic"
          onChange={handleTopic}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >

          <MenuItem value='coding'>Coding</MenuItem>
          <MenuItem value='football'>Football</MenuItem>
          <MenuItem value='cooking'>Cooking</MenuItem>

        </Select>
      </FormControl>

<TextField
          id="title"
          label="Article Title"
          rows={2}
          value={title}
          onChange={handleTitle}
          required
        />

<TextField
          id="body"
          label="Write some content.."
          multiline
          rows={4}
          value={body}
          onChange={handleBody}
          required
        />

<Button type='submit' variant="contained" endIcon={<SendIcon />}>
  Submit
</Button>
{hasError ? <p>{hasError}</p> : null }
  </form>


    );
}

export default AddArticle;
