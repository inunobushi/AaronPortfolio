import {combineReducers} from 'redux';

import AuthReducer from './AuthReducer';
import LoginReducer from './LoginReducer';
import ContactReducer from './ContactReducer';
import ReCaptchaReducer from './ReCaptchaReducer';

export default combineReducers({
    auth: AuthReducer,
    login: LoginReducer,
    contact: ContactReducer,
    recaptcha: ReCaptchaReducer
})