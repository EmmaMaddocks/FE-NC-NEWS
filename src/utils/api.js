import axios from "axios";
const BASE_URL = "https://em-nc-news.herokuapp.com/api";

    export const patchVotes = async (article_id, val) => {
        await axios.patch(`${BASE_URL}/articles/${article_id}`, { inc_votes: val });
      };


      const formatDate = date => {
        return new Date(date).toLocaleString('en-US');
      };
      export default formatDate;