import { useEffect } from "react";
import { useState } from "react";
import * as api from '../utils/api'
import Article from "./Article";
import Loading from "./Loading";
import SmallArticleCard from "./SmallArticleCard";
import Box from '@mui/material/Box';


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

  if (isLoading) return <Loading/>



  return (
 <>
       <Box sx={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignContent: 'stretch',
    p: 1,
    m: 1,
    borderRadius: 4
  }}
  >
        {highestVoted.slice(0, 6).map((article) => {
          return <SmallArticleCard key={article.article_id} article={article}/>;
        })}
    </Box>
    </>
  );
}

export default HighestVotedArticles;
