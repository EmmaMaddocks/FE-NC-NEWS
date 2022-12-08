import * as api from "../utils/api";
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';

import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { AirlineSeatIndividualSuiteSharp } from "@mui/icons-material";
import Article from "./Article"
import UserArticle from "./UserArticle";
import { useArticles } from "../hooks/useArticles";


const Profile = ({ loggedInUser }) => {
    const { articles, isLoading, setIsLoading, setArticles } = useArticles();

  const [error, setError] = useState(null);
  const [profile, setProfile] = useState('');
  


  useEffect(() => {
    api
      .getArticles()
      .then((data) => {
        setArticles(data);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [articles]);

  if (isLoading) return <p>Loading...</p>;


  return (

<>
<Box
      sx={{
        width: 300,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        pt: 10,
      }}
    > 

<ListItemText
          primary=      ''
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="h4"
                color="text.primary"
              >
Hello {loggedInUser}!
              </Typography>
              
                     </>
          }
        />
</Box>
<Box       sx={{
        width: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        pt: 5,
      }}>
<Typography variant="h5">Your articles</Typography>
{articles.filter(article => article.author === loggedInUser).map(article => {
    return <UserArticle key={article.article_id} article={article} />;
          })}

</Box>
</>
)
};



export default Profile;
