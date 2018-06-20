import axios from 'axios';
import AuthService from '../Services/AuthService';

const Auth = new AuthService();

const Registration = (user) => {
   return axios.post('api/registration/register', user, { headers: { 'Content-Type': 'application/json' } }).then(res => {console.log(res)});
   }


const Login = (user: any) =>{
    return Auth.login(user);
}

const Logout = () => {
    return Auth.logout();
}

export default {Registration, Login, Logout};