import { useState } from 'react';
import * as api from '../utils/api'
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";


function HandleVotes({article}) {

    const {votes, article_id} = article

    const [err, setErr] = useState(null);
    const [voteUp, setVoteUp] = useState(false)
    const [voteDown, setVoteDown] = useState(false)

    const [voteIncrement, setVotes] = useState(0);

const HandleInc = () => {
  setVotes((currentVotes)=>(currentVotes+ 1))      
    api.patchVotes(article_id, 1)
    setVoteUp(true)
    setVoteDown(false)
    }

    const HandleDec = () => {
      setVotes((currentVotes)=>(currentVotes- 1))      
      api.patchVotes(article_id, -1)
      setVoteUp(false)
      setVoteDown(true)
      }

return (
  <>
   <p>{votes + voteIncrement}</p>
   <div className='votes'> 
    <BsHandThumbsUp         color={voteUp ? "rgb(3, 169, 152)" : "black" } size={20} onClick={HandleInc}/>
    <BsHandThumbsDown color={voteDown ? "rgb(3, 169, 152)" : "black" } size={20} onClick={HandleDec}/>
    </div>
    </>
)
    }


  export default HandleVotes
