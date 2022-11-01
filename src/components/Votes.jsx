// import { useState, useEffect } from "react"
// import * as api from '../utils/api'
// import AllTopics from "./AllTopics";


// const Votes = (props) => {
//     let { votes, article_id } = props
//     const [voteIncrement, setVotes] = useState(0);
//     const [err, setErr] = useState(null);


  
  
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