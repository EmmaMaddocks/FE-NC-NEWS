import { useEffect } from "react";
import { useState } from "react";
import * as api from '../utils/api'
import Article from "./Article";

function MostCommentedArticles() {
  const [isLoading, setIsLoading] = useState(true);

  const [mostCommented, setMostCommented] = useState([]);


const sort_by = 'comment_count'
const order = 'DESC'

  useEffect(() => {
    setIsLoading(true);
    api.getArticles(sort_by, order)
      .then((data) => {
        setMostCommented(data);
        setIsLoading(false);
      });
  }, [setMostCommented]);

  if (isLoading) return <p>Loading...</p>;



  return (
 <>
       <h3 className="collection-title">Most Commented:</h3>
       <div className="collection-container">
        {mostCommented.slice(0, 2).map((article) => {
          return <Article key={article.article_id} article={article}/>;
        })}
    </div>
    </>
  );
}

export default MostCommentedArticles;
