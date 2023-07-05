import axios from 'axios';
import env from 'react-dotenv'

export const registerUser = async (data) => {
   await axios({
      method: 'post',
      url: `${env.API_URL}/user/register`,
      data: data
   })
   .then((res) => {
      console.log(res);
   })
   .catch((e) => {
      console.log(e);
   })
}