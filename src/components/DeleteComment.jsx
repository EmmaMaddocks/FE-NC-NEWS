import { BsAppIndicator } from "react-icons/bs";
import * as api from '../utils/api'

const DeleteCommentByUser = ({ id, setComments }) => {


  const deleteComment = () => {
    api.deleteComment(id)
      .then(() => {
        setComments((oldComments) => {
          const newComments = oldComments.filter((comment) => {
            return comment.comment_id !== id;
          });
          return newComments;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

    return (
      <>
        <button
          className="deleteButton"
          onClick={() => {
            deleteComment();
          }}        >
          ❌ Delete
        </button>
      </>
    );
  
};

export default DeleteCommentByUser;