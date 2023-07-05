import axios from 'axios';
import env from 'react-dotenv'

export const createPost = async (data, token) => {
   await axios({
      method: 'post',
      url: `${env.API_URL}/post/create`,
      data: data,
      headers: {
        'Authorization': `Bearer ${token}`
      }
   })
   .then((res) => {
      console.log(res);
   })
   .catch((e) => {
      console.log(e);
   })
}

export const getPosts = async () => {
    return await axios({
       method: 'get',
       url: `${env.API_URL}/post/get-all`
    })
    .then((res) => {
       return res.data.posts
    })
    .catch((e) => {
       console.log(e);
    })
 }