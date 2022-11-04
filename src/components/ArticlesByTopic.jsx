import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import Article from "./Article";
import SortBy from "./SortBy";

function ArticlesByTopic({ articles, setArticles }) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { topic } = useParams();

  useEffect(() => {
    fetch(`https://em-nc-news.herokuapp.com/api/articles?topic=${topic}`)
      .then((res) => res.json())
      .then((articles) => {
        setArticles(articles);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>

      <div className="sort-header">
      <h3 className="collection-title">{topic}</h3>
        <SortBy setArticles={setArticles} articles={articles} />
        </div>
        <div className="article-container">
          {articles.map((article) => {
            return <Article key={article.article_id} article={article} />;
          })}

      </div>
    </>
  );
}

export default ArticlesByTopic;
