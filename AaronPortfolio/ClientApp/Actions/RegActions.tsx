import { REG_USER } from '../Constants/Constants';
import AuthAPI from '../API/AuthAPI';

const RegisterUser = ( dispatch: any, user: any) => {
    // return dispatch => { 
        AuthAPI.Registration(user).then(res => {
            dispatch({type: REG_USER, payload: res})
        })
    // }
}

export default RegisterUser;