import AuthService from '../Services/AuthService';
const Auth = new AuthService();

const Login = (user: any) =>{
    return Auth.login(user);
}

export default {Login};