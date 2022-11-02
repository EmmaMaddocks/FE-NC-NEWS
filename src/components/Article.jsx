import { Link } from "react-router-dom";
import HandleVotes from './Votes';
import formatDate from "../utils/api";

const ArticleCard = ({ article }) => {
    const { title, img_url, author, topic, created_at, article_id, comment_count, votes } = article;

    return (
        <li key={article_id} className="article-card">
<div className="article-details">
          <p>Comments: {comment_count}</p>
          <p>Posted by {author} </p>
          <p>{formatDate(created_at)}</p>
          </div>
          <h2>{title}</h2>
<HandleVotes article={article}/>

    <Link to={`/articles/${article_id}`}>
        <button>Read Article</button>
      </Link>

        </li>
      );
    }
    
    export default ArticleCard;
    