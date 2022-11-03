import { useEffect } from "react";
import { useState } from "react";
import * as api from '../utils/api'
import Article from "./Article";

function RecentArticles() {
  const [isLoading, setIsLoading] = useState(true);

  const [recentArticle, setRecentArticle] = useState([]);


const sort_by = 'created_at'
const order = 'DESC'

  useEffect(() => {
    setIsLoading(true);
    api.getArticles(sort_by, order)
      .then((data) => {
        setRecentArticle(data);
        setIsLoading(false);
      });
  }, [setRecentArticle]);

  if (isLoading) return <p>Loading...</p>;



  return (
 <>
       <h3 className="collection-title">Recent Articles:</h3>
    <div className="collection-container">
        {recentArticle.slice(0, 2).map((article) => {
          return <Article key={article.article_id} article={article}/>;
        })}
    </div>
    </>
  );
}

export default RecentArticles;