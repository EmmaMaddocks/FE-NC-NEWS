import { useEffect } from "react"
import { useState } from "react"
import  Article  from './Article'
import * as api from '../utils/api'

function AllArticles() {
   
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [order, setOrderBy] = useState("");
    const [sort_by, setSortBy] = useState("");


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

const handleSortBy = (event) => {
    event.preventDefault()
    const { value } = event.target
    setSortBy(value)
  }


const handleOrder = (event) => {
    event.preventDefault()
    const { value } = event.target
    setOrderBy(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    api.getArticles(sort_by, order)
    .then((data)=>{
        setArticles(data);
    })
  }



return (
    <>
          <form onSubmit={handleSubmit} className="sort-btns">
            <select className="options" name="sortBy" onChange={handleSortBy}>
              <option value='created_at'>Date</option>
              <option value='comment_count'>Comment Count</option>
              <option value='votes'>Votes</option>
            </select>
            <select className="options" name="order" onChange={handleOrder}>
              <option value="DESC">Descending</option>
              <option value="ASC">Ascending</option>
            </select>
            <button className="options button">SORT</button>
          </form>


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