import { Link } from "react-router-dom";
import HandleVotes from "./Votes";
import formatDate from "../utils/api";
import { BsChatQuote, BsHandThumbsUp } from "react-icons/bs";
import LetteredAvatar from 'lettered-avatar';
import DeleteArticle from "./DeleteArticle";

const UserArticle = ({ article }) => {
  const {
    title,
    author,
    created_at,
    article_id,
    comment_count,
    votes
  } = article;

  return (
    <li key={article_id} className="article-card">
      <div className="article-details ">

        <p>{formatDate(created_at)}</p>
  

      </div>
      <div className="border-under"></div>
      <h2>{title}</h2>
      <div className="article-bottom">

      <Link to={`/articles/${article_id}`} className='article-link'>
        VIEW
      </Link>
      <DeleteArticle article_id={article_id} />
      </div>
    </li>
  );
};

export default UserArticle;
