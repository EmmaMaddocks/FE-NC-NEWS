import * as React from 'react';

import AddArticle from "./AddArticle"
import HighestVotedArticles from "./HighestVotedArticles"
import MostCommentedArticles from "./MostCommentedArticles"
import RecentArticles from "./RecentArticles"
import BottomNav from "./BottomNav"
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


function HomeHeader({loggedInUser}) {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  

    return (

        

  <Box sx={{ width: '100%'}}>
        {/* <Box sx={{ flexGrow: 1 }}>
          <img src={`/images/news.jpeg`} />
          </Box> */}

<Box component="img" src={`/images/news.jpeg`} sx={{ height: "200px", width: "100%" }}/>




            <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
          <TabList onChange={handleChange} aria-label="article tabs" centered>
            <Tab label="Recent" value="1" />
            <Tab label="Most Loved " value="2" />
            <Tab label="Most Commented" value="3" />
          </TabList>
        </Box>

        <TabPanel value="1"><RecentArticles/></TabPanel>
        <TabPanel value="2"><HighestVotedArticles/></TabPanel>
        <TabPanel value="3"><MostCommentedArticles/></TabPanel>
      </TabContext>
    </Box>

  
        </Box>

    )
    }
    
    export default HomeHeader