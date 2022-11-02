import { useEffect } from "react"
import { useState } from "react"
import  Article  from './Article'


function AllArticles({articles, setArticles}) {
   
    const [isLoading, setIsLoading] = useState(true);

    


useEffect(() => {
    setIsLoading(true)
    fetch('https://em-nc-news.herokuapp.com/api/articles')
    .then((res) => res.json())
    .then((response) => {
        setArticles(response)
        setIsLoading(false)
    })
}, [setArticles])

if (isLoading) return <p>Loading...</p>



return (
    
    <div className="article-container">
    <h3>Showing all articles</h3>



        {articles.map((article) => {
            return (
            <Article key={article.article_id} article={article}/>
   
            )
        })}

  
    </div>
)

}

export default AllArticles