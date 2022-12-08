import { useEffect } from "react";
import { useState } from "react";
import Article from "./Article";
import * as api from "../utils/api";
import SortBy from "./SortBy";
import Loading from "./Loading";


function AllArticles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)

  const [order, setOrderBy] = useState('DESC')
  const [sort_by, setSortBy] = useState('created_at');



  useEffect(() => {
    api.getArticles(sort_by, order,)
      .then((articles) => {
        setArticles(articles);

        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [articles]);


  if (isLoading) return <Loading />;

  return (
    <>
      <div className="sort-header">
        <h3 className="collection-title">All articles</h3>
        <SortBy order={order} setOrderBy={setOrderBy} sort_by={sort_by} setSortBy={setSortBy} setArticles={setArticles} articles={articles} />
      </div>
      <div className="article-container">
        {articles.map((article) => {
          return <Article key={article.article_id} article={article} />;
        })}
      </div>
    </>
  );
}

export default AllArticles;
