import { useEffect } from "react";
import { useState } from "react";
import * as api from '../utils/api'
import Loading from "./Loading";
import SmallArticleCard from "./SmallArticleCard";
import Grid from '@mui/material/Grid'; // Grid version 1
import Box from '@mui/material/Box';



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
     
        {mostCommented.slice(0, 4).map((article) => {
          return <SmallArticleCard key={article.article_id} article={article}/>;
        })}
 
    </Box>
    </>
  );
}

export default MostCommentedArticles;
