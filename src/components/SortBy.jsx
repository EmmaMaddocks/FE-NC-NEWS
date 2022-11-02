import { useEffect } from "react"
import { useState } from "react"
import  Article  from './Article'
import * as api from '../utils/api'

function SortBy({articles, setArticles}) {

    const [order, setOrderBy] = useState("");
    const [sort_by, setSortBy] = useState("");


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
)
}

export default SortBy