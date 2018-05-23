import axios from 'axios';
import {ILoginModel} from '../Models/Login.Model';

interface IAuthServiceProps {
    isLoggedIn: boolean;
}

export default class AuthService {

    constructor(){
        const token = localStorage.getItem('token')
        if(token){
            this.isLoggedIn = true
        }
    }
   
        isLoggedIn = false;
    
        setIsLoggedIn = (token: string) => {
            this.isLoggedIn = true;
            localStorage.setItem('token', token);
        }
    
        getIsLoggedIn() {
            return this.isLoggedIn
        }

        login(user:ILoginModel){
            return axios.post('/users/login', user)
        }

        logout(){
            localStorage.removeItem('token')
            this.isLoggedIn = false   
        }
}