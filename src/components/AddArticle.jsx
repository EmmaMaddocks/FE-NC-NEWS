import { useState } from "react";
import * as api from "../utils/api";


function AddArticle() {
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
  } catch(error) {
    console.log(error)
    setError(true);
  }
    setTitle("");
    setTopic("");
    setBody("");
  };

  const onClick = (event) => setArticleBox(current => !current)

  return (
    <div className="article-box">
    <button onClick={onClick} class='article-btn'> { showArticleBox ? <span>-</span> : <span>+</span> }</button>
    {showArticleBox && (
    <form onSubmit={HandleAddArticle} className='article-box'>
        <select className="topic-input" name="topic" onChange={handleTopic} placeholder='topic'>
<option value="" disabled selected>Select article topic</option>
    <option value="coding">Coding</option>
    <option value="football">Football</option>
    <option value="Cooking">Cooking</option>
  </select>
    <input
    className="title-input"
      id="title"
      type="text"
      value={title}
      onChange={handleTitle}
      required
      placeholder="title"
    />


        <input
      id="body"
      type="text"
      value={body}
      onChange={handleBody}
      required
      placeholder="What's on your mind?"
    />
    <button type="submit" className="comment-btn"><span>submit article</span></button>
    {hasError ? <p>{hasError}</p> : null }
  </form>
      )}
      </div>
    );
}

export default AddArticle;
