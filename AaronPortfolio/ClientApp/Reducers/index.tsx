import {combineReducers} from 'redux';

import AuthReducer from './AuthReducer';
import LoginReducer from './LoginReducer';
import ContactReducer from './ContactReducer';

export default combineReducers({
    auth: AuthReducer,
    login: LoginReducer,
    contact: ContactReducer
})