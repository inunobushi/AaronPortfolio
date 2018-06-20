import axios from 'axios';
import {LoginModel} from '../Models/Login.Model';


export default class AuthService {

    constructor(){
        const token = localStorage.getItem('token')
        if(token){
            this.isLoggedIn = true
        }
    }
   
        isLoggedIn = false;
    
        setIsLoggedIn(token: string) {
            this.isLoggedIn = true;
            localStorage.setItem('token', token);
        }
    
        getIsLoggedIn() {
            return this.isLoggedIn
        }

        login(user:LoginModel){
            //this.setIsLoggedIn('');
            return axios.post('api/login/login', user, { headers: { 'Content-Type': 'application/json' } })
                    .then( (response) => {
                        console.log(response);
                        this.setIsLoggedIn(response.data.token);
                        return response.data;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
        }

        logout(){
            localStorage.removeItem('token')
            this.isLoggedIn = false   
        }
}