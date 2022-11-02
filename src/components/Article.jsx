import { Link } from "react-router-dom";
import HandleVotes from "./Votes";
import formatDate from "../utils/api";
import { BsChatQuote, BsHandThumbsUp } from "react-icons/bs";

const ArticleCard = ({ article }) => {
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
      <div className="article-details border-under">

        <p>{comment_count} <BsChatQuote color="black" size={16}/></p>
        <p>{votes} <BsHandThumbsUp color="black" size={16}/></p>

        <p>Posted by {author} </p>
        <p>{formatDate(created_at)}</p>
  

      </div>
      <h2>{title}</h2>
      {/* <HandleVotes article={article} /> */}
      <Link to={`/articles/${article_id}`} className='article-link'>
        Read Article
      </Link>
    </li>
  );
};

export default ArticleCard;
