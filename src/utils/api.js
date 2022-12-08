import axios from "axios";
const BASE_URL = "https://fair-blue-ladybug-wear.cyclic.app/api";
const api = axios.create({
    baseURL: "https://fair-blue-ladybug-wear.cyclic.app/api",
  });

    export const patchVotes = async (article_id, val) => {
        await axios.patch(`${BASE_URL}/articles/${article_id}`, { inc_votes: val });
      };


      export const getComments = async article_id => {
        const { data } = await axios.get(`${BASE_URL}/articles/${article_id}/comments`
        );
        return data;
      };

      export const patchCommentVotes = async (comment_id, val) => {
        await axios.patch(`${BASE_URL}/articles/${comment_id}`, { inc_votes: val });
      };


      export const postComment = (commentBody, loggedInUser, article_id) => {
        return axios.post(`${BASE_URL}/articles/${article_id}/comments`, {
          username: loggedInUser,
          body: commentBody
        }).then(({ data }) => {
          return data
        })
      }

      export const postArticle = (title, topic, loggedInUser, body) => {
        return axios.post(`${BASE_URL}/articles/`, {
          title: title,
          topic: topic,
          author: loggedInUser,
          body: body,
        }).then(({ data }) => {
          return data
        })
      }

      export const getArticles = (sort_by, order, topic) => {
        let path = `/articles`
        if (sort_by) path += `?sort_by=${sort_by}`;
        if (order) path += `&order=${order}`;
        if (topic) path += `&topic=${topic}`;
        return api
        .get(path)
        .then(({ data }) => {
          return data;
        })

    };

      const formatDate = date => {
        return new Date(date).toLocaleString('en-US');
      };
      export default formatDate;


      export const deleteComment = (comment_id) => {
        return axios.delete(`${BASE_URL}/comments/${comment_id}`).catch((err) => {
            console.log(err);
          });
        };
      
        export const deleteArticle = (article_id) => {
          return axios.delete(`${BASE_URL}/articles/${article_id}`).catch((err) => {
              console.log(err);
            });
          };
        