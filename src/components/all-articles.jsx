import { useEffect } from "react"
import { useState } from "react"
import  Article  from './Article'
import * as api from '../utils/api'
import SortBy from './SortBy'

function AllArticles() {
   
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



useEffect(() => {
    setIsLoading(true)
    api.getArticles()
    .then((data) => {
        setArticles(data);
        setIsLoading(false);
      }
    );
  }, []);

  
  if (isLoading) return <p>Loading...</p>

// const handleSortBy = (event) => {
//     event.preventDefault()
//     const { value } = event.target
//     setSortBy(value)
//   }


// const handleOrder = (event) => {
//     event.preventDefault()
//     const { value } = event.target
//     setOrderBy(value)
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault()
//     api.getArticles(sort_by, order)
//     .then((data)=>{
//         setArticles(data);
//     })
//   }



return (
    <>
    

<SortBy setArticles={setArticles} articles={articles}/>
    <div className="article-container">
    <h3>Showing all articles</h3>
        {articles.map((article) => {
            return (
            <Article key={article.article_id} article={article}/>
   
            )
        })}
    </div>
    </>
)

}

export default AllArticles