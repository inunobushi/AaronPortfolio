import axios from 'axios';

const Registration = (user) => {
   return axios.post('api/account/register/', user, { headers: { 'Content-Type': 'application/json' } })
}

export default {Registration};