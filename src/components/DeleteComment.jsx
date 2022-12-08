import { useState } from "react";
import { BsTrash } from "react-icons/bs";
import * as api from '../utils/api'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const DeleteCommentByUser = ({ id }) => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const deleteComment = () => {
    api.deleteComment(id)
      .catch((err) => {
        console.log(err);
      });
  };


    return (
      <>
        <BsTrash color="rgb(3, 169, 152)" size={16}
          className="deleteButton"
          onClick={handleClickOpen}
 />

          <Dialog
 open={open}
 onClose={handleClose}
 aria-labelledby="alert-dialog-title"
 aria-describedby="alert-dialog-description"
>

 <DialogContent>
   <DialogContentText id="alert-dialog-description">
  Are you sure you want to delete this comment?
   </DialogContentText>
 </DialogContent>
 <DialogActions>
   <Button onClick={handleClose}>Cancel</Button>
   <Button   onClick={() => {
    deleteComment();
  }} autoFocus>
     I'm sure
   </Button>
 </DialogActions>
</Dialog>
</>
    );
  
};

export default DeleteCommentByUser;