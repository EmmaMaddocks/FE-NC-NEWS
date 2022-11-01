import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const FullArticle = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://em-nc-news.herokuapp.com/api/articles/${article_id}`)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setArticle(response);
        setIsLoading(false);
      });
  }, [setArticle]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="article">
      <p>Comments: {article.comment_count}</p>
      <p>Comments: {article.title}</p>
      <p>Comments: {article.body}</p>
      <p>Posted by {article.author} </p>
      <p>Comments: {article.votes}</p>
      <p>{article.created_at}</p>
    </div>
  );
};

export default FullArticle;
