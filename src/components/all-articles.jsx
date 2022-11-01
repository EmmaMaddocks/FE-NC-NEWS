import { useEffect } from "react"
import { useState } from "react"
import  Article  from './Article'

function AllArticles() {
   
    const [isLoading, setIsLoading] = useState(true);
    const [articles, setArticles] = useState([]);


useEffect(() => {
    setIsLoading(true)
    fetch('https://em-nc-news.herokuapp.com/api/articles')
    .then((res) => res.json())
    .then((response) => {
        console.log(response)
        setArticles(response)
        setIsLoading(false)
    })
}, [setArticles])

if (isLoading) return <p>Loading...</p>



return (
    
    <div className="article-container">
    <h3>Showing all articles</h3>
    <div className="article-list">

        {articles.map((article) => {
            return (
            <Article key={article.article_id} article={article}/>
   
            )
        })}

    </div>
    </div>
)

}

export default AllArticles