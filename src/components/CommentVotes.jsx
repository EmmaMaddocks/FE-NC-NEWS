import { useState } from 'react';
import * as api from '../utils/api'

function HandleCommentVotes({comment}) {

    const votes = comment.votes
    const comment_id = comment.comment_id


    const [err, setErr] = useState(null);
    const [voteIncrement, setVotes] = useState(0);

const HandleInc = () => {
  setVotes((currentVotes)=>(currentVotes+ 1))      
    api.patchVotes(comment_id, 1)
    }

    const HandleDec = () => {
      setVotes((currentVotes)=>(currentVotes- 1))      
      api.patchVotes(comment_id, -1)
      }

return (
    <div className="vote">
    <p>Votes: {votes + voteIncrement}</p>
    <button className="vote-btn" onClick={HandleInc}>+</button>
    <button className="vote-btn" onClick={HandleDec}>-</button>
    </div>
)
    }


  export default HandleCommentVotes
