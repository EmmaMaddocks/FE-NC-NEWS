import { useEffect } from "react";
import { BsTrash } from "react-icons/bs";
import * as api from '../utils/api'

const DeleteArticle = ({ id }) => {

  const deleteArticle = () => {
    api.deleteArticle(id)
      .catch((err) => {
        console.log(err);
      });
  };


    return (
        <BsTrash color="rgb(3, 169, 152)" size={16}
          className="deleteButton"
          onClick={() => {
            deleteArticle();

          }} />
    );
  
};

export default DeleteArticle;