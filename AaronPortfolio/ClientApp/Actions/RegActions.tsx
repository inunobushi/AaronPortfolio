import { REG_USER } from '../Constants/Constants';
import AuthAPI from '../API/AuthAPI';
import Store from '../Store/store';

const RegisterUser = (user: any) => {
    return dispatch => { 
        AuthAPI.Registration(user).then(res => {
            dispatch({type: REG_USER, payload: res})
        })
    }
}

export default RegisterUser;