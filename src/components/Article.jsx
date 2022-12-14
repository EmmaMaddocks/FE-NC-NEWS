import { Link } from "react-router-dom";
import HandleVotes from "./Votes";
import formatDate from "../utils/api";
import { BsChatQuote, BsHandThumbsUp } from "react-icons/bs";
import LetteredAvatar from 'lettered-avatar';

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
      <div className="article-details ">
      <div className="avatar-container">
      <LetteredAvatar className='avatar' name={author} options={{  
  
  size: 60, 
  twoLetter: true,
  shape: 'round',
  bgColor: 'rgb(3, 169, 152)', 
  tooltip: false, 
  imgClass: 'avatar'
}}/>{author} </div>
        <p>{formatDate(created_at)}</p>
  

      </div>
      <div className="border-under"></div>
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
