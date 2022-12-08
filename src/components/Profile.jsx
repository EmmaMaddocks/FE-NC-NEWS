import * as api from "../utils/api";
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';

import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { AirlineSeatIndividualSuiteSharp } from "@mui/icons-material";
import Article from "./Article"

const Profile = ({ loggedInUser, articles }) => {
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState('');

  const userArticles = articles.filter(getArticles);

function getArticles(loggedInUser) {
    console.log(articles)
    return articles.author === loggedInUser;
  }

  useEffect(() => {
    fetch(`https://fair-blue-ladybug-wear.cyclic.app/api/users/${loggedInUser}`)
      .then((res) => res.json())
      .then((response) => {
        setProfile(response[0]);
        console.log(response)
      })
      .catch((error) => {

      });
  }, []);

  return (

<>
<Box
      sx={{
        width: 300,
        height: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        pt: 10,
      }}
    >
          <Avatar alt="Remy Sharp" src={profile.avatar_url} />
<ListItemText
          primary=      ''
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="h5"
                color="text.primary"
              >
Hello {profile.name}!
              </Typography>
              
                     </>
          }
        />
</Box>
<div className="article-container">
          {userArticles.map((article) => {
            return <Article key={article.article_id} article={article} />;
          })}

      </div>
</>
)
};



export default Profile;
