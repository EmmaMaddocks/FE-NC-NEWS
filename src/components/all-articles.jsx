import { useEffect } from "react";
import { useState } from "react";
import Article from "./Article";
import * as api from "../utils/api";
import SortBy from "./SortBy";

function AllArticles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.getArticles().then((data) => {
      setArticles(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
            <div className="sort-header">
        <h3 className="collection-title">All articles</h3>
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

export default AllArticles;
