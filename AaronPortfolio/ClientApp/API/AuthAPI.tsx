import axios from 'axios';

const Registration = (user) => {
   return axios.post('api/register/register', user, { headers: { 'Content-Type': 'application/json' } }).then(res => {console.log(res)});
   }

export default {Registration};