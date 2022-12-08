import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import HandleVotes from "./Votes";
import Comments from "./Comments";
import formatDate from "../utils/api";
import { BsChatQuote } from "react-icons/bs";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddArticle from './AddArticle';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import CreateIcon from '@mui/icons-material/Create';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import Button from '@mui/material/Button';
import AddComment from "./AddComment";


const FullArticle = ({loggedInUser}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState([]);
  const [error, setError] = useState(null);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { article_id } = useParams();
  

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://fair-blue-ladybug-wear.cyclic.app/api/articles/${article_id}`)
      .then((res) => res.json())
      .then((response) => {
        setArticle(response);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [setArticle]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>    <div className="article">
        <div className="article-details">
      <p>Posted by {article.author} </p>
      <p>{formatDate(article.created_at)}</p>
      </div>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <div className="article-details">
<div className="comment-count">
    <BsChatQuote color="black" size={20}/>
    <p>{article.comment_count}</p>
    </div>
     <div className="article-votes">
      <HandleVotes article={article}/>
      </div>
</div>
    </div>

 
 <Button sx={{ borderRadius: '16px', color: 'white' }} onClick={handleClickOpen} size="small" variant="contained"  >
 Add Comment 
 </Button>

    <Dialog open={open} onClose={handleClose}>
  <DialogTitle>Add a comment</DialogTitle>
  <DialogContent>
<AddComment article_id={article_id} open={open} setOpen={setOpen}/>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>Close</Button>
  </DialogActions>
</Dialog>



    <Comments article_id={article_id} loggedInUser={loggedInUser}/>
    </>

  );
};

export default FullArticle;
