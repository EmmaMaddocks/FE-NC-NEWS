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
    <div className="vote">
    <p>Votes: {votes + voteIncrement}</p>
    <BsHandThumbsUp color="black" size={16} onClick={HandleInc}/>
    <BsHandThumbsDown color="black" size={16} onClick={HandleDec}/>
    </div>
)
    }


  export default HandleVotes
