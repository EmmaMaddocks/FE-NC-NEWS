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



        <p>Posted by {author} </p>
        <p>{formatDate(created_at)}</p>
  

      </div>
      <h2>{title}</h2>
      {/* <HandleVotes article={article} /> */}
      <div className="article-bottom">
              <p className='article-icons'>{comment_count} <BsChatQuote color="black" size={16}/></p>
              <p  className='article-icons'>{votes} <BsHandThumbsUp color="black" size={16}/></p>

      <Link to={`/articles/${article_id}`} className='article-link'>
        Read Article
      </Link>
      </div>
    </li>
  );
};

export default ArticleCard;
