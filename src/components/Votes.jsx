<<<<<<< Updated upstream
// import { useState, useEffect } from "react"
// import * as api from '../utils/api'
// import AllTopics from "./AllTopics";


// const Votes = (props) => {
//     let { votes, article_id } = props
//     const [voteIncrement, setVotes] = useState(0);
//     const [err, setErr] = useState(null);
=======
import { useState } from 'react';
import * as api from '../utils/api'

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
    <button className="vote-btn" onClick={HandleInc}>+</button>
    <button className="vote-btn" onClick={HandleDec}>-</button>
    </div>
)
    }
>>>>>>> Stashed changes


  
  
//     // const HandleInc = () => {
//     //     setVotes((currCount) => currCount + 1);
//     //     api.patchVotes(article_id, 1)
//     //     }


  
//     if (err) return <p>{err}</p>;
//     return (                                                                                        
//         <div className="vote">
//         <p>Votes: {votes + voteIncrement}</p>
//         <button className="vote-btn" onClick={api.voteOnArticle(1)}>+</button>
//         {/* <button className="vote-btn" onClick={HandleDec}>-</button> */}
//         </div>
//     );
//   };

//   export default Votes