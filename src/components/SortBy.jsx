
import { useState } from "react"
import * as api from '../utils/api'
import {  BsChatQuote } from "react-icons/bs";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function SortBy({articles, setArticles, topic, setOrderBy, setSortBy, order, sort_by}) {



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
    api.getArticles(sort_by, order, topic)
    .then((data)=>{
        setArticles(data);
    })
  }



return (
    <>


<form>
    <FormControl sx={{ m: 1, minWidth: 120 }}>
    <InputLabel id="sort_by">Sort by</InputLabel>

        <Select
          value={sort_by}
          label="Sort By"
          onChange={handleSortBy}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          defaultValue=""
        >

          <MenuItem value='created_at'>Date</MenuItem>
          <MenuItem value='comment_count'>Comment Count</MenuItem>
          <MenuItem value='votes'>Votes</MenuItem>

        </Select>
      </FormControl>
      
  <FormControl sx={{ m: 1, minWidth: 120 }}>
  <InputLabel id="order">Order</InputLabel>

        <Select
          value={order}
          label="Order"
          onChange={handleOrder}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          defaultValue=""
        >
   
          <MenuItem value="DESC">Descending</MenuItem>
          <MenuItem value="ASC">Ascending</MenuItem>
        </Select>
      </FormControl>



      </form>

</>
)
}

export default SortBy