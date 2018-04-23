import axios from 'axios';
import {LoginModel} from '../Models/Login.Model';

interface AuthServiceProps {
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

        login(user:LoginModel){
            return axios.post('/users/login', user)
        }

        logout(){
            localStorage.removeItem('token')
            this.isLoggedIn = false   
        }
}