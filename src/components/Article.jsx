
import Votes from './Votes'
import { voteOnArticle } from '../utils/api';
import { useState } from 'react';
import * as api from '../utils/api'

const ArticleCard = ({ article }) => {
    const { title, img_url, author, topic, created_at, article_id, comment_count, votes } = article;

    const [voteIncrement, setVotes] = useState(0);
    const [err, setErr] = useState(null);


    const HandleInc = () => {
      setVotes((currentVotes)=>(currentVotes+ 1))      
        api.patchVotes(article_id, 1)
        }

        const HandleDec = () => {
          setVotes((currentVotes)=>(currentVotes- 1))      
          api.patchVotes(article_id, -1)
          }
  




    return (
        <li key={article_id} className="article-card">
<div className="article-details">
          <p>Comments: {comment_count}</p>
          <p>Posted by {author} </p>
          <p>{created_at}</p>
          </div>
          <h2>{title}</h2>
      <div className="vote">
    <p>Votes: {votes + voteIncrement}</p>
    <button className="vote-btn" onClick={HandleInc}>+</button>
    <button className="vote-btn" onClick={HandleDec}>-</button>

  </div>
        </li>
      );
    }
    
    export default ArticleCard;
    