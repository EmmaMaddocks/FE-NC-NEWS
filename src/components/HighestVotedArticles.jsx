import { useEffect } from "react";
import { useState } from "react";
import * as api from '../utils/api'
import Article from "./Article";

function HighestVotedArticles() {
  const [isLoading, setIsLoading] = useState(true);

  const [highestVoted, setHighestVoted] = useState([]);


const sort_by = 'votes'
const order = 'DESC'

  useEffect(() => {
    setIsLoading(true);
    api.getArticles(sort_by, order)
      .then((data) => {
        setHighestVoted(data);
        setIsLoading(false);
      });
  }, [setHighestVoted]);

  if (isLoading) return <p>Loading...</p>;



  return (
 <>
       <h3 className="collection-title">Highest Voted:</h3>
       <div className="collection-container">
        {highestVoted.slice(0, 2).map((article) => {
          return <Article key={article.article_id} article={article}/>;
        })}
    </div>
    </>
  );
}

export default HighestVotedArticles;
