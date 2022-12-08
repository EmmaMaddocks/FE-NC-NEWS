import AddArticle from "./AddArticle"
import HighestVotedArticles from "./HighestVotedArticles"
import MostCommentedArticles from "./MostCommentedArticles"
import RecentArticles from "./RecentArticles"
import BottomNav from "./BottomNav"
import Box from '@mui/material/Box';


function HomeHeader({loggedInUser}) {
    return (

  <Box sx={{ flexGrow: 1 }}>
    <AddArticle/>
    <Box sx={{ flexGrow: 1 }}>
    
    <RecentArticles/>
    <HighestVotedArticles/>
    <MostCommentedArticles/>
    </Box>
        </Box>

    )
    }
    
    export default HomeHeader