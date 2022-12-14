import * as React from 'react';
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import formatDate from "../utils/api";
import HandleVotes from "./Votes";
import MuiButton from '@mui/material/Button';
import Box from '@mui/material/Box';
import LetteredAvatar from 'lettered-avatar';






const SmallArticleCard = ({ article }) => {
    const {
        title,
        author,
        created_at,
        article_id,
        comment_count,
        votes
      } = article;

      const [articleAuthor, setarticleAuthor] = useState(null)

  


  return (
    <Card sx={{ width: 345, p: 1,
      m: 1 }}>
      <CardHeader
        avatar={
          <LetteredAvatar className='avatar' name={author} options={{  
  
            size: 50, 
            twoLetter: true,
            shape: 'round',
            bgColor: 'rgb(3, 169, 152)', 
            tooltip: false, 
            imgClass: 'avatar'
          }}/>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={author}
        subheader={formatDate(created_at)}
      />
      {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
      {title}
        </Typography>
      </CardContent>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pl: 1, pr: 1 }}>

        <HandleVotes article={article} />
          
        <MuiButton sx={{ borderRadius: '16px', color: 'white' }} size="small" variant="contained" component={Link} to={`/articles/${article_id}`} >
    Read 
  </MuiButton>
      </Box>
    
    </Card>
  );
}

export default SmallArticleCard