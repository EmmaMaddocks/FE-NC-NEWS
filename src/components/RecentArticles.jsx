import { useEffect } from "react";
import { useState } from "react";
import * as api from '../utils/api'
import Article from "./Article";
import Loading from "./Loading";
import SmallArticleCard from "./SmallArticleCard";
import Box from '@mui/material/Box';


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

  if (isLoading) return <Loading/>;



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
        {recentArticle.slice(0, 6).map((article) => {
          return <SmallArticleCard key={article.article_id} article={article}/>;
        })}
    </Box>
    </>
  );
}

export default RecentArticles;
