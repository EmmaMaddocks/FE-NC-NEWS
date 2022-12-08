import { useState } from 'react';
import * as api from '../utils/api'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';


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
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
   <p>{votes + voteIncrement}</p>

   <IconButton aria-label="vote on article">
   
    <ThumbUpIcon         color={voteUp ? "rgb(3, 169, 152)" : "black" } size={20} onClick={HandleInc}/>
    </IconButton>
    <IconButton aria-label="vote on article">

    <ThumbDownIcon color={voteDown ? "rgb(3, 169, 152)" : "black" } size={20} onClick={HandleDec}/>
    </IconButton>
    </Box>
    </>
)
    }


  export default HandleVotes
