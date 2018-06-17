import { LOGIN_USER } from '../Constants/Constants';
import LoginAPI from '../API/LoginAPI';
import AuthService from '../Services/AuthService';

const loginForm = ( dispatch: any, user: any) => {
    // return dispatch => { 
        LoginAPI.Login(user).then((data: any)=> {
            console.log(data);
            let service = new AuthService();
            service.setIsLoggedIn(data['token']);
            dispatch({type: LOGIN_USER, payload: data})
            }).catch(err => {
                console.log('err', err);
            })
    // }
}

export default loginForm;