import { useState } from 'react';
import * as api from '../utils/api'
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";

function HandleCommentVotes({comment}) {

    const votes = comment.votes
    const comment_id = comment.comment_id


    const [err, setErr] = useState(null);
    const [voteIncrement, setVotes] = useState(0);
    const [voteUp, setVoteUp] = useState(false)
    const [voteDown, setVoteDown] = useState(false)

const HandleInc = () => {
  setVotes((currentVotes)=>(currentVotes+ 1))      
    api.patchVotes(comment_id, 1)
    setVoteUp(true)
    setVoteDown(false)
    }

    const HandleDec = () => {
      setVotes((currentVotes)=>(currentVotes- 1))      
      api.patchVotes(comment_id, -1)
      setVoteUp(false)
      setVoteDown(true)
      }

return (
  <>
    <p>Votes: {votes + voteIncrement}</p>
    <BsHandThumbsUp color={voteUp ? "rgb(3, 169, 152)" : "black" } size={16} onClick={HandleInc}/>
    <BsHandThumbsDown color={voteDown ? "rgb(3, 169, 152)" : "black" } size={16} onClick={HandleDec}/>
    </>
)
    }


  export default HandleCommentVotes
