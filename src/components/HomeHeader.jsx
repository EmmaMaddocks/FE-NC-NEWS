import HighestVotedArticles from "./HighestVotedArticles"
import MostCommentedArticles from "./MostCommentedArticles"
import RecentArticles from "./RecentArticles"

function HomeHeader({loggedInUser}) {
    return (
        <>
    <div class='home-header'>
        <h2>Welcome to NCNews!</h2>
        <p class='welcome'>
        Providing you with the latest news from the Northcoders community</p>
        {loggedInUser ? <h3>You are currently logged in as {loggedInUser}</h3> : null}

    </div>
    <div className="collections">
        
    <RecentArticles/>
    <HighestVotedArticles/>
    <MostCommentedArticles/>
    </div>
    </>
    )
    }
    
    export default HomeHeader