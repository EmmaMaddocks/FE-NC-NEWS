import HighestVotedArticles from "./HighestVotedArticles"
import MostCommentedArticles from "./MostCommentedArticles"
import RecentArticles from "./RecentArticles"

function HomeHeader({loggedInUser}) {
    return (
        <>
    <div class='home-header'>
        <h2>Welcome to NCNews {loggedInUser ? loggedInUser : null}!</h2>
        <p class='welcome'>
        Providing you with the latest news from the Northcoders community</p>
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