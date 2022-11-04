import { useEffect } from "react";
import { useState } from "react";
import * as api from '../utils/api'
import Loading from "./Loading";
import SmallArticleCard from "./SmallArticleCard";


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


  if (isLoading) return <Loading/>



  return (
 <>
       <h3 className="collection-title">Most Commented:</h3>
       <div className="collection-container">
        {mostCommented.slice(0, 4).map((article) => {
          return <SmallArticleCard key={article.article_id} article={article}/>;
        })}
    </div>
    </>
  );
}

export default MostCommentedArticles;
