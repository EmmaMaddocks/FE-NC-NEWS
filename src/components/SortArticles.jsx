// import { useState, useEffect } from "react"
// import * as api from '../utils/api'



// function SortArticles({articles, setArticles}) {

// const [sortBy, setSortBy] = useState()
// const [order, setOrder] = useState()


//     // const handleSortBy = (event) => {
//     //     event.preventDefault()
//     //     const { value } = event.target
//     //     setSortBy(value)
//     //   }


//     // const handleOrder = (event) => {
//     //     event.preventDefault()
//     //     const { value } = event.target
//     //     setOrder(value)
//     //   }

//     //   const handleSubmit = (event) => {
//     //     event.preventDefault()
//     //     api.getArticles(order, sortBy)  
//     //     setArticles(articles)
//     //   }

//         return (
//           <form onSubmit={handleSubmit} className="sortOptions">
//             <select className="options" name="sortBy" onChange={handleSortBy}>
//               <option value='created_at'>Date</option>
//               <option value='comment_count'>Comment Count</option>
//               <option value='votes'>Votes</option>
//             </select>
//             <select className="options" name="order" onChange={handleOrder}>
//               <option value="DESC">Descending</option>
//               <option value="ASC">Ascending</option>
//             </select>
//             <button className="options button">SORT</button>
//           </form>
//         );


//     }

//     export default SortArticles
