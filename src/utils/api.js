import axios from "axios";
const BASE_URL = "https://em-nc-news.herokuapp.com/api";

export function getVotes (article_id) {
    return fetch(`https://em-nc-news.herokuapp.com/api/articles/${article_id}`)
    .then((res) => {
        return res.json();
    })
}

// export function updateVotes (article_id) {
//     fetch(`https://em-nc-news.herokuapp.com/api/articles/${article_id}`, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ votes: count }),
// }).then((response) => response.json());
// }

// export function patchVotes  (article_id, voteIncrement) {
//     fetch(`/articles/${article_id}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         'votes': voteIncrement
//       }),
//     }).then((response) => response.json());
//     }

    export const patchVotes = async (article_id, val) => {
        await axios.patch(`${BASE_URL}/articles/${article_id}`, { inc_votes: val });
      };