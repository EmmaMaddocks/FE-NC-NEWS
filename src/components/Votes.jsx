
function HandleVotes() {
    const [err, setErr] = useState(null);

const HandleInc = () => {
  setVotes((currentVotes)=>(currentVotes+ 1))      
    api.patchVotes(article_id, 1)
    }

    const HandleDec = () => {
      setVotes((currentVotes)=>(currentVotes- 1))      
      api.patchVotes(article_id, -1)
      }


    }

    export default HandleVotes