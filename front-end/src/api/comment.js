import axios from "axios";
import env from 'react-dotenv';

export const createComment = async (postId, data, token) => {
    return await axios({
       method: 'post',
       url: `${env.API_URL}/comment/create/${postId}`,
       data: data,
       headers: {
         'Authorization': `Bearer ${token}`
       }
    })
    .then((res) => {
       return res.data.post
    })
    .catch((e) => {
       console.log(e);
    })
}

export const getComments = async (postId) => {
    return await axios({
       method: 'get',
       url: `${env.API_URL}/comment/get-all/${postId}`,
    })
    .then((res) => {
        return res.data.comments
    })
    .catch((e) => {
       console.log(e);
    })
 }