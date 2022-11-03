import { useState } from 'react';
import * as api from '../utils/api'
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";


function HandleVotes({article}) {

    const {votes, article_id} = article

    const [err, setErr] = useState(null);
    const [voteIncrement, setVotes] = useState(0);

const HandleInc = () => {
  setVotes((currentVotes)=>(currentVotes+ 1))      
    api.patchVotes(article_id, 1)
    }

    const HandleDec = () => {
      setVotes((currentVotes)=>(currentVotes- 1))      
      api.patchVotes(article_id, -1)
      }

return (
  <>
   <p>Votes: {votes + voteIncrement}</p>
   <div className='votes'> 
    <BsHandThumbsUp color="black" size={20} onClick={HandleInc}/>
    <BsHandThumbsDown color="black" size={20} onClick={HandleDec}/>
    </div>
    </>
)
    }


  export default HandleVotes
