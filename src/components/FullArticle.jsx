import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import HandleVotes from "./Votes";
import Comments from "./Comments";
import formatDate from "../utils/api";
import { BsChatQuote } from "react-icons/bs";

const FullArticle = ({loggedInUser}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState([]);
  const [error, setError] = useState(null);

  const { article_id } = useParams();
  

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://fair-blue-ladybug-wear.cyclic.app/api/articles/${article_id}`)
      .then((res) => res.json())
      .then((response) => {
        setArticle(response);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [setArticle]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>    <div className="article">
        <div className="article-details">
      <p>Posted by {article.author} </p>
      <p>{formatDate(article.created_at)}</p>
      </div>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <div className="article-details">
<div className="comment-count">
    <BsChatQuote color="black" size={20}/>
    <p>{article.comment_count}</p>
    </div>
     <div className="article-votes">
      <HandleVotes article={article}/>
      </div>
</div>
    </div>
    <Comments article_id={article_id} loggedInUser={loggedInUser}/>
    </>

  );
};

export default FullArticle;
