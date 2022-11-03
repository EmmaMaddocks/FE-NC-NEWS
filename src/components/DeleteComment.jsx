import { useEffect } from "react";
import { BsTrash } from "react-icons/bs";
import * as api from '../utils/api'

const DeleteCommentByUser = ({ id }) => {

  const deleteComment = () => {
    api.deleteComment(id)
      .catch((err) => {
        console.log(err);
      });
  };


    return (
        <BsTrash
          className="deleteButton"
          onClick={() => {
            deleteComment();

          }} />
    );
  
};

export default DeleteCommentByUser;