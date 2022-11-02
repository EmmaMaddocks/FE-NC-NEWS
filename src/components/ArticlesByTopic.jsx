import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

import Article from "./Article";
import SortBy from "./SortBy";

function ArticlesByTopic({ articles, setArticles }) {
  const { topic } = useParams();

  useEffect(() => {
    fetch(`https://em-nc-news.herokuapp.com/api/articles?topic=${topic}`)
      .then((res) => res.json())
      .then((articles) => {
        setArticles(articles);
      });
  }, []);

  return (
    <>
      <div className="article-container">
      <div className="sort-header">
        <h3>//{topic}</h3>
        <SortBy setArticles={setArticles} articles={articles} />
        </div>
        <div className="article-list">
          {articles.map((article) => {
            return <Article key={article.article_id} article={article} />;
          })}
        </div>
      </div>
    </>
  );
}

export default ArticlesByTopic;
