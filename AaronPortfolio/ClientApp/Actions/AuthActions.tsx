import { LOGIN_USER, LOGOUT_USER } from '../Constants/Constants';
import AuthAPI from '../API/AuthAPI';
import AuthService from '../Services/AuthService';

const loginAction = ( dispatch: any, user: any) => {
    // return dispatch => { 
        AuthAPI.Login(user).then((data: any)=> {
            console.log(data);
            let service = new AuthService();
            service.setIsLoggedIn(data['token']);
            dispatch({type: LOGIN_USER, payload: data})
            }).catch(err => {
                console.log('err', err);
            })
    // }
}

const logoutAction = ( dispatch: any) => {
    AuthAPI.Logout();
    return dispatch({type: LOGOUT_USER});
}

export {loginAction, logoutAction};