import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import * as api from '../utils/api'


import Article from "./Article";
import SortBy from "./SortBy";

function ArticlesByTopic({ articles, setArticles }) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [order, setOrderBy] = useState('DESC')
  const [sort_by, setSortBy] = useState('created_at');

  const { topic } = useParams();

  useEffect(() => {
    api.getArticles(sort_by, order, topic)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

if (isLoading) return <Loading/>

  return (
    <>

      <div className="sort-header">
      <h3 className="collection-title">{topic}</h3>
        <SortBy order={order} setOrderBy={setOrderBy} sort_by={sort_by} setSortBy={setSortBy} setArticles={setArticles} articles={articles} topic={topic} />
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
