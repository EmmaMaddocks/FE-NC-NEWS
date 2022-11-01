import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import HandleVotes from "./Votes";
import Comments from "./Comments";

const FullArticle = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://em-nc-news.herokuapp.com/api/articles/${article_id}`)
      .then((res) => res.json())
      .then((response) => {
        setArticle(response);
        setIsLoading(false);
      });
  }, [setArticle]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>    <div className="article">
        <div className="article-details">
      <p>Posted by {article.author} </p>
      <p>{article.created_at}</p>
      </div>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <div className="article-details">
      <p>Comments: {article.comment_count}</p>
      <HandleVotes article={article}/>
</div>
    </div>
    <Comments article_id={article_id}/>
    </>

  );
};

export default FullArticle;
